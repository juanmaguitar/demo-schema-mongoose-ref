const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'users'

const randomBeatle = require('./handlers/randomBeatle')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  favoriteBeatle: {
    type: String,
    default: randomBeatle()
  }
}, { collection })

module.exports = mongoose.model('User', UserSchema)
