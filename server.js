'use strict';

const http = require('http'),
  PORT = 5000,
  server = http.createServer((request, response) => {
    response.end('hello world');
  });

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});