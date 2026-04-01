# @maneko/prettier-config

[![Version](https://img.shields.io/npm/v/@maneko/prettier-config?style=flat&colorA=111111&colorB=000000)](https://npmjs.com/package/@maneko/prettier-config)
[![Downloads](https://img.shields.io/npm/dt/@maneko/prettier-config.svg?style=flat&colorA=222222&colorB=000000)](https://npmjs.com/package/@maneko/prettier-config)
[![License](https://img.shields.io/npm/l/@maneko/prettier-config?style=flat&colorA=333333&colorB=000000)](https://npmjs.com/package/@maneko/prettier-config)
[![Build with](https://img.shields.io/badge/built_with-tsdown-000000?style=flat)](https://tsdown.dev)

Opinionated Prettier config preset.

## Usage

### Install

```sh
pnpm i -D prettier @maneko/prettier-config
```

### Create config

Create `prettier.config.mjs` in your project root:

```js
// prettier.config.mjs
import { prettier } from '@maneko/prettier-config'

export default prettier()
```

### Add scripts for package.json

For example:

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## Customization

Normally you only need to import the `prettier` preset:

```js
// prettier.config.js
import { prettier } from '@maneko/prettier-config'

export default prettier()
```

And that's it! Or you can customize each setting to your liking:

```js
// prettier.config.js
import { prettier } from '@maneko/prettier-config'

export default prettier({
  // Custom print width
  printWidth: 80,

  // Enable Tailwind CSS plugin
  plugins: ['prettier-plugin-tailwindcss'],
})
```

### Lint Staged

If you want auto-fix before every commit, you can add the following to your `package.json`:

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "prettier --write"
  }
}
```

and then

```bash
pnpm i -D lint-staged simple-git-hooks

// to active the hooks
npx simple-git-hooks
```

## Versioning Policy

This project follows [Semantic Versioning](https://semver.org/) for releases. However, since this is just a config and involves opinions and many moving parts, we don't treat rules changes as breaking changes.

### Changes Considered as Breaking Changes

- Node.js version requirement changes
- Huge refactors that might break the config
- Plugins made major changes that might break the config
- Changes that might affect most of the codebases

### Changes Considered as Non-breaking Changes

- Enable/disable rules and plugins (that might become stricter)
- Rules options changes
- Version bumps of dependencies

### I prefer XXX...

Sure, you can configure and override rules locally in your project to fit your needs. If that still does not work for you, you can always fork this repo and maintain your own.

## License

[@maneko/prettier-config](https://github.com/maneko-group/prettier-config) is licensed under the [MIT](./LICENSE) license.
