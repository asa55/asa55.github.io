![example workflow](https://github.com/asa55/asa55.github.io/actions/workflows/continuous-integration.yml/badge.svg) | ![example workflow](https://github.com/asa55/asa55.github.io/actions/workflows/continuous-deployment.yml/badge.svg)
--- | --- 

## ℹ️ Dev dependencies

Not limited to this, it's what I'm using:

* Win11 (OS)
  * Chocolatey (Windows client software management)
    * VSCode (Editor)
    * git (VCS) (integrated with GitHub ofc using buitin cred manager and OAuth versus e.g. a PAT)
    * NodeJS (Comes with NPM for package management and enables local dev server)

## ℹ️ Development workflow

```mermaid
flowchart LR
    id1(Pull down locally)-- permits -->id2(npm run dev)-- permits -->id3(Local dev w/ hot reload)
```

## ℹ️ Integration workflow

```mermaid
flowchart LR
    id1(Push to not main)-- triggers -->id2(Lint and build)-- updates -->id3(asa55.github.io/test)-- triggers -->id3(Unit, E2E, SAST testing)-- permits -->id4(Merge to main)
```

## ℹ️ Deployment workflow

```mermaid
flowchart LR
    id1(Merge to main)-- updates -->id2(asa55.github.io)
```

## ℹ️ Security

* Branch protection rule on main requries passing status for CodeQL scan prior to merge
* Dependabot is enabled
* GitHub Secrets are used for repo secrets

## ℹ️ Testing

* Unit (vitest), E2E (Playwright), SAST (CodeQL) tests are part of CI pipeline
* Local development results in the creation of a dist folder with contents. Following local development, this can get pushed upstream or not, doesn't really matter, it gets paved over by CI/CD pipelines with fresh build content regardless
* E2E testing happens on the asa55.github.io/test endpoint, before changes make their way to asa55.github.io

## ℹ️ License

Source code is MIT, all rights reserved for site content. In plain language, feel free to use anything except information about me.