## Editor & Plugins (Editor Extensions)

### VS Code

We prefer to use VSCode as our source code editor because it is powerful and extensible. VS Code helps makes us instantly productive with syntax highlighting, bracket-matching, auto-indentation, box-selection, snippets et al. It also includes built-in support for IntelliSense code completion, rich semantic code understanding and navigation, and code refactoring.
With great variety of extensions, we were able to make it even more useful for our every day developement and debugging.
Get VS Code [here](https://code.visualstudio.com/download).

### Extensions

#### EditorConfig for Visual Studio Code

EditorConfig helps define and maintain consistent coding styles between different editors and IDEs. The `.editorconfig` defines rules and styles for all files as well as for common extensions.
**NOTE**: WebStorm & IntelliJIDEA do not require this extension, and have native support for EditorConfig. So does KTextEditor.
There's more on their [website](http://editorconfig.org).

#### ESLint

The VS Code ESLint extension integrates ESLint into VS Code. The extension uses the ESLint library installed in the opened workspace folder, if not found it fallsback to the globally available one. It highlights linting errors/warnings in currently open file.

#### Stylelint

The VS Code ESLint extension integrates Stylelint into VS Code. The extension uses the stylelint library installed in the opened workspace folder, if not found it fallsback to the globally available one. It highlights linting errors/warnings in styles in currently open file.

#### Prettier - Code Formatter

It helps us keep code uniformly formatted automatically across files. It can make used of `.eslintrc` and `.stylelintrc` files for formatting rules. For convenience, we enabled "editor.formatOnSave" in VSCode to autoformat the currently open file as per predefined rules.

#### vscode-flow-ide

This is another useful extension that provides static type checking within the editor for Flowtype. In addition to autocomplete suggestions it also lists errors and Flow coverage on the status bar.

### Configuration for VSCode

Following settings were standard accross all devs for making use of the above plugins.

```javascript
{
    "editor.formatOnSave": true,
    "javascript.validate.enable": false,
    "stylelint.enable": true,
    "css.validate": false,
    "scss.validate": false,
    "prettier.eslintIntegration": true,
    "prettier.stylelintIntegration": true
}
```
