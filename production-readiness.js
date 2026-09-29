export const CHECKS=[
 {id:"paye",label:"PAYE ordinary-code routine validated against HMRC 2026/27 test data",done:false},
 {id:"ni",label:"All supported NI categories validated against HMRC 2026/27 test data",done:false},
 {id:"loans",label:"Student/Postgraduate loans validated against HMRC test data",done:false},
 {id:"pensions",label:"Pension provider/scheme definitions and AE duties complete",done:false},
 {id:"statpay",label:"Statutory-pay eligibility/date/AWE routines complete",done:false},
 {id:"rti",label:"FPS/EPS XML validates against RTI RIM 2027 v1.0",done:false},
 {id:"sandbox",label:"End-to-end HMRC test-service submission accepted",done:false},
 {id:"security",label:"Authenticated server, encryption, RBAC, audit and backup controls",done:false},
 {id:"privacy",label:"GDPR/DPA documentation and processor/subprocessor controls",done:false},
 {id:"ops",label:"Monitoring, incident response and disaster recovery tested",done:false}
];
export function readiness(){return{ready:CHECKS.every(x=>x.done),checks:CHECKS}}