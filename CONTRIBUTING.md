# Contributing to Merkle UI KIT

Thank you for showing interest in contributing to Merkle. All of your contributions are extremely valuable to the success of this project!

## Contributing workflow

- After deciding which feature you'd like to work on, create a local branch to track your changes
- If applicable, add unit tests while implementing your code
- Ensure that all commits follow our [commit convention](#commit-convention)
- It is highly recommended that you run the `npm test` command to ensure new contributions integrate with the old before initiating a merge request
- Create a merge request and keep up-to-date with any feedback you receive from a maintainer

## Commit convention

Merkle ui-kit is a monorepo, so it is important to write the correct commit messages to keep the git history clean. All commits made in this repository are divided into 3 groups:

- **package commits** - related to a particular package
- **docs commits** - related to documentation
- **core commits** - only related to repository tooling (**not** associated with any package)

The commit message consists of 3 parts:

```bash
[area] Optional title: Message
```

Examples:

- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[docs] Update report issues link` – Change related to documentation website
- `[@merklescience/ui] Button: Add theme focus styles` – Change in `@merklescience/ui` package at Button component
- `[@merklescience/hooks] use-list-state: Add remove handler` – Change in `@merklescience/hooks` package at use-list-state hook

## Git branches

- **master**: the current version, or alternatively, patches for current _minor_ version (1.0.x)
- **dev**: contains the next minor version (1.x.0) (more often than not, you'll want to create a PR directly to this branch)

## Get started with Merkle locally

- Clone the [Merkle repository](https://github.com/merklescience/ui-kit)
- Install the [editorconfig](https://editorconfig.org/) extension for your editor
- Install dependencies with npm – `npm install`
- Take an initial peek at our components by running `npm run storybook`

## npm scripts

All npm scripts are located inside the [package.json](https://github.com/merklescience/ui-kit/blob/master/package.json) file.
Individual packages _do not_ have dedicated scripts.

### Development scripts

- `docs` – starts the docs development server
- `storybook` - starts the storybook development server

### Testing scripts

- `typecheck` – runs TypeScript typechecking with `tsc --noEmit` on all packages and docs
- `lint` – runs ESLint on src folder
- `jest` – runs tests with jest
- `test` – runs all above testing scripts
