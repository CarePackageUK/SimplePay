// HMRC boundary: transport is intentionally separate from payroll calculations.
export const HMRC_ENV={sandbox:"https://test-api.service.hmrc.gov.uk",production:"https://api.service.hmrc.gov.uk"};
export function hmrcConfig({environment="sandbox",clientId,clientSecret,vendorId}={}){
 if(!["sandbox","production"].includes(environment))throw Error("Invalid HMRC environment");
 return{environment,baseUrl:HMRC_ENV[environment],credentialsPresent:Boolean(clientId&&clientSecret),vendorId:vendorId||null};
}
export function rtiTransmissionGate({fpsDraft,credentialsPresent,rtiSchemaValidated}){
 const blockers=[];if(fpsDraft?.status!=="DRAFT_ONLY")blockers.push("Valid FPS draft required");if(!rtiSchemaValidated)blockers.push("2026/27 RTI schema validation required");if(!credentialsPresent)blockers.push("HMRC credentials required");
 return{ready:blockers.length===0,blockers};
}