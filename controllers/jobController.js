const { request, response } = require("../app");

const jobController = {
  getJobs: (request, response) => {
    response.json({ message: "GET" });
  },

  createJobs: (request, response) => {
    response.json({ message: "POST" });
  },

  getJobID: (request, response) => {
    response.json({ message: "GET BY ID" });
  },
  searchJobs: (request, response) => {
    response.json({ message: "GET BY SEARCH" });
  }
}

    module.exports = jobController;