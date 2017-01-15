/* eslint-env node */

const renderBodyHtml = issData => `<p>This example demos the universal use of the SDK. The demo fetches the current location of ISS space station and renders it on server (see the source code). In the browser, it uses the SDK to refresh the ISS location every 5 seconds.</p><p>ISS Location: ${issData.iss_position.latitude} lat, ${issData.iss_position.longitude} lng`;

module.exports = {
  renderBodyHtml,
};
