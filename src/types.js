/* eslint no-underscore-dangle: ["error", { "allow": ["_sdkType"] }] */

/**
   UUID type
   @constructor
   @param {string} uuid - UUID represented as string
 */
export class UUID {
  constructor(uuid) {
    this._sdkType = this.constructor._sdkType;
    this.uuid = uuid;
  }
}
UUID._sdkType = 'UUID';

export class LatLng {
  constructor(lat, lng) {
    this._sdkType = this.constructor._sdkType;
    this.lat = lat;
    this.lng = lng;
  }
}
LatLng._sdkType = 'LatLng';

export class LatLngBounds {
  constructor(ne, sw) {
    this._sdkType = this.constructor._sdkType;
    this.ne = ne;
    this.sw = sw;
  }
}
LatLngBounds._sdkType = 'LatLngBounds';

/**
   Money type to represent money

   - `amount`: The money amount in `minor` unit. In most cases, the minor unit means cents.
               However, in currencies without cents, e.g. Japanese Yen, the `amount` value
               is the number of Yens.
   - `currency`: ISO 4217 currency code

   Examples:

   ```
   new Money(5000, "USD") // $50
   new Money(150, "EUR")  // 1.5€
   new Money(2500, "JPY") // ¥2500
   ```
*/
export class Money {
  constructor(amount, currency) {
    this._sdkType = this.constructor._sdkType;
    this.amount = amount;
    this.currency = currency;
  }
}
Money._sdkType = 'Money';

/**
  Type to represent arbitrary precision decimal value.

  It's recommended to use a library such as decimal.js to make decimal
  calculations.
*/
export class BigDecimal {
  constructor(value) {
    this._sdkType = this.constructor._sdkType;
    this.value = value;
  }
}
BigDecimal._sdkType = 'BigDecimal';

export const toType = value => {
  // eslint-disable-next-line no-underscore-dangle
  const type = value && value._sdkType;

  switch (type) {
    case 'LatLng':
      return new LatLng(value.lat, value.lng);
    case 'LatLngBounds':
      return new LatLngBounds(value.ne, value.sw);
    case 'UUID':
      return new UUID(value.uuid);
    case 'Money':
      return new Money(value.amount, value.currency);
    case 'BigDecimal':
      return new BigDecimal(value.value);
    default:
      return value;
  }
};

//
// JSON replacer
//
// Deprecated
//
// The _sdkType field is added to the type object itself,
// so the use of replacer is not needed. The function exists purely
// for backwards compatibility. We don't want to remove it in case
// applications are using it.
//
export const replacer = (key, value) => value;

//
// JSON reviver
//
export const reviver = (key, value) => toType(value);
