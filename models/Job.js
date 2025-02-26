// import mongoose
const mongoose = require('mongoose');

// define schema
const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    salary: Number,
    description: String,
    experience: Number,
    skills: [String],
    postDate: {
        type: Date,
        default: Date.now
    },
    deadline: Date,
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Job', jobSchema, 'jobs');

