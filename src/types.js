import _ from 'lodash';

/**
   UUID type
   @constructor
   @param {string} uuid - UUID represented as string
 */
export class UUID {
  constructor(uuid) {
    this.uuid = uuid;
  }
}

export class LatLng {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

export class LatLngBounds {
  constructor(ne, sw) {
    this.ne = ne;
    this.sw = sw;
  }
}

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
    this.amount = amount;
    this.currency = currency;
  }
}

/**
  Type to represent arbitrary precision decimal value.

  It's recommended to use a library such as decimal.js to make decimal
  calculations.
*/
export class BigDecimal {
  constructor(value) {
    this.value = value;
  }
}

//
// Map containing the type name for serialization and the type class
//
const types = {
  UUID,
  LatLng,
  LatLngBounds,
  Money,
  BigDecimal,
};

//
// JSON replacer
//
export const replacer = (key, value) => {
  const type = _.findKey(types, typeClass => value instanceof typeClass);

  if (type) {
    // eslint-disable-next-line no-underscore-dangle
    return { ...value, _sdkType: type };
  }

  return value;
};

//
// JSON reviver
//
export const reviver = (key, value) => {
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
