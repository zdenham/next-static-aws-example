const handler = require('./cloudfrontFunc.js');

const event = {
  request: {
    uri: '/test/123',
  },
};

console.log(handler(event));
