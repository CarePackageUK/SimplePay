/* PAYE state model: keeps tax inputs explicit and auditable. */
export function createPayeState({taxCode="1257L",basis="CUMULATIVE",taxPeriod=1,previousTaxablePay=0,previousTaxPaid=0}={}){
 if(!["CUMULATIVE","MONTH_1"].includes(basis)) throw new Error("Unsupported PAYE basis");
 if(taxPeriod<1||taxPeriod>12) throw new Error("Monthly tax period must be 1-12");
 return {taxCode:String(taxCode).toUpperCase().trim(),basis,taxPeriod,previousTaxablePay:Number(previousTaxablePay),previousTaxPaid:Number(previousTaxPaid)};
}
export function validatePayeState(s){
 const errors=[];
 if(!s.taxCode) errors.push("Tax code required");
 if(s.basis==="CUMULATIVE"&&(s.previousTaxablePay<0||s.previousTaxPaid<0)) errors.push("Cumulative previous pay/tax cannot be negative");
 return {ok:errors.length===0,errors};
}