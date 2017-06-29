import { UUID, LatLng, LatLngBounds, Money, BigDecimal, replacer, reviver } from './types';

describe('JSON parse/stringify', () => {
  const testData = {
    uuid: new UUID('27786d1c-f16b-411b-b1fc-176969a91338'),
    latlng: new LatLng(12.34, 45.56),
    latlngbounds: new LatLngBounds(new LatLng(12.34, 23.45), new LatLng(34.56, 45.67)),
    money: new Money(5000, 'USD'),
    bigdecimal: new BigDecimal('1.00000000000000000000000000001'),
  };

  /* eslint-disable quote-props */
  /* eslint-disable quotes */
  /* eslint-disable comma-dangle */
  const expectedJsonRep = {
    uuid: {
      uuid: '27786d1c-f16b-411b-b1fc-176969a91338',
      _sdkType: 'UUID',
    },
    latlng: {
      lat: 12.34,
      lng: 45.56,
      _sdkType: 'LatLng',
    },
    latlngbounds: {
      ne: {
        lat: 12.34,
        lng: 23.45,
        _sdkType: 'LatLng',
      },
      sw: {
        lat: 34.56,
        lng: 45.67,
        _sdkType: 'LatLng',
      },
      _sdkType: 'LatLngBounds',
    },
    money: {
      amount: 5000,
      currency: 'USD',
      _sdkType: 'Money',
    },
    bigdecimal: {
      value: '1.00000000000000000000000000001',
      _sdkType: 'BigDecimal',
    },
  };
  /* eslint-enable quote-props */
  /* eslint-enable quotes */
  /* eslint-enable comma-dangle */

  it('stringifies types', () => {
    const jsonRep = JSON.parse(JSON.stringify(testData, replacer));

    expect(jsonRep).toEqual(expectedJsonRep);
  });

  it('parses types', () => {
    const parsed = JSON.parse(JSON.stringify(testData, replacer), reviver);

    expect(parsed).toEqual(testData);
  });
});
