# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased] - xxxx-xx-xx

## [v1.21.1] - 2024-05-27

### Fixed

- Bug: SDK failed to send any extended data if it had a key `length` with a
  number type value. [#199](https://github.com/sharetribe/flex-sdk-js/pull/199)

## [v1.21.0] - 2024-05-20

### Added

- Add a new function `loginAs`. The function takes a single parameter, `code`,
  which is the authorization code to use. This function should be used to do
  "Login As" instead of using `login` function with `code`.
  [#196](https://github.com/sharetribe/flex-sdk-js/pull/196)
- Add a new key `isLoggedInAs` to the return value of the `authInfo`. The value
  is boolean where `true` indicates that "Login As" was used. Applications
  should use this value to check if "Login As" was used instead of examining the
  token scopes. [#196](https://github.com/sharetribe/flex-sdk-js/pull/196)
- Add a new configuration option `disableDeprecationWarnings`
  [#196](https://github.com/sharetribe/flex-sdk-js/pull/196)

### Deprecated

- Using the `login` function to do "Login As", i.e. logging in with `code`
  instead of `username` and `password` is deprecated in favor of a newly added
  `loginAs` function. [#196](https://github.com/sharetribe/flex-sdk-js/pull/196)

## [v1.20.1] - 2024-02-15

### Fixed

- Prevent unnecessary params from being sent on `loginWithIdp` invocations. [#193](https://github.com/sharetribe/flex-sdk-js/pull/193)

### Changed

- Remove references to Flex in documentation. [190](https://github.com/sharetribe/flex-sdk-js/pull/190)
- Internal changes [#192](https://github.com/sharetribe/flex-sdk-js/pull/192)

## [v1.20.0] - 2023-10-10

* New endpoints [#187](https://github.com/sharetribe/flex-sdk-js/pull/187)
  * `sdk.sitemapData.queryListings(/* ... */)`
  * `sdk.sitemapData.queryAssets(/* ... */)`
* Update Axios to the latest version. The new version will improve performance by
  enabling gzip compression.
  [#188](https://github.com/sharetribe/flex-sdk-js/pull/188)

## [v1.19.0] - 2023-05-09

### Added

- Add support for multi-asset fetching. [#170](https://github.com/sharetribe/flex-sdk-js/pull/170)

## [v1.18.1] - 2023-04-17

### Fixed

- Fix issue where custom `User-Agent` string caused warning and issues with CORS
  when used in browser. The string is no longer customized when running in
  browser. [#184](https://github.com/sharetribe/flex-sdk-js/pull/184)

## [v1.18.0] - 2023-04-14

### Changed

- Internal changes [#173](https://github.com/sharetribe/flex-sdk-js/pull/173)
- Upgrade to webpack 4
  [#178](https://github.com/sharetribe/flex-sdk-js/pull/178)
- Send custom `User-Agent` string for SDK calls
  [#182](https://github.com/sharetribe/flex-sdk-js/pull/182)

## [v1.17.0] - 2022-05-10

### Added

- New configuration option: `assetCdnBaseUrl` [#159](https://github.com/sharetribe/flex-sdk-js/pull/159)

### Changed

- Request Assets in JSON format instead of Transit [#160](https://github.com/sharetribe/flex-sdk-js/pull/160)
- Read response data as Transit only if Content-Type header is `application/transit+json` [#161](https://github.com/sharetribe/flex-sdk-js/pull/161)

## [v1.16.0] - 2022-03-23

### Added

- New endpoints [#156](https://github.com/sharetribe/flex-sdk-js/pull/156)
  - `sdk.currentUser.delete(/* ... */)`
- New endpoints [#154](https://github.com/sharetribe/flex-sdk-js/pull/154)
  - `sdk.assetByAlias({path, alias})`
  - `sdk.assetByVersion({path, version})`

## [v1.15.0] - 2021-10-06

### Added

- Ability to serialize an array of SDK types, i.e. array of UUIDs. Useful when
  calling e.g. `sdk.listings.query` with `ids` parameter.
  [#147](https://github.com/sharetribe/flex-sdk-js/pull/147)

### Security

- Update depencendies [#140](https://github.com/sharetribe/flex-sdk-js/pull/140)
  [#146](https://github.com/sharetribe/flex-sdk-js/pull/146)
  [#141](https://github.com/sharetribe/flex-sdk-js/pull/141)

## [v1.14.1] - 2021-09-20

### Security

- Update Axios to 0.21.2 [#143](https://github.com/sharetribe/flex-sdk-js/pull/143)

## [v1.14.0] - 2021-09-20

### Added

- New endpoints [#142](https://github.com/sharetribe/flex-sdk-js/pull/142)
  - `sdk.stockAdjustments.query(/* ... */)`
  - `sdk.stockAdjustments.create(/* ... */)`
  - `sdk.stock.compareAndSet(/* ... */)`

### Changed

- Extend cookie expiration from 30 days to 180 days. This matches
  with the lifetime of the refresh token returned by the Auth API.
  [#138](https://github.com/sharetribe/flex-sdk-js/pull/138)
- SDK shows a warning if Client Secret is used in a browser.
  [#134](https://github.com/sharetribe/flex-sdk-js/pull/134)

### Security

- Update Axios to 0.21.1 [#126](https://github.com/sharetribe/flex-sdk-js/pull/126)
- Update Lodash to 4.17.21 [#131](https://github.com/sharetribe/flex-sdk-js/pull/131)
- Update development dependencies with security vulnerabilities (multiple PRs)

## [v1.13.0] - 2020-10-15

### Added

- New endpoints [#121](https://github.com/sharetribe/flex-sdk-js/pull/121)
  - `sdk.loginWithIdp(/* ... */)`
  - `sdk.currentUser.createWithIdp(/* ... */)`

## [v1.12.0] - 2020-08-12

### Added

- A utility function to convert an object query parameter into a URL compatible
  string. [#119](https://github.com/sharetribe/flex-sdk-js/pull/119)

## [v1.11.0] - 2020-06-16

This release just changes the version number, making the alpha release
into a proper release.

## [v1.11.0-alpha-1] - 2020-06-11

### Added

- Export Transit serialization helpers
  [#113](https://github.com/sharetribe/flex-sdk-js/pull/113)

## [v1.11.0-alpha] - 2020-05-08

### Added

- New experimental method `exchangeToken`
  [#110](https://github.com/sharetribe/flex-sdk-js/pull/110)

## [v1.10.0] - 2020-02-28

### Changed

- The JS SDK Repl environment replaced with a new API Playground
  [#109](https://github.com/sharetribe/flex-sdk-js/pull/109)
  - Support starting in an initialized and authenticated modes
  - Support running scripts
  - Add helpers and support all API value types

## [v1.9.1] - 2020-02-18

### Fixed

- Handling old API tokens that lack the `scope` attribute in `sdk.authInfo`
  [#108](https://github.com/sharetribe/flex-sdk-js/pull/108)

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

[unreleased]: https://github.com/sharetribe/flex-sdk-js/compare/v1.21.1...HEAD

[v1.21.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.21.0...v1.21.1
[v1.21.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.20.1...v1.21.0
[v1.20.1]: https://github.com/sharetribe/flex-sdk-js/compare/v1.20.0...v1.20.1
[v1.20.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.19.0...v1.20.0
[v1.19.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.18.1...v1.19.0
[v1.18.1]: https://github.com/sharetribe/flex-sdk-js/compare/v1.18.0...v1.18.1
[v1.18.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.17.0...v1.18.0
[v1.17.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.16.0...v1.17.0
[v1.16.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.15.0...v1.16.0
[v1.15.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.14.1...v1.15.0
[v1.14.1]: https://github.com/sharetribe/flex-sdk-js/compare/v1.14.0...v1.14.1
[v1.14.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.13.0...v1.14.0
[v1.13.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.12.0...v1.13.0
[v1.12.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.11.0...v1.12.0
[v1.11.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.11.0-alpha-1...v1.11.0
[v1.11.0-alpha-1]: https://github.com/sharetribe/flex-sdk-js/compare/v1.11.0-alpha...v1.11.0-alpha-1
[v1.11.0-alpha]: https://github.com/sharetribe/flex-sdk-js/compare/v1.10.0...v1.11.0-alpha
[v1.10.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.9.1...v1.10.0
[v1.9.1]: https://github.com/sharetribe/flex-sdk-js/compare/v1.9.0...v1.9.1
[v1.9.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.8.0...v1.9.0
[v1.8.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.7.0...v1.8.0
[v1.7.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.6.0...v1.7.0
[v1.6.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.5.0...v1.6.0
[v1.5.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.4.0...v1.5.0
[v1.4.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.3.0...v1.4.0
[v1.3.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.2.0...v1.3.0
[v1.2.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/sharetribe/flex-sdk-js/compare/v1.0.0...v1.1.0
