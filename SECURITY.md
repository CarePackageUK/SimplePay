# Production security boundary

The GitHub Pages site is a public demonstration only. Do not enter real employee payroll, bank, NI-number, address or tax data.

Production architecture requires:
- authenticated backend and tenant isolation
- encryption in transit and at rest
- encrypted secret store for HMRC/integration credentials
- MFA/passkey-capable authentication
- role-based permissions
- immutable audit trail
- database backups and tested restore
- rate limiting and session controls
- logging/monitoring without leaking payroll secrets
- GDPR/DPA retention, deletion and data-subject workflows
- penetration/security testing before live payroll use

Browser localStorage is acceptable only for disposable demo data and must not be the production payroll database.
