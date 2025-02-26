const Job = require("../models/Job");

const jobController = {
  getJobs: async (request, response) => {
    try {
      // GEt all jobs from the data base
      const jobs = await Job.find();

      // Send a response
      response.json(jobs);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  createJob: async (request, response) => {
    // Get the data from the request body
    const {
      title,
      company,
      location,
      salary,
      description,
      experience,
      skills,
    } = request.body;

    // Create a new job object
    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description,
      experience,
      skills,
    });

    // Save the job to the database
    await newJob.save();

    // Send a response
    response.json({ message: "Job created successfully" });
  },

  getJobID: async (request, response) => {
    try {
      // Get the job ID from the request parameters
      const { id } = request.params;
      // Find the job by ID
      const job = await Job.findById(id);
      //send a response
      response.json(job);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  searchJobs: async (request, response) => {
    response.json({ message: "GET BY SEARCH" });
  },
  updateJob: async (request, response) => {
    try {
      //Get the job ID from req parameters
      const { id } = request.params;
      //Get the data from the req body
      const {
        title,
        company,
        location,
        salary,
        description,
        experience,
        skills,
      } = request.body;
      //create a new job object
      const updatedJob = {
        title,
        company,
        location,
        salary,
        description,
        experience,
        skills,
      };

      // Update the job in the database
      await Job.findByIdAndUpdate(id, updatedJob);
      //send a response
      response.json({ message: "Job updated sucessfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  deleteJobs: async (request, response) => {
    try {
      // get the job id from the request params 
      const { id } = request.params;

      // delete the job from the database 

      await Job.findByIdAndDelete(id);

      //send a response 
      response.json({ message: 'Job Delete successfully' });

    } catch (error) {
      response.status(500).json({ message: error.message })
    }
  },
};

module.exports = jobController;
