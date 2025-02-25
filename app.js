// import express

const { response } = require("express");
const express = require("express");
const { get } = require("mongoose");
const logger = require("./utils/logger");
const errorRoutes = require("./utils/errorRoutes");
//const morgan = require('morgan');

//create an express app

const app = express();

// use middleware
app.use(logger);

//use morgan third-part middleware
//app.use(morgan('dev'));

app.get("/", (request, response) => {
  response.json({ message: "GET /" });
});

app.post("/", (request, response) => {
  response.json({ message: "post /" });
});
app.put("/", (request, response) => {
  response.json({ message: "put /" });
});
app.delete("/", (request, response) => {
  response.json({ message: "delete /" });
});

app.get("/post", (request, response) => {
  response.json({ message: "GET POST /" });
});

//middlewrae for handling 404 errors
app.use(errorRoutes);


module.exports = app;