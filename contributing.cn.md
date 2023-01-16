# Rana-ui Contributing Guide

Hi! I'm really excited that you are interested in contributing to Rana-ui. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

<!-- - [Code of Conduct](https://vuejs.org/about/coc.html) -->

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing Tests](#contributing-tests)
- [Financial Contribution](#financial-contribution)

## Issue Reporting Guidelines

<!-- - Always use [https://new-issue.vuejs.org/](https://new-issue.vuejs.org/) to create new issues. -->

## Pull Request Guidelines

- Checkout a topic branch from a base branch, e.g. `main`, and merge back against that branch.

- [Make sure to tick the "Allow edits from maintainers" box](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork). This allows us to directly make minor edits / refactors and saves a lot of time.

- If adding a new feature:

  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing a bug:

  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable. You can check the coverage of your code addition by running `npm test`.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Make sure tests pass!

- Commit messages must follow the [commit message convention](./commit-convention.md) so that changelogs can be automatically generated. Commit messages are automatically validated before commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)).

- No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with Prettier on commit (by invoking [Git Hooks](https://git-scm.com/docs/githooks) via [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)).

### Advanced Pull Request Tips

- The PR should fix the intended bug **only** and not introduce unrelated changes. This includes unnecessary refactors - a PR should focus on the fix and not code style, this makes it easier to trace changes in the future.

- Consider the performance / size impact of the changes, and whether the bug being fixes justifies the cost. If the bug being fixed is a very niche edge case, we should try to minimize the size / perf cost to make it worthwhile.

  - Is the code perf-sensitive (e.g. in "hot paths" like component updates or the vdom patch function?)

  - If the branch is dev-only, performance is less of a concern.

## Development Setup

You will need [Node.js](https://nodejs.org) **version 16+**, and [PNPM](https://pnpm.io) **version 7+**.

After cloning the repo, run:

```bash
$ pnpm i # install the dependencies of the project
$ cd example & pnpm i # install the example dependencies of the project
```

A high level overview of tools used:

- [TypeScript](https://www.typescriptlang.org/) as the development language
- [Rollup](https://rollupjs.org) for bundling
- [Jest](https://jestjs.io/) for unit testing
- [Prettier](https://prettier.io/) for code formatting

component implement & ui design refer:

- [Vant](https://react-vant-gitee.3lang.dev/)
- [Ionic](https://ionicframework.com/docs/components)
- [Antd Mobile](https://mobile.ant.design/zh)
- [Vuesax](https://vuesax.com/)
- [Mui](https://mui.com/)
- [Next ui](https://nextui.org/docs/components/link#)

uidesign refer:

- [Material Design](https://m3.material.io/)
- [Ios Design](https://developer.apple.com/design/human-interface-guidelines/components/all-components)

## Scripts

### `npm run build`

The `build` script builds all public packages (packages without `private: true` in their `package.json`).

Packages to build can be specified with fuzzy matching:

```bash
# build dev only
npm run build:dev

# build prod
npm run build:prod
```

### `npm run test`

The `test` script simply calls the `jest` binary, so all [Jest CLI Options](https://jestjs.io/docs/en/cli) can be used. Some examples:

```bash
# run all tests
$ npm run test
```

The default `test` script includes the `--runInBand` jest flag to improve test stability, especially for the CSS transition related tests. When you are testing specific test specs, you can also run `npx jest` with flags directly to speed up tests (jest runs them in parallel by default).

## Project Structure

This repository not employs a [monorepo](https://en.wikipedia.org/wiki/Monorepo) (will consider in the future). Instead, we start with a simpler project structure that includes these core elements:

- `test`: code used to test components with jest.

- `example`: developers can easily view their own components and do interaction and practical use experience with web site projects.

- `src/components`: all the components react implement.

- `src/hooks`: Package for server-side rendering.

- `src/styles`: all the components css utils & theme implement.

- `src/utils`: functions used by some utilities and components.

### Importing Packages

The packages can import each other directly using their package names. Note that when importing a package.

```js
import { Button } from 'rana-ui';
```

This is made possible via several configurations:

- For TypeScript, `compilerOptions.paths` in `tsconfig.json`
- For Jest, `moduleNameMapper` in `jest.config.js`
- For plain Node.js, they are linked using [PNPM Workspaces](https://pnpm.io/workspaces).
