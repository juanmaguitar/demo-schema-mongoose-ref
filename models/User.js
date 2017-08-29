const mongoose = require('mongoose')
const Schema = mongoose.Schema
const rp = require('request-promise')
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


UserSchema.statics.findBySimilarName = function (name) {
  return this.find({ name: new RegExp(name, 'i') });
}

UserSchema.methods.findUsersWithSameName = function() {
  return this.model('User').find({ name: this.name })
}

UserSchema.pre('save', function(next) {

  var self = this

  const options = {
    url: 'https://api.github.com/users/juanmaguitar/repos',
    headers: {
      'User-Agent': 'Awesome-MyBlog-App'
    }
  }

  rp(options)
    .then(repos => JSON.parse(repos))
    .then(repos => repos.map( repo => repo.name ))
    .then(reposNames => {
      const randomPosition = Math.floor(Math.random()*reposNames.length)
      return reposNames[randomPosition]
    })
    .then( randomRepoName => {
      self.favoriteRepo = randomRepoName
      console.log(`added ${randomRepoName} to user ${self.name}`);
      next()
    })


});

module.exports = mongoose.model('User', UserSchema)
