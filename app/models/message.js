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
        default: ' '
    },
    facility: {
        type: String,
        default: ' '
    },
    clinician: {
        type: String,
        default: ' '
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
