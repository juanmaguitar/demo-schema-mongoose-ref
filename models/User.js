const mongoose = require('mongoose')
const Schema = mongoose.Schema
const repos = require('../data/repos.json')
const collection = 'users'

const randomBeatle = require('./handlers/randomBeatle')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  favoriteBeatle: {
    type: String,
    default: randomBeatle
  },
  favoriteRepo: {
    type: String
  }
}, { collection })


UserSchema.methods.findSimilarNames = function (cb) {
  return this.model('User').find({ name: this.name }, cb)
}

UserSchema.pre("save", function(next) {

  var self = this

  // rp('https://api.github.com/users/juanmaguitar/repos')
    // .then(res => res.json())
  Promise.resolve(repos)
    .then(repos => repos.map( repo => repo.name ))
    .then(reposNames => {
      const randomPosition = Math.floor(Math.random()*reposNames.length)
      return reposNames[randomPosition]
    })
    .then( randomRepoName => {
      self.favoriteRepo = randomRepoName
      next()
    })


});

module.exports = mongoose.model('User', UserSchema)
