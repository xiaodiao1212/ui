# Rana-ui 贡献指南

你好！我很高兴你有兴趣为 Rana-ui 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

<!-- 暂无 -->

- [问题报告指南](#issue-reporting-guidelines)
- [拉取请求指南](#pull-request-guidelines)
- [开发设置](#development-setup)
- [脚本](#scripts)
- [项目结构](#project-structure)
- [测试](#contributing-tests)
- [财务捐款](#financial-contribution)

## 问题报告指南

<!-- 暂无 -->

## 拉取请求指南

- 从基础分支（例如 "main"）签出一个主题分支，并将其合并到该分支。

- [请确保勾选 "允许来自维护者的编辑 "这一选项](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).这使我们能够直接进行小的编辑/重构，并节省了大量的时间。

- 如果增加一个新的功能:

  - 增加配套的测试案例.
  - 提供一个令人信服的理由来增加这个功能。理想情况下，你应该先打开一个建议问题，并在工作前得到批准

- 如果修复一个 bug:

  - 如果你正在解决一个特殊的问题, 添加 `(fix #xxxx[,#xxxx])` (#xxxx 是问题的 id) 在你的 PR 标题中，为了更好地发布日志, 例如 `update entities encoding/decoding (fix #3899)`.
  - 在 PR 中提供关于该错误的详细描述。最好有现场演示。
  - 如果适用的话，添加适当的测试覆盖率。你可以通过运行`npm test`来检查你增加的代码的覆盖率。

- 当你在 PR 上工作时，有多个小的提交是可以的--GitHub 可以在合并前自动压制它们。

- 确保测试通过!

- 提交信息必须遵循[commit message convention](./commit-convention.md)，这样才能自动生成更新日志。提交信息会在提交前自动验证（通过[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)调用[Git Hooks](https://git-scm.com/docs/githooks)）。

- 只要你安装了 dev 依赖，就不需要担心代码风格--修改的文件在提交时自动用 Prettier 格式化（通过调用[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)的方式）。

### 高级拉动请求技巧

- PR 应该只修复预定的错误\*\*\*，而不是引入不相关的变化。这包括不必要的重构--PR 应该专注于修复，而不是代码风格，这使得在未来更容易追踪变化。

- 考虑变化对性能/大小的影响，以及被修复的 bug 是否能证明其代价。如果被修复的 bug 是一个非常小众的边缘案例，我们应该尽量减少尺寸/性能成本，以使其物有所值。

  - 代码是否对性能敏感（例如在 "热点路径"，如组件更新或补丁功能？）

  - 如果该分支是仅用于开发的，性能就不那么令人担忧了。

## 开发设置

环境需要 [Node.js](https://nodejs.org) **version 16+**, 和 [PNPM](https://pnpm.io) **version 7+**.

克隆 repo 后，运行:

```bash
$ pnpm i # install
$ cd example & pnpm i # install the example dependencies of the project
$ cd .. & pnpm run dev
```

使用到的工具库文档:

- [TypeScript](https://www.typescriptlang.org/) 开发语言
- [Emotion](https://emotion.sh/docs/introduction) css-in-js 库
- [Rollup](https://rollupjs.org) 打包
- [Jest](https://jestjs.io/) 单元测试
- [Prettier](https://prettier.io/) 代码格式化


移动端ui设计参考:

- [Material Design](https://m3.material.io/)
- [Ios Design](https://developer.apple.com/design/human-interface-guidelines/components/all-components)

React组件实现参考:

- [Vant](https://react-vant-gitee.3lang.dev/)
- [Ionic](https://ionicframework.com/docs/components)
- [Antd Mobile](https://mobile.ant.design/zh)
- [Vuesax](https://vuesax.com/)
- [Mui](https://mui.com/)
- [Next ui](https://nextui.org/docs/components/link#)


## 脚本

### `npm run build`

`build`脚本构建所有的公共软件包（在其`package.json`中没有`private: true`的软件包）。

```bash
# build dev only
npm run build:dev

# build prod
npm run build:prod
```

### `npm run test`

`test`脚本只是调用`jest`二进制文件，所以可以使用所有的[Jest CLI选项](https://jestjs.io/docs/en/cli)。一些例子。

```bash
# run all tests
$ npm run test
```
默认的`test`脚本包括`--runInBand`的jest标志，以提高测试的稳定性，特别是对CSS过渡相关的测试。当你测试特定的测试规格时，你也可以直接运行`npx jest`与标志，以加快测试速度（jest默认是并行运行）。

## 项目结构

这个资源库没有采用[monorepo](https://en.wikipedia.org/wiki/Monorepo)（将来会考虑）。相反，我们从一个更简单的项目结构开始，包括这些核心元素。

- `test`：用于用jest测试组件的代码。

- `example`：开发人员可以很容易地查看自己的组件，并做交互和实际使用体验的网站项目。

- `src/components`:所有反应实现的组件。

- `src/hooks`。用于服务器端渲染的包。

- `src/styles`: 所有组件css utils & theme实现。

- `src/utils`: 一些工具和组件使用的函数。

### 导入软件包

包可以直接使用它们的包名互相导入:

```js
import { Button } from 'rana-ui';
```

这是通过几个配置实现的:

- 对于TypeScript，`tsconfig.json`中的`compilerOptions.paths`。
- 对于Jest，`moduleNameMapper`在`jest.config.js`中。
- 对于普通的Node.js，它们使用[PNPM Workspaces](https://pnpm.io/workspaces)链接。
