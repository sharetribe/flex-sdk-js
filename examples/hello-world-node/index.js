/* eslint-env node */

// To run the example:
//
// $ cd [project-root]
// $ cd examples/hello-world-node
// $ node index.js
//

const sharetribe = require('../../lib/sharetribe-sdk');

/* eslint no-console: "off" */
console.log(sharetribe.hello('John'));
