// import express

const express = require("express");

const logger = require("./utils/logger");
const errorRoutes = require("./utils/errorRoutes");
const jobRouter = require("./routes/jobRoutes");
//const morgan = require('morgan');

//create an express app

const app = express();

// use middleware
app.use(logger);

//use morgan third-part middleware
//app.use(morgan('dev'));

app.use("/jobs", jobRouter);
//middlewrae for handling 404 errors
app.use(errorRoutes);

module.exports = app;
