module.exports = {
  /**
   * All of our get handlers.
   */
  get: {
    '/hello': (request, response) => {
      response.end('GET /hello');
    },

    '/dateNow': (request, response) => {
      response.end('POST /hello');
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
