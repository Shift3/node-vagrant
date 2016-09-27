const moment = require('moment-timezone');

module.exports = {
  /**
   * All of our get handlers.
   */
  get: {
    '/hello': (request, response) => response.end('GET /hello'),
    '/dateNow': (request, response) => {
      let now = moment().tz("America/Los_Angeles"),
        format = now.format('dddd, MMMM Do YYYY, h:mm:ss a');
      
      response.end(format);
    }
  },

  /**
   * All of our POST handlers.
   */
  post: {
    '/hello': (request, response) => {
      response.end('POST /hello');
    },

    '/dateNow': (request, response) => {
      response.end('POST /dateNow');
    }
  }
};
