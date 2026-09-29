import {specialCodeTax,payeTax} from './paye-engine.js';
const eq=(a,b)=>Math.abs(a-b)<.001;
const tests=[
 ["NT",eq(specialCodeTax({taxCode:"NT",gross:3000}).tax,0)],
 ["BR M1",eq(specialCodeTax({taxCode:"BR",gross:3000}).tax,600)],
 ["D0 M1",eq(specialCodeTax({taxCode:"D0",gross:3000}).tax,1200)],
 ["D1 M1",eq(specialCodeTax({taxCode:"D1",gross:3000}).tax,1350)],
 ["BR cumulative",eq(specialCodeTax({taxCode:"BR",gross:3000,basis:"CUMULATIVE",previousTaxablePay:6000,previousTaxPaid:1000}).tax,800)],
 ["1257L blocked",payeTax({taxCode:"1257L",gross:3000}).status==="BLOCKED"],
 ["SBR blocked pending regional routine",payeTax({taxCode:"SBR",gross:3000}).status==="BLOCKED"]
];for(const [n,ok] of tests){if(!ok)throw Error("FAILED "+n);console.log("PASS",n)}console.log("PAYE scaffold tests passed");