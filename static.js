'use static';

const http = require('http'),
  PORT = 5000,
  path = require('path'),
  fs = require('fs'),
  url = require('url'),
  server = http.createServer((request, response) => {
    let uri = url.parse(request.url).pathname,
      filename = path.join(process.cwd(), uri);

    fs.exists(filename, (exists) => {
      if (!exists) {
        response.end(); 
      }
      
      fs.readFile(filename, (err, file) => {
        response.writeHead(200);
        response.write(file, "binary");
        response.end();
      });
    });
  });

server.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});