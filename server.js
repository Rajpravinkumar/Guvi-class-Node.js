// import http module to setup http server
const http = require('http');

// Create a server object 

const server = http.createServer((request , response ) => {
 
  // set the response header
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // set the response body 
  response.end('Hello world');

})

//listento the server on port 3000

server.listen(3000, "127.0.0.1", () => {
  console.log('Server is running on http://127.0.0.1:3000');
})