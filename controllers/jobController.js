const jobController = {
    getJobs: (request, response) => {
        response.json({ message: "GET" });
    },

    createJobs: (request, response) => {
        response.json({ message: "POST" });
    }
};

    module.exports = jobController;