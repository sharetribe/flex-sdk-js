/* eslint-disable import/prefer-default-export */

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
