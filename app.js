const mongoose = require('mongoose')
const URL_DB = 'mongodb://localhost:27017/demo-blog'

mongoose.Promise = global.Promise
mongoose.connect(URL_DB)

const User = require('./models/User.js')

const juanma = new User({ name: 'juanma' })
const manuel = new User({ name: 'manuel' })
const paco = new User({ name: 'paco' })
const maria = new User({ name: 'maria' })
const julian = new User({ name: 'julian' })
const andres = new User({ name: 'andres' })

juanma.save()
manuel.save()
paco.save()
maria.save()
julian.save()
andres.save()

// juanma.save()
//   .then(user => {
//     console.log('user created')
//     console.log(user)
//   })

// manuel.save()
//   .then(user => {
//     console.log('user created')
//     console.log(user)
//   })


