const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const collection = 'posts'

const PostSchema = new Schema({
  title: String,
  postedBy: {
    type: ObjectId,
    ref: 'User'
  },
  comments: [{
    text: String,
    postedBy: {
      type: ObjectId,
      ref: 'User'
    }
  }]
}, { collection })

module.exports = mongoose.model('Post', PostSchema)