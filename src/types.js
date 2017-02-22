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

//
// Map containing the type name for serialization and the type class
//
const types = {
  UUID,
  LatLng,
  LatLngBounds,
};

//
// JSON replacer
//
export const replacer = (key = null, value) => {
  const type = _.findKey(types, typeClass => value instanceof typeClass);

  if (type) {
    // eslint-disable-next-line no-underscore-dangle
    return { ...value, __type: type };
  }

  return value;
};

//
// JSON reviever
//
export const reviever = (key = null, value) => {
  // eslint-disable-next-line no-underscore-dangle
  const type = value && value.__type;

  switch (type) {
    case 'LatLng':
      return new LatLng(value.lat, value.lng);
    case 'LatLngBounds':
      return new LatLngBounds(value.ne, value.sw);
    case 'UUID':
      return new UUID(value.uuid);
    default:
      return value;
  }
};
