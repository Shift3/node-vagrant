const handlers = require('./handlers'), 
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  url = require('url'),
  PORT = 5000,
  server = http.createServer((request, response) => {
    let method = request.method.toLowerCase(),
      uri = url.parse(request.url).pathname,
      filepath = path.join(process.cwd(), uri);
    
    fs.exists(filepath, exists => {
      if (!exists) {
        if (handlers[method] && typeof handlers[method][request.url] === 'function') {
          return handlers[method][request.url](request, response);
        }
        
        response.end('That is a 404');
      } else {
        fs.readFile(filepath, (err, file) => {
          if (err) return response.end('Could not read the file');
          response.writeHead(200);
          response.write(file, "binary");
          response.end();
        });
      }
    });
  });

server.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));