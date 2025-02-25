// import express

const { response } = require("express");
const express = require("express");
const { get } = require("mongoose");
const logger = require("./utils/logger");
const errorRoutes = require("./utils/errorRoutes");

//create an express app

const app = express();

// use middleware
app.use(logger);

app.get("/", (request, response) => {
  response.json({ message: "GET /" });
});

//middlewrae for handling 404 errors
app.use(errorRoutes);


module.exports = app;