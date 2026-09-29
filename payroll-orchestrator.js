import{monthlyNIC,monthlyLoan}from'./payroll-engine.js';import{payeTax}from'./paye-engine.js';import{monthlyMinimumContributions}from'./pension-engine.js';
const p=n=>Math.round((n+Number.EPSILON)*100)/100;
export function calculateEmployeeMonth(employee,gross){
 const blockers=[];let ni,student=0,pgl=0,pension,tax;
 try{ni=monthlyNIC(gross,employee.ni?.category||"A")}catch(e){blockers.push(e.message)}
 try{student=monthlyLoan(gross,employee.loans?.student||"No");if(employee.loans?.postgraduate)pgl=monthlyLoan(gross,"Postgraduate")}catch(e){blockers.push(e.message)}
 pension=monthlyMinimumContributions(gross,{employeeRate:employee.pension?.employeeRate??.05,employerRate:employee.pension?.employerRate??.03});if(pension.status==="BLOCKED")blockers.push(pension.reason);
 tax=payeTax({taxCode:employee.tax?.code,gross,basis:employee.tax?.basis,previousTaxablePay:employee.tax?.previousTaxablePay,previousTaxPaid:employee.tax?.previousTaxPaid});if(tax.status!=="CALCULATED")blockers.push(tax.reason);
 const deductions={tax:tax.tax||0,employeeNI:ni?.employee||0,studentLoan:student,postgraduateLoan:pgl,pensionEmployee:pension.employee||0};
 const net=p(gross-Object.values(deductions).reduce((a,b)=>a+b,0));
 return{status:blockers.length?"PARTIAL":"CALCULATED",gross:p(gross),deductions,employer:{ni:ni?.employer||0,pension:pension.employer||0},net: blockers.length?null:net,blockers};
}