const handlers = {
  '/hello': (response) => {
    response.end('well hello there');   
  },
  
  '/dateNow': (response) => {
    response.end(Date.now().toString());
  }
};

const http = require('http'),
  PORT = 5000,
  server = http.createServer((request, response) => {
    if (typeof handlers[request.url] === 'function') {
      return handlers[request.url](response); 
    } 
    
    response.end('That is a 404'); 
  });

server.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));