# Utiliti Examples Template

This is a fully functioning NextJS (v12) app with the bare minimum setup, allowing you to expand from here.

This comes complete with linting, prettier, git hooks, etc. Please see setup and usage below:

# Requirements

## NodeJS

Recommended using NVM to manage nodejs versions.

```
nvm install v16.15.0
```

## Yarn

NPM commands disabled, must use yarn.

-   see package.json -> engines

```
npm install -g yarn
```

# Setup

## Clone Project

```
git clone https://github.com/utiliti-examples/utiliti-examples 
cd utiliti-examples
```

## Install Dependencies

```
yarn
```

# Configurations

## CI Related

### Husky

Used for git hooks. Feel free to delete any of the ones you don't want, but these are good practices for any project.

#### Husky Scripts

-   `.husky/commit-msg`
    -   Runs `./commitlint.config.js` to validate commit naming as well as a few other things.
    -   See `./commitlint.config.js` header for valid commit subject types
        -   Example: `git commit -m 'feat: Added feature XYZ`
-   `.husky/pre-commit`
    -   Runs `yarn lint` to make sure lint checks pass before saving commit
-   `.husky/pre-push`
    -   Runs `yarn build` to make sure build works before pushing to git

### Prettier

-   `.prettierignore`
    -   Don't pretty files in here. Works like .gitignore
-   `.prettierrc`
    -   Prettier configurations.

## Web Related

### Global CSS
-   `./pages/_app.tsx`
    -   Imports our CSS files globally from `./styles/`

### Skeleton CSS

-   Used Skeleton CSS for minimal responsiveness
    -   see: http://getskeleton.com/

### Storybook
Components are setup to work with Storybook.  Run `yarn storybook` to start a webserver in which you can view components in isolation at `https://localhost:6006`

# Usage

-   `yarn dev`
    -   Run development environment
-   `yarn build`
    -   build app
-   `yarn start`
    -   start app
-   `yarn lint`
    -   lint app
-   `yarn prettier`
    -   prettify app
-   `yarn prepare`
    -   This runs when yarn runs, sets up husky if not already
-   `yarn storybook`
    -   Run components in isolation for testing.
