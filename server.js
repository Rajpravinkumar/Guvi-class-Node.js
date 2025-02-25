// import http module to setup http server
const http = require("http");

// Create a server object

const server = http.createServer((request, response) => {
  // set the response header
  /* response.writeHead(200, { 'Content-Type': 'json/application' });
   */
  // set the response body
  /* response.end(JSON.stringify({ message: 'Hello world' })); */
  
  /* if (request.url === "/") {
    if (request.method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ message: "HEllo World!" }));
      response.end();
    } else if (request.method === "POST") {
      response.writeHead(200, { "content-Type": "application/json" });
      response.write(JSON.stringify({ message: "Hello world!" }));
      response.end();
    }
  } */

  // set the response header 
  response.writeHead(200, { 'Content-Type': 'applicatiom/json' })
  if (request.url === '/posts') {
    //endpoints for posts 
    if (request.method === 'GET') {
      response.write(JSON.stringify ({ message : "GET POST"}))
    } else if (request.method === 'POST') {
      response.write(JSON.stringify({ message: 'POST POSTS' }));
    }
    
  } else if (request.url === '/comments') {
    response.write(JSON.stringify({ message: 'Comments' }));
  }
  response.end();
  
});

//listento the server on port 3000

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
