# Calculation engine roadmap

## Authority
SimplePay calculation behaviour must be validated against HMRC's current payroll technical specifications and official software-developer test data before a routine can be marked production-capable.

## State now
- 2026/27 NI Category A module
- Student/Postgraduate Loan module
- Explicit PAYE employee state model
- PAYE NT, BR, D0 and D1 scaffold for England/Northern Ireland
- Cumulative vs Month 1 state separated
- Unsupported PAYE codes fail closed

## Next validation gate
Implement the HMRC PAYE Tax Table Routine v24.0 for ordinary suffix codes, 0T and K codes and validate it against the official 2026/27 PAYE test dataset.

Then add:
1. Scottish PAYE rates/codes
2. Welsh PAYE codes
3. remaining NI categories and directors
4. pension scheme calculation model
5. statutory payments
6. payroll aggregation + immutable pay-run snapshots
7. FPS/EPS payload generation and sandbox validation

A UI must never display a blocked or partial calculation as a final compliant net-pay figure.
