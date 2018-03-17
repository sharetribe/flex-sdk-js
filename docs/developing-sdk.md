# Developing SDK

Here are the essentical command-line commands you need when developing the SDK:

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
$ cp build/sharetribe-sdk-web.js docs/sharetribe-sdk-web.js
$ yarn run build-docs
$ mv _docpress ../
$ git checkout gh-pages
$ cp -r ../_docpress/* ./
$ rm -r ../_docpress
$ // git add, commit, push
```
