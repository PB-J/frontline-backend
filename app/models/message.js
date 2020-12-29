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
},
{
timestamps: true
})

module.exports = mongoose.model('Message', messageSchema)
