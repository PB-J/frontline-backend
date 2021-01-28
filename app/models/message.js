const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'anonymous'
    },
    content: {
        type: String,
        required: true
    },
    state: {
        type: String,
        default: 'not provided'
    },
    facility: {
        type: String,
        default: 'not provided'
    },
    clinician: {
        type: String,
        default: 'not provided'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true  }
},
{
timestamps: true
})

module.exports = mongoose.model('Message', messageSchema)
