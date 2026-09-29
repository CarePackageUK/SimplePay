# HMRC integration track

## 2026/27 RTI
HMRC publishes RTI RIM 2027 v1.0 and a 2026/27 data item guide. The test service is supported from October 2025 and live service from March 2026.

SimplePay must validate FPS/EPS output against the official artefacts before enabling transmission.

## Developer environment
HMRC Developer Hub uses a sandbox/test environment and production environment. Credentials are external secrets and are never committed to this repository.

## Recognition
PAYE recognition is a later release gate after development, thorough testing and market availability. It is not claimed by this project.

## Future year
2027/28 has a separate RTI technical specification. SimplePay therefore keeps tax-year submission schemas versioned rather than overwriting the 2026/27 implementation.
