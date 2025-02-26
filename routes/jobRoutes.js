// impot expres library
const express = require("express");
const jobController = require("../controllers/jobController");

// creater a express router
const jobRouter = express.Router();

jobRouter.get("/", jobController.getJobs);
jobRouter.post("/", jobController.createJob);
jobRouter.get("/:id", jobController.getJobID);
jobRouter.get("/search", jobController.searchJobs);
jobRouter.put("/:id", jobController.updateJob);
jobRouter.delete("/:id", jobController.deleteJobs);

module.exports = jobRouter;
