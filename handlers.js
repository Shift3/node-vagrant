const moment = require('moment-timezone'),
  storage = require('./storage');

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
      response.end(`Hello ${request.body.name}, the date now is: ${moment().format('YYYY-MM-DD')}`);
    },

    '/store': (request, response) => {
      for (var key in request.body) {
        if (request.body.hasOwnProperty(key)) {
          storage.set(key, request.body[key]);
        }
      }
      response.end('check the logs');
    }
  }
};
