/* PAYE engine scaffold aligned to HMRC software-developer specification.
   Special codes implemented only where the operation is unambiguous.
   General suffix/K-code routine remains BLOCKED until validated against HMRC 2026/27 PAYE test data. */
const pennies=n=>Math.round((n+Number.EPSILON)*100)/100;
export function specialCodeTax({taxCode,gross,basis="MONTH_1",previousTaxablePay=0,previousTaxPaid=0}){
 const code=String(taxCode).toUpperCase().replace(/\s/g,"");
 const prefix=code.startsWith("S")?"S":code.startsWith("C")?"C":"";
 const bare=prefix?code.slice(1):code;
 if(bare==="NT") return {status:"CALCULATED",tax:0,method:"NT"};
 if(prefix) return {status:"BLOCKED",reason:"Scottish/Welsh special-code rates require their dedicated 2026/27 routine"};
 const rates={BR:.20,D0:.40,D1:.45};
 if(!(bare in rates)) return {status:"BLOCKED",reason:"Use HMRC PAYE tax-table routine"};
 const rate=rates[bare];
 if(basis==="MONTH_1") return {status:"CALCULATED",tax:pennies(gross*rate),method:bare+" MONTH_1"};
 const cumulativeTax=pennies((previousTaxablePay+gross)*rate);
 return {status:"CALCULATED",tax:pennies(Math.max(0,cumulativeTax-previousTaxPaid)),method:bare+" CUMULATIVE"};
}
export function payeTax(input){
 const code=String(input.taxCode||"").toUpperCase();
 if(/^(S|C)?(BR|D0|D1)$/.test(code)||code==="NT") return specialCodeTax(input);
 return {status:"BLOCKED",reason:"Suffix/K/0T PAYE routine awaiting HMRC 2026/27 test-data validation"};
}