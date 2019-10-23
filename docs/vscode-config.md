## 插件配置

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | 代码规范和错误检查工具
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) | 文件图标插件
- [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) | React代码提示
- [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented) | Sass语法高亮
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | 代码格式化
- [auto-close-tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) | 标签自动关闭插件
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) | 颜色值高亮
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) | ES6的代码片段
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) | 路径智能提示
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) | 调试JS

## 个人配置(供参考)
```json
{
    "sublimeTextKeymap.promptV3Features": true,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.snippetSuggestions": "top",
    "editor.tabSize": 2,
    "prettier.eslintIntegration": false,
    "prettier.printWidth": 100,
    "prettier.singleQuote": true,
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressShowKeyBindingsNotice": true,
        "suppressUpdateNotice": false,
        "suppressWelcomeNotice": true
    },
    "workbench.iconTheme": "vscode-icons",
    "gitProjectManager.baseProjectsFolders": [
        "~/WebstormProjects"
    ],
    "workbench.colorTheme": "Ayu Mirage",
    "explorer.confirmDelete": false,
    "gitlens.keymap": "alternate",
    "gitlens.historyExplorer.enabled": true,
    "fileheader.customMade": {
        "Author": "Fred",
        "Date": "Do not edit",
        "LastEditors": "Fred",
        "LastEditTime": "Do not edit"
    },
    "window.zoomLevel": 0,
    "gitlens.views.fileHistory.enabled": true,
    "gitlens.views.lineHistory.enabled": true
}
```