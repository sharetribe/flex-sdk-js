# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased] - xxxx-xx-xx

## [v1.3.0] - 2019-02-27

### Added

- Missing step (copy sharetribe-flex-sdk-web.js from /build/ to /docs/)
- New endpoints [#92](https://github.com/sharetribe/flex-sdk-js/pull/92)
  * `sdk.stripeAccount.create(/* ... */)`
  * `sdk.stripeAccount.update(/* ... */)`
  * `sdk.stripePersons.create(/* ... */)`

### Changed

- Updated dependencies

## [v1.2.0] - 2018-11-27
### Added

- New endpoints [#89](https://github.com/sharetribe/flex-sdk-js/pull/89)
  * `sdk.availabilityExceptions.create(/* ... */)`
  * `sdk.availabilityExceptions.delete(/* ... */)`
  * `sdk.availabilityExceptions.query(/* ... */)`
  * `sdk.bookings.query(/* ... */)`

### Changed

- Make `baseUrl` optional, defaults to `https://flex-api.sharetribe.com` [#90](https://github.com/sharetribe/flex-sdk-js/pull/90)

## [v1.1.0] - 2018-11-07

### Added

- New endpoints [#88](https://github.com/sharetribe/flex-sdk-js/pull/88)
  * `sdk.ownListings.createDraft(/* ... */)`
  * `sdk.ownListings.publishDraft(/* ... */)`
  * `sdk.ownListings.discardDraft(/* ... */)`

## v1.0.0 - 2018-08-07

This is the first version that is published in NPM.

See: https://www.npmjs.com/package/sharetribe-flex-sdk

### Changed

- Updated dependencies
- Changed package name from `sharetribe-sdk` to `sharetribe-flex-sdk`
  to prepare for publishing to NPM. Remember to check your existing
  imports!

[v1.3.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.0.0...v1.1.0
