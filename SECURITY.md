# Security Policy

## Supported Versions

Security fixes are best-effort for the latest published project state.

| Version | Supported |
|---|---|
| `0.1.x` | Yes |
| `< 0.1.0` | No |

## Reporting a Vulnerability

If you discover a security issue, please report it privately to the maintainers through the repository contact path used by your team or hosting platform.

Please include:

- a clear description of the issue
- affected files, scripts, or workflows
- reproduction steps when possible
- expected impact
- any suggested mitigation

Please avoid opening a public issue for vulnerabilities that could expose users, repositories, credentials, or internal documentation.

## Scope Notes

This project is a requirement-generation skill package, so likely security-sensitive areas include:

- prompt or template behavior that could encourage unsafe data handling
- scripts that read or transform workspace content
- example artifacts that accidentally contain sensitive information
- documentation that suggests unsafe operational practices

## Response Expectations

Maintainers should aim to:

1. confirm receipt
2. assess severity and scope
3. prepare a fix or mitigation
4. communicate when a safe public disclosure is appropriate

