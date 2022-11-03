const mongoose = require('mongoose')
const FeedbackSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    feedback: String,
})

module.exports = mongoose.model('Feedback', FeedbackSchema)