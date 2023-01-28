# Rana-ui 贡献指南

你好！很高兴你有兴趣为 Rana-ui 做贡献, Rana-ui 的愿景一直都只有一个，那就是成为世界级的 React 移动端 ui 框架并衍生出一套致力于创建下一代炫酷 web 应用的终极解决方案 `Web Cypher`, 包括基于 d3.js 的数据可视化库 [Rana-Vis](#https://fogcity/vis)、包括科学计算功能的深度学习计算库 [Rana-Jax](#https://fogcity/jax)、支持光线追踪的基于 WebGPU 的 3D 库 [Rana-3D](#https://fogcity/rana)。

Rana-ui 提供遵守各个平台设计规范的令人惊叹的样式设计、尽可能合理的组件类别和丰富度、以及最重要的，顶级的API和产品设计以及前端开发者体验，有追求有想法的卓越开发者会自然而然的汇聚在这里，但人多事杂，先说断后不乱，所以在提交您的贡献之前，请务必花点时间阅读以下指南:

- [开发设置](#development-setup)
- [脚本](#scripts)
- [项目结构](#project-structure)
- [测试](#contributing-tests)
- [问题报告指南](#issue-reporting-guidelines)
- [拉取请求指南](#pull-request-guidelines)
- [财务捐款](#financial-contribution)

## 开发设置

首先运行环境需要 [Node.js](https://nodejs.org) **version 16+**, 和 [PNPM](https://pnpm.io) **version 7+**.

确保环境 ok 并克隆 repo 后，运行:

```bash
$ pnpm i # 安装根目录依赖
$ cd example
$ pnpm i # 安装案例网站依赖
$ cd ..
$ pnpm run dev # 成功运行项目并见听到端口：1234
```

使用到的工具库文档:

- [TypeScript](https://www.typescriptlang.org/) 开发语言
- [Emotion](https://emotion.sh/docs/introduction) css-in-js 库
- [Rollup](https://rollupjs.org) 打包
- [Jest](https://jestjs.io/) 单元测试
- [Prettier](https://prettier.io/) 代码格式化

移动端 ui 设计参考:

- [Material Design](https://m3.material.io/)
- [Ios Design](https://developer.apple.com/design/human-interface-guidelines/components/all-components)

React 组件实现参考:

- [Vant](https://react-vant-gitee.3lang.dev/)
- [Ionic](https://ionicframework.com/docs/components)
- [Antd Mobile](https://mobile.ant.design/zh)
- [Vuesax](https://vuesax.com/)
- [Mui](https://mui.com/)
- [Next ui](https://nextui.org/docs/components/link#)

## 项目结构

这个库没有采用[monorepo](https://en.wikipedia.org/wiki/Monorepo)（将来会考虑）。所有，我们从一个更简单的项目结构开始并逐渐扩充至目前的样子，包括这些核心元素，现在让我们为你一一解释一些开发者应该关注的主要目录的作用，没提及到的文件就是你不应该修改的文件，如果需要，可以问我们：

- `test`: 用于存放用 jest 测试组件的代码。

- `example`: 开发者可以很容易地体验自己的组件真正的使用体验并获取注释和类型提示的网站项目，是代码库本身以外的一个基于parcel的简易web项目。

- `src/components`: 所有组件实现代码存放的地方，目前均以一个组件一个index.ts的方式存放所有相关代码，每个组件通用的一些类型定义在同级目录下的`prop.ts`文件里，如果你不知道标准化的组件结构是怎么样的，请查看`Button`的代码结构。

- `src/hooks`: 用于存放下一步headless化组件中抽离出的hooks的包，在1,0发布前用不到。

- `src/styles`: 所有组件 css utils & theme 实现。

- `src/utils`: 一些工具和组件使用的函数。

### 导入软件包

包可以直接使用它们的包名互相导入:

```js
import { Button } from 'rana-ui';
```

这是通过几个配置实现的:

- 对于 TypeScript，`tsconfig.json`中的`compilerOptions.paths`。
- 对于 Jest，`moduleNameMapper`在`jest.config.js`中。
- 对于普通的 Node.js，它们使用[PNPM Workspaces](https://pnpm.io/workspaces)链接。


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

`test`脚本只是调用`jest`二进制文件，所以可以使用所有的[Jest CLI 选项](https://jestjs.io/docs/en/cli)。一些例子。

```bash
# run all tests
$ npm run test
```

默认的`test`脚本包括`--runInBand`的 jest 标志，以提高测试的稳定性，特别是对 CSS 过渡相关的测试。当你测试特定的测试规格时，你也可以直接运行`npx jest`与标志，以加快测试速度（jest 默认是并行运行）。


## 问题报告指南

- 首先，如果你想让尽可能多的人能够看懂你的 issue，就请尽量用英文，当然其他语言现在是没问题的。目前 issue 列表只接受 bug 报告或是新功能请求。这意味着我们不接受用法问题。如果你开的 issue 不符合规定，它将会被立刻关闭。

- 如果是新功能请求：

  - 请尽可能详尽地说明这个需求的用例和场景。最重要的是：解释清楚是怎样的用户体验需求催生了这个功能上的需求。
  - Rana 的一个重要设计原则是保持 API 的简洁和直接。通常来说，我们只考虑添加在现有的 API 下无法轻松实现的功能。
  - 新功能的用例也应当足够常见。
  - 当然，最好描述一下你期望这个新功能的 API 是如何使用的，并提供一些代码示例。

- 如果是 bug:

  - 请描述清晰遇到这个 bug 的业务场景、上下文，以及我们需要执行哪些操作才能让 bug 出现.
  - 最好能附带上你认为这个业务场景下的操作预期正确的结果是什么，因为简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在.

- 对于使用中遇到的问题，请先使用搜索引擎找找看~ 在开 issue 前，可以先搜索一下以往的旧 issue 因为你遇到的问题可能已经有人提了，也可能已经在最新版本中被修正。注意：如果你发现一个已经关闭的旧 issue 在最新版本中仍然存在，请不要在旧 issue 下面留言，而应该用下面的表单开一个新的 issue。

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

  - 代码是否对性能敏感（如组件更新或动画功能？）

  - 如果该分支是仅用于开发的，性能就不那么令人担忧了。

