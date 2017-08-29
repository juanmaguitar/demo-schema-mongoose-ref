const mongoose = require('mongoose')
const URL_DB = 'mongodb://localhost:27017/demo-blog'

mongoose.Promise = global.Promise
mongoose.connect(URL_DB, {useMongoClient: true})

const User = require('./models/User.js')

//console.log ( User.stats() )

//const julian = new User({ name: 'julian' })

// juanma.findSimilarNames(function (err, names) {
//   if (err) throw err
//   console.log (`There are ${names.length} with the same name`)
// })

//julian.save()


const manuel = new User({ name: 'manuel' })
const paco = new User({ name: 'paco' })
const maria = new User({ name: 'maria' })
const julian = new User({ name: 'julian' })
const andres = new User({ name: 'andres' })


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


