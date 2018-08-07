# Types

The SDK provides a set of types that complement the data types
JavaScript supports out-of-the box. When calling the API endpoints,
the SDK returns data using these types. It also expects these types
given as parameters for the *queries* and *commands*.

Here's a list of the provided types:

| Name | Description | Constructor | Properties |
| ---- | ----------- | ----------- | ---------- |
| `UUID` | [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) | `new UUID(uuid)` | `uuid`<br /> |
| `Money` | Amount of money in certain currency | `new Money(amount: Number, currency: String)` | `amount` The amount in subunit.<br />`currency`<br /> |
| `LatLng` | Geolocation | `new LatLng(lat: Number, lng: Number)` | `lat`<br />`lng`<br /> |
| `LatLngBounds` | Bounding box limited by North-East and South-West corners | `new LatLngBounds(ne: LatLng, sw: LatLng)` | `ne`<br />`sw`<br /> |
| `BigDecimal` | Arbitrary precision decimal value | `new BigDecimal(value: String)` | `value` |

**Example:**

```js
const { Money } = require('sharetribe-flex-sdk').types;

const price = new Money(5000, 'USD');

console.log("Amount in subunit (i.e. cents): " + price.amount)
console.log("Currency: " + price.currency)
```
