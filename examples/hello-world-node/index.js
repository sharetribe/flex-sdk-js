/* eslint-env node */

// To run the example:
//
// $ cd [project-root]
// $ cd examples/hello-world-node
// $ node index.js
//

const sharetribeSdk = require('../../build/sharetribe-sdk-node');

/* eslint no-console: "off" */
const inst = sharetribeSdk.createInstance({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  endpoints: [{
    path: 'albums/',
  }],
});

inst
  .albums()
  .then(res => console.log(res.data.map(album => [album.id, album.userId, album.title].join(', ')).join('\n')));
