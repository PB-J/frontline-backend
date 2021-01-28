const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
 like: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Like', likeSchema)
