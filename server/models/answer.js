const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
    content: {
        type: String,
        required: [true, 'content is required']
    },
    upvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    downvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer
