# @maneko/prettier

[![Stars](https://img.shields.io/github/stars/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/stargazers)
[![Forks](https://img.shields.io/github/forks/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/network/members)
[![Pull Requests](https://img.shields.io/github/issues-pr/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/pulls)
[![Issues](https://img.shields.io/github/issues/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/issues)
[![Contributors](https://img.shields.io/github/contributors/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/graphs/contributors)
[![License](https://img.shields.io/github/license/maneko-org/prettier?style=flat-square&logoColor=white)](https://github.com/maneko-org/prettier/blob/main/LICENSE)

A shared Prettier config with plugins for our projects.

## Why use this

- Unified Prettier style for all our projects.
- Easy-to-use API: `prettier(printWidth)`.
- Fully ESM and compatible with Prettier 3+.
- Works seamlessly with `lint-staged`, `husky`, and CI setups.

## Quick start

Install `@maneko/prettier` and the minimal tooling in your project. Use the command matching your package manager.

```bash
# pnpm (recommended)
pnpm add -D prettier @maneko/prettier

# yarn
yarn add -D prettier @maneko/prettier

# npm
npm install -D prettier @maneko/prettier
```

If you using TailwindCSS, install the optional plugin:

```bash
pnpm add -D prettier-plugin-tailwindcss
```

## Basic usage

```js
import { prettier } from '@maneko/prettier';

export default prettier(100);
```

## Scripts & common commands

Add convenient scripts to `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

If you use `lint-staged` + `husky` your setup might look like this:

```json
{
  "lint-staged": {
    "**/*.{js,ts,jsx,tsx,mjs}": ["pnpm format"]
  }
}
```

## API Reference

| Option        | Type      | Default | Description                                        |
| ------------- | --------- | ------- | -------------------------------------------------- |
| `printWidth`  | `number`  | `80`    | Line length before wrapping                        |
| `tailwindcss` | `boolean` | `false` | Enables `prettier-plugin-tailwindcss` if installed |

## IDE integration (VS Code)

To ensure a smooth experience, install the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Recommended `.vscode/settings.json`:

```jsonc
{
  // Enable Prettier as the default formatter
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Automatically format files on save
  "editor.formatOnSave": true,

  // Optionally disable ESLint formatting if using @maneko/eslint separately
  "eslint.format.enable": false,

  // Make sure Prettier uses project-local version (not global)
  "prettier.resolveGlobalModules": false,

  // Optionally auto-detect prettier config in monorepos
  "prettier.requireConfig": true
}
```

> If you use both `@maneko/eslint` and `@maneko/prettier`, let Prettier handle pure formatting (quotes, spacing, commas) and ESLint handle logic and style rules.

## Contributing

PRs welcome. Keep changes small and document any new opinionated rules.

## License

`@maneko/prettier` is licensed under the MIT License. See the `LICENSE` file in the repository.
