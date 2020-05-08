# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased] - xxxx-xx-xx

### Added

- New experimental method `exchangeToken`
  [110](https://github.com/sharetribe/flex-sdk-js/pull/110)

## [v1.10.0] - 2020-02-28

### Changed

- The JS SDK Repl environment replaced with a new API Playground
  [109](https://github.com/sharetribe/flex-sdk-js/pull/109)
  - Support starting in an initialized and authenticated modes
  - Support running scripts
  - Add helpers and support all API value types

## [v1.9.1] - 2020-02-18

### Fixed

- Handling old API tokens that lack the `scope` attribute in `sdk.authInfo`
  [108](https://github.com/sharetribe/flex-sdk-js/pull/108)

## [v1.9.0] - 2020-02-12

### Added

- Support for logging in using an authorization code
  [#107](https://github.com/sharetribe/flex-sdk-js/pull/107)

### Changed

- `sdk.authInfo` return value has been updated
   [#107](https://github.com/sharetribe/flex-sdk-js/pull/107). The `grantType`
   attribute has been deprecated and now the returned attributes are:
  - `isAnonymous`: a boolean denoting if the currently stored token only allows
     public read access
  - `scopes`: an array containing the scopes associated with the access token

## [v1.8.0] - 2019-12-20

### Changed

- Add endpoint [#105](https://github.com/sharetribe/flex-sdk-js/pull/105)
  - `sdk.stripeAccount.fetch(/* ... */)`

## [v1.7.0] - 2019-12-05

### Changed

- Remove endpoint [#104](https://github.com/sharetribe/flex-sdk-js/pull/103)
  - `sdk.stripeAccountData.fetch(/* ... */)`

## [v1.6.0] - 2019-12-05

### Added

- New endpoints [#103](https://github.com/sharetribe/flex-sdk-js/pull/103)
  - `sdk.stripeAccountData.fetch(/* ... */)`
  - `sdk.stripeAccountLinks.create(/* ... */)`

## [v1.5.0] - 2019-08-21

### Security

- Upgrade dependencies with security issues:
  - Axios (thanks [@joekarasek](https://github.com/joekarasek)!) [#98](https://github.com/sharetribe/flex-sdk-js/pull/95)
  - Docpress [#97](https://github.com/sharetribe/flex-sdk-js/pull/97)
  - Jest and Babel [#96](https://github.com/sharetribe/flex-sdk-js/pull/96)
  - all the patch and minor release updateds for all the dependencies [#101](https://github.com/sharetribe/flex-sdk-js/pull/101)

### Added

- New endpoints [#100](https://github.com/sharetribe/flex-sdk-js/pull/100)
  - `sdk.stripeSetupIntents.create(/* ... */)`
  - `sdk.stripeCustomer.create(/* ... */)`
  - `sdk.stripeCustomer.addPaymentMethod(/* ... */)`
  - `sdk.stripeCustomer.deletePaymentMethod(/* ... */)`

## [v1.4.0] - 2019-04-16

### Added

- `sdkType` property to the type handler configuration. This property
  replaces the deprecated `type`
  property. [#94](https://github.com/sharetribe/flex-sdk-js/pull/94)
- `appType` property to the type handler configuration. This property
  replaces the deprecated `customType`
  property. [#94](https://github.com/sharetribe/flex-sdk-js/pull/94)
- `canHandle` property to the type handler configuration. The value is
  expected to be a predicate function (i.e. function that returns
  truthy or falsy values). If `canHandle` returns truthy value, the
  writer function will called. This allows users to fully customize
  how they use read and writer the data types to and from
  SDK. [#94](https://github.com/sharetribe/flex-sdk-js/pull/94)
- Added information about the `canHandle` function in the "Your own
  types"
  document. [#94](https://github.com/sharetribe/flex-sdk-js/pull/94)

### Deprecated

- `type` property in type handler configuration. Use `sdkType` instead.
- `customType` property in type handler configuration. Use `appType` instead.

## [v1.3.0] - 2019-02-27

### Added

- Missing step (copy sharetribe-flex-sdk-web.js from /build/ to /docs/)
- New endpoints [#92](https://github.com/sharetribe/flex-sdk-js/pull/92)
  - `sdk.stripeAccount.create(/* ... */)`
  - `sdk.stripeAccount.update(/* ... */)`
  - `sdk.stripePersons.create(/* ... */)`

### Changed

- Updated dependencies

## [v1.2.0] - 2018-11-27

### Added

- New endpoints [#89](https://github.com/sharetribe/flex-sdk-js/pull/89)
  - `sdk.availabilityExceptions.create(/* ... */)`
  - `sdk.availabilityExceptions.delete(/* ... */)`
  - `sdk.availabilityExceptions.query(/* ... */)`
  - `sdk.bookings.query(/* ... */)`

### Changed

- Make `baseUrl` optional, defaults to `https://flex-api.sharetribe.com` [#90](https://github.com/sharetribe/flex-sdk-js/pull/90)

## [v1.1.0] - 2018-11-07

### Added

- New endpoints [#88](https://github.com/sharetribe/flex-sdk-js/pull/88)
  - `sdk.ownListings.createDraft(/* ... */)`
  - `sdk.ownListings.publishDraft(/* ... */)`
  - `sdk.ownListings.discardDraft(/* ... */)`

## v1.0.0 - 2018-08-07

This is the first version that is published in NPM.

See: https://www.npmjs.com/package/sharetribe-flex-sdk

### Changed

- Updated dependencies
- Changed package name from `sharetribe-sdk` to `sharetribe-flex-sdk`
  to prepare for publishing to NPM. Remember to check your existing
  imports!

[v1.5.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.4.0...v1.5.0
[v1.4.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.0.0...v1.1.0
