// RTI domain model only. XML/schema generation must be validated against HMRC's current RTI technical pack.
export function buildFpsDraft({payRun,payeReference,accountsOfficeReference,employees}){
 const missing=[];if(!payeReference)missing.push("PAYE reference");if(!accountsOfficeReference)missing.push("Accounts Office reference");if(!payRun?.payDate)missing.push("pay date");
 if(missing.length)return{status:"BLOCKED",missing};
 return{status:"DRAFT_ONLY",message:"Not ready for HMRC transmission",header:{taxYear:payRun.taxYear,payDate:payRun.payDate,payeReference,accountsOfficeReference},employees:employees||payRun.employees};
}