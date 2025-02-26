const Job = require('../models/Job')

const jobController = {
  getJobs: async (request, response) => {
    response.json({ message: "GET" });
  },

  

  createJob: async (request, response) => {
    // Get the data from the request body
    const { title, company, location, salary, description, experience, skills } = request.body;

    // Create a new job object
    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description,
      experience,
      skills
    });

    // Save the job to the database
    await newJob.save();

    // Send a response
    response.json({ message: 'Job created successfully' });
  },

  getJobID: (request, response) => {
    response.json({ message: "GET BY ID" });
  },
  searchJobs: (request, response) => {
    response.json({ message: "GET BY SEARCH" });
  },
  updateJobs: (request, response) => {
    response.json({ message: "P" });
  },
  deleteJobs: (request, response) => {
    response.json({ message: "GET BY SEARCH" });
  },
};

module.exports = jobController;
