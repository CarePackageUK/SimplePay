# SimplePay MVP architecture

## Rule
A payroll result can be labelled final only when every applicable calculation module reports CALCULATED and the combination is covered by tests.

## Current modules
- PAYE state and partial PAYE engine
- Class 1 NI Category A (monthly)
- Student/Postgraduate Loans (monthly)
- Automatic-enrolment qualifying-earnings pension minimum model (monthly)
- 2026/27 statutory-pay rate foundation
- Immutable-style pay-run snapshot builder
- RTI FPS draft domain model

## Fail-closed areas
PAYE ordinary/special regional codes, most NI categories/directors, pension provider-specific definitions, statutory-pay eligibility/date logic, attachments, benefits, irregular pay frequencies and live RTI XML/API transmission.

## Data boundary
No live employee payroll data should be stored in browser localStorage in production. The current GitHub Pages app is a demonstration front end only. Production requires authenticated server-side storage, encryption, access controls and audit logging.
