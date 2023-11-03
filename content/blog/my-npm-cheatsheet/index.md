---
title: "My npm cheatsheet"
date: 2023-10-23T17:42:00.000Z
---

I've compiled an overview of the npm commands I use frequently. Mostly so that I'm able to come back here if I ever forget anything. Please note that I've chosen React as the "package of honor" for all the examples below.

## Initialize new project

It's nice to pass `-y` to skip the prompts. If I'm starting a new project, then it's in the early stages, and I likely don't know _any_ of the answers to those prompts.

```bash
npm init -y
```

## Dependency management
Note: For commands in the block below, you can specify an exact package version like `<package>@1.2.3`.

```bash
npm i react # Install to dependencies
npm i react -D # Install to devDependencies
npm un react # Uninstall
npm up react # Update
```

## Semantic versioning

Packages hosted on npm generally use [Semantic Versioning, or SemVer](https://semver.org/). The dependencies in `package.json` have version ranges containing notation that can be tricky to remember - these are defined in the table below. Additionally, npm provides [this nice SemVer calculator](https://semver.npmjs.com/) if you ever need to do a sanity check against a specific package.

| Range | Description |
|-------|-------------|
| ~version | _Approximately equivalent to version_. Only accept new patch versions. `~1.2.3 == 1.2.3 to <1.3.0` |
| ^version | _Compatible with version_. Accept new minor and patch versions. `^2.3.4 == 2.3.4 to <3.0.0` |
| version | Exact match. |
| >version | Must be greater than version. |
| >=version | Must be greater than or equal to version. |
| <version | Must be less than version. |
| <=version | Must be less than or equal to version. |
| 1.2.x | `1.2.0, 1.2.1, etc., but not 1.3.0` |
| * | Any version |
| latest | Most recent release |

## List installed dependencies (node_modules)

```bash
npm ls --depth=0
```

## List all scripts

```bash {outputLines: 2-16}
npm run
Lifecycle scripts included in <package>@1.2.3:
  start
    npm run build && node index.js

available via `npm run-script`:
  build
    npx tsc
  lint
    npx eslint .
```

## Search npm registry

```bash {outputLines: 2-7}
npm search react
NAME                      | DESCRIPTION          | AUTHOR          | DATE       | VERSION  | KEYWORDS
react                     | React is a…          | =gaearon…       | 2022-06-14 | 18.2.0   | react   
rxjs                      | Reactive Extensions… | =cartant…       | 2023-04-26 | 7.8.1    | Rx RxJS Re
react-dom                 | React package for…   | =gaearon =zpao… | 2022-06-14 | 18.2.0   | react
react-dropzone            | Simple HTML5…        | =rolandjitsu…   | 2022-10-12 | 14.2.3   | react-comp
styled-components         | Visual primitives…   | =geelen…        | 2023-05-06 | 6.0.0-r… | react css 
```

## View package information from registry

### View general info about a package

```bash {outputLines: 2-32}
npm view react
react@18.2.0 | MIT | deps: 1 | versions: 1335
React is a JavaScript library for building user interfaces.
https://reactjs.org/

keywords: react

dist
.tarball: https://registry.npmjs.org/react/-/react-18.2.0.tgz
.shasum: 555bd98592883255fa00de14f1151a917b5d77d5
.integrity: sha512-/3IjMdb2L9QbBdWiW5e3P2/npwMBaU9mHCSCUzNln0ZCYbcfTsGbTJrU/kGemdH2IWmB2ioZ+zkxtmq6g09fGQ==
.unpackedSize: 316.1 kB

dependencies:
loose-envify: ^1.1.0 

maintainers:
- gaearon <dan.abramov@gmail.com>
- gnoff <jcs.gnoff@gmail.com>
- fb <opensource+npm@fb.com>
- sophiebits <npm@sophiebits.com>
- react-bot <react-core@meta.com>

dist-tags:
beta: 18.0.0-beta-24dd07bd2-20211208
canary: 18.3.0-canary-5309f1028-20230517
experimental: 0.0.0-experimental-5309f1028-20230517
latest: 18.2.0
next: 18.3.0-canary-5309f1028-20230517
rc: 18.0.0-rc.3

published 11 months ago by gnoff <jcs.gnoff@gmail.com>
```

### View published versions of a package

Note: I've simplified the output here, since React has so many versions.

```bash {outputLines: 2-6}
npm view react versions
[
  '18.0.0',
  '18.1.0',
  '18.2.0'
]
```

## Clear local registry cache

Sometimes, you need to rule out that you don't have some strange version of a package cached. Especially if your company hosts an internal npm registry that may have been acting up. This command is rare, but I figured I'd include it since I use it sometimes.

```bash
npm cache clean --force
```

## nvm: Node Version Manager

### Install latest version of node 18

```bash
nvm i 18
```

### Start using this version of node for this bash session

```bash
nvm use 18
```

### Set version of node for your workspace

```bash
nvm alias default 18
```

### List all installed versions

```bash
nvm ls
```

### List all published versions

```bash
nvm ls-remote
```
