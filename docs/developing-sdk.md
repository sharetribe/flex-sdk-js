# Developing SDK

Here are the commands you need when developing the SDK:

#### Install dependencies:

```sh
$ yarn install
```

#### Build the package:

```sh
$ yarn run build
```

#### Run tests:

```sh
$ yarn test
```

#### Run linter:

```sh
$ yarn run lint
```

#### Format code (run Prettier):

```sh
$ yarn run format
```

#### Move the built files to `/docs` folder

Docpress only looks for files in the project root and `/docs` folder.

```sh
$ cp build/sharetribe-flex-sdk-web.js docs/sharetribe-flex-sdk-web.js
```

#### Serve the docpress docs

```sh
$ yarn run serve-docs
```

#### Build the docpress docs

```sh
$ yarn run build-docs
```

#### Update the Github Pages

```sh
$ yarn run build
$ cp build/sharetribe-flex-sdk-web.js docs/sharetribe-flex-sdk-web.js
$ yarn run build-docs
$ mv _docpress ../
$ git checkout gh-pages
$ cp -r ../_docpress/* ./
$ rm -r ../_docpress
$ // git add, commit, push
```

#### Release a new version to NPM

1. Update version in `package.json`
1. Update CHANGELOG.md
   - Move everything in Unreleased to the corresponding version section
1. Login as `sharetribe` with `npm login`
   - check credentials from password manager
1. Publish with `npm publish`
1. Add an annotated Git tag to the published commit
