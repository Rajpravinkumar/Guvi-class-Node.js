// import express

const { response } = require("express");
const express = require("express");
const { get } = require("mongoose");

//create an express app

const app = express();

// use middleware 
const logger = (request, response, next ) => {

    console.log(`Request URL: ${request.url}`);
  console.log(`Request Method: ${request.method}`);
  console.log(`Request Headers: ${request.headers}`);
  console.log(`Request Query: ${request.query}`);
  console.log(`Request Params: ${request.params}`);
  console.log(`Request Body: ${request.body}`);
  console.log(`Request Cookies: ${request.cookies}`);
  console.log(`-------------------`)

  next();
}
app.use(logger);

app.get("/", (request, response) => {
response.json({ message: "GET /" });
});

//middlewrae for handling 404 errors

const notFound = (request, response, next) => {
  response.json({ message: 'Route not found' })
  
  next();
}
app.use(notFound);

// listen for end point and start the server
app.listen(3000, () => {
  console.log(`Server is running @ http://127.0.0.1:3000`);
});
