const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    state: {
        type: String,
    },
    facility: {
        type: String
    },
    clinician: {
        type: String
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
