// 2026/27 statutory-pay foundation. Eligibility/date rules remain separate.
export const STATUTORY_2026_27={SSP_WEEKLY:123.25,FAMILY_STANDARD_WEEKLY:194.32};
const p=n=>Math.round((n+Number.EPSILON)*100)/100;
export function sspWeekly(awe){if(awe<0)throw Error("AWE cannot be negative");return p(Math.min(STATUTORY_2026_27.SSP_WEEKLY,awe*.8))}
export function familyStandardWeekly(awe){if(awe<0)throw Error("AWE cannot be negative");return p(Math.min(STATUTORY_2026_27.FAMILY_STANDARD_WEEKLY,awe*.9))}
export function smpWeekly(awe,week){if(week<1||week>39) return {status:"BLOCKED",reason:"SMP payable-week must be 1-39"};return {status:"CALCULATED",amount:p(week<=6?awe*.9:Math.min(STATUTORY_2026_27.FAMILY_STANDARD_WEEKLY,awe*.9))}}