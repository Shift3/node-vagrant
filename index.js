const handlers = require('./handlers'), 
  http = require('http'),
  PORT = 5000,
  server = http.createServer((request, response) => {
    let method = request.method.toLowerCase();
    
    if (handlers[method] && typeof handlers[method][request.url] === 'function') {
      return handlers[method][request.url](request, response); 
    } 
    
    response.end('That is a 404'); 
  });

server.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));