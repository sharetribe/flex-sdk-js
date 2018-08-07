# Your own types

In case you are using your own types or types from external library,
the SDK provides a way to convert the SDK types to and from your own
types.

The conversion is handled by "type handlers". You need to pass
`typeHandlers` when you create a new SDK instance.

A type handler is an object containing the following properties:

| Property | Description |
| -------- | ----------- |
| `type` | The SDK type. |
| `customType` | The custom type to convert to/from. |
| `reader` | Conversion function. Gets an instance of `type` as an argument, should return instance of `customType`. |
| `writer` | Conversion function. Gets an instance of `customType` as an argument, should return instance of `type`. |

**Example:** Convert
[`google.maps.LatLng`](https://developers.google.com/maps/documentation/javascript/reference/3/#LatLng)
to/from `LatLng` and
[Decimal.js](https://github.com/MikeMcl/decimal.js/) `Decimal` to/from
`BigDecimal`

```js
const { BigDecimal, LatLng } = require('sharetribe-flex-sdk').types;

const sdk = createInstance({
  clientId: config.sdk.clientId,
  baseUrl: config.sdk.baseUrl,
  typeHandlers: [
    {
      type: BigDecimal,
      customType: Decimal,
      writer: v => new BigDecimal(v.toString()),
      reader: v => new Decimal(v.value),
    },
      type: LatLng,
      customType: google.maps.LatLng,
      writer: v => new LatLng(v.lat(), v.lng()),
      reader: v => new google.maps.LatLng(v.lat, v.lng)
    }
  ]
});
```

**Caveat:** Only body parameters are converted. An error *Don't know
how to serialize query parameter* will be thrown if query parameters
contain your own types.
