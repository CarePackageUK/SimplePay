# SimplePay payroll engine status

## Implemented in v0.1
- Versioned 2026/27 rules object
- Monthly employee Class 1 NI for category A
- Monthly employer Class 1 NI for category A
- Monthly Student Loan Plans 1, 2, 4 and 5
- Monthly Postgraduate Loan
- Explicit blocked-result state for incomplete calculations
- Automated reference tests

## Deliberately not implemented yet
- PAYE income tax
- cumulative and Week 1/Month 1 tax-code operation
- Scottish/Welsh tax prefixes
- K codes, BR/D0/D1/0T/NT and other code handling
- directors' NI
- NI categories other than A
- pensions
- statutory payments
- attachment orders
- irregular pay periods
- FPS/EPS generation

The UI must not call a result a compliant net-pay calculation until all applicable modules are implemented and tested against HMRC reference cases.
