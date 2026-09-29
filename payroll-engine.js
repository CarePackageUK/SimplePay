/* SimplePay calculation engine v0.1
   Scope: monthly 2026/27, NI category A + student loans.
   PAYE income tax deliberately blocked pending HMRC PAYE cumulative/table implementation. */
export const RULES_2026_27={
 taxYear:"2026/27",
 ni:{A:{primaryThreshold:1048,upperEarningsLimit:4189,employeeMain:.08,employeeUpper:.02,secondaryThreshold:417,employer:.15}},
 loans:{
  "Plan 1":{threshold:2241.66,rate:.09},"Plan 2":{threshold:2448.75,rate:.09},
  "Plan 4":{threshold:2816.25,rate:.09},"Plan 5":{threshold:2083.33,rate:.09},
  "Postgraduate":{threshold:1750,rate:.06}
 }
};
const pennies=n=>Math.round((n+Number.EPSILON)*100)/100;
export function monthlyNIC(gross,category="A"){
 const r=RULES_2026_27.ni[category]; if(!r) throw new Error("Unsupported NI category");
 const main=Math.max(0,Math.min(gross,r.upperEarningsLimit)-r.primaryThreshold);
 const upper=Math.max(0,gross-r.upperEarningsLimit);
 const employee=pennies(main*r.employeeMain+upper*r.employeeUpper);
 const employer=pennies(Math.max(0,gross-r.secondaryThreshold)*r.employer);
 return {employee,employer};
}
export function monthlyLoan(gross,plan){
 if(!plan||plan==="No") return 0; const r=RULES_2026_27.loans[plan]; if(!r) throw new Error("Unsupported loan plan");
 return Math.floor(Math.max(0,gross-r.threshold)*r.rate);
}
export function supportedMonthlyPreview({gross,niCategory="A",studentLoan="No"}){
 const ni=monthlyNIC(gross,niCategory); const loan=monthlyLoan(gross,studentLoan);
 return {gross:pennies(gross),employeeNI:ni.employee,employerNI:ni.employer,studentLoan:loan,
  status:"PARTIAL",blocked:["PAYE income tax","pension scheme-specific calculation"],
  note:"Not a final net-pay calculation."};
}