/* eslint-env node */

// To run the example:
//
// $ cd [project-root]
// $ cd examples/hello-world-node
// $ node index.js
//

const sharetribe = require('../../build/sharetribe-sdk-node').default;

/* eslint no-console: "off" */
console.log(sharetribe('John'));
