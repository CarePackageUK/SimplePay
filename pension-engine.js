// SimplePay 2026/27 automatic-enrolment qualifying-earnings engine.
// Default statutory minimum model only. Provider-specific definitions must be configured separately.
export const AE_2026_27={annual:{lower:6240,trigger:10000,upper:50270},monthly:{lower:520,trigger:833,upper:4189},minimum:{employer:.03,total:.08}};
const p=n=>Math.round((n+Number.EPSILON)*100)/100;
export function monthlyQualifyingEarnings(gross){return p(Math.max(0,Math.min(gross,AE_2026_27.monthly.upper)-AE_2026_27.monthly.lower))}
export function monthlyMinimumContributions(gross,{employeeRate=.05,employerRate=.03}={}){
 const qe=monthlyQualifyingEarnings(gross);
 if(employeeRate+employerRate<.08||employerRate<.03) return {status:"BLOCKED",reason:"Rates below statutory minimum for this qualifying-earnings model"};
 return {status:"CALCULATED",qualifyingEarnings:qe,employee:p(qe*employeeRate),employer:p(qe*employerRate),total:p(qe*(employeeRate+employerRate))};
}
export function aeEarningsStatus(monthlyGross){if(monthlyGross>=AE_2026_27.monthly.trigger)return "ABOVE_TRIGGER";if(monthlyGross>=AE_2026_27.monthly.lower)return "BETWEEN_LOWER_AND_TRIGGER";return "BELOW_LOWER"}