![example workflow](https://github.com/asa55/asa55.github.io/actions/workflows/continuous-integration.yml/badge.svg) | ![example workflow](https://github.com/asa55/asa55.github.io/actions/workflows/continuous-delivery.yml/badge.svg) | ![example workflow](https://github.com/asa55/asa55.github.io/actions/workflows/deployment.yml/badge.svg)
--- | --- | ---

## Development environment

* Win11
  * Chocolatey
    * VSCode
    * git
    * NodeJS

## Development workflow

```mermaid
flowchart LR
    id1(Pull down locally)-- permits -->id2(npm install, npm run dev)-- permits -->id3(Local frontend development)
```

## Deployment workflow

```mermaid
flowchart LR
    id1(Push to not main)-- triggers -->id2(Integration pipeline)-- permits -->id3(Merge into main)-- triggers -->id3(Deployment pipeline)-- updates -->asa55.github.io
```

## Notes on security

* Branch protection rule on main requries passing status for CodeQL code scan prior to merge
* Dependabot is enabled
* GitHub Secrets are used for repo secrets

## Notes on testing

* Unit and E2E tests are part of CI pipeline
* Unit tests via vitest
* E2E via Playwright

## Notes on license

Source code is MIT, all rights reserved for site content. In other words, feel free to use code snippets but remove any information about me.