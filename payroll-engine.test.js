import {monthlyNIC,monthlyLoan} from './payroll-engine.js';
const near=(a,b)=>Math.abs(a-b)<0.01;
const cases=[
 ["NI A £1048",near(monthlyNIC(1048).employee,0)],
 ["NI A £4189",near(monthlyNIC(4189).employee,251.28)],
 ["Employer NI £1000",near(monthlyNIC(1000).employer,87.45)],
 ["Plan 2 below threshold",monthlyLoan(2400,"Plan 2")===0],
 ["Plan 2 £3000",monthlyLoan(3000,"Plan 2")===49],
 ["Plan 5 £3000",monthlyLoan(3000,"Plan 5")===82],
 ["PGL £2083",monthlyLoan(2083,"Postgraduate")===19]
];
for(const [name,ok] of cases){if(!ok)throw new Error("FAILED: "+name);console.log("PASS",name)}
console.log("All SimplePay engine tests passed.");