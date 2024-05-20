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
$ git checkout master
$ yarn run build
$ cp build/sharetribe-flex-sdk-web.js docs/sharetribe-flex-sdk-web.js
$ yarn run build-docs
$ mv _docpress ../
$ git checkout gh-pages
$ cp -r ../_docpress/* ./
$ rm -r ../_docpress
$ git add .
$ git commit -m "Update docs"
$ git push --force
$ git checkout master
```

#### Release a new version to NPM

1. Update versions:

   - `package.json`
   - `src/version.js`

1. Make a new build (as `src/version.js` needs to be up-to-date in the build) and commit

    ```bash
    yarn run build
    ```

1. Update CHANGELOG.md

   - Move everything in Unreleased to the corresponding version section
   - Update the version links found at the very bottom of the CHANGELOG.md file

1. Commit and push

1. Login as `sharetribe` with `npm login`

   - check credentials from password manager

1. Publish with `npm publish`

1. Add a new tag

    ```bash
    git tag -a v1.2.3 -m v1.2.3
    ```

1.  Update `latest` tag

    ```bash
    git push origin :refs/tags/latest
    git tag -f -a latest -m latest
    ```

1.  Push the tag

    ```bash
    git push --tags
    ```

1.  Go to [Github releases and draft a new release](https://github.com/sharetribe/flex-sdk-js/releases/new)

    Use the following content:

    **Tag version:** \<the newly created tag\>

    **Release title:** \<version number\>

    **Describe this release:**

    ```markdown
    <copy the content from the [CHANGELOG.md](CHANGELOG.md)>
    ```

    Here's a full example:

    **Tag version:** v1.2.3

    **Release title:** v1.2.3

    **Describe this release:**

    ```markdown
    ### Added

    - Added many things

    ### Changed

    - Changed this and that
    ```

1.  Announce the new version in Slack
