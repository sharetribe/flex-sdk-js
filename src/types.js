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

export class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
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
};

//
// JSON replacer
//
export const replacer = (key = null, value) => {
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
export const reviver = (key = null, value) => {
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
    default:
      return value;
  }
};
