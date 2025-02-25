// impot expres library
const express = require("express");
const jobController = require("../controllers/jobController");

// creater a express router
const jobRouter = express.Router();

jobRouter.get("/", jobController.getJobs);

jobRouter.post("/", jobController.createJobs);

module.exports = jobRouter;
