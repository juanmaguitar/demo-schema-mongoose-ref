const mongoose = require('mongoose')
const URL_DB = 'mongodb://localhost:27017/demo-blog'

mongoose.Promise = global.Promise
mongoose.connect(URL_DB, {useMongoClient: true})

const User = require('./models/User.js')

//console.log ( User.stats() )

const juanma = new User({ name: 'juanma' })

User.findBySimilarName( juanma.name )
  .then( users =>  users.map(({name, _id}) => ({name, _id})))
  .then( users => {
    console.log('results of User.findBySimilarName')
    console.log(users)
  })

juanma.findUsersWithSameName()
  .then( users =>  users.map(({name, _id}) => ({name, _id})))
  .then( users => {
    console.log('results of juanma.findUsersWithSameName')
    console.log(users)
  })

/*
results of User.findBySimilarName
[ { name: 'juanma', _id: 59a569e5dd936584b4a08a38 },
  { name: 'juanmanuel', _id: 59a56b91c5154389d5652994 } ]
results of juanma.findUsersWithSameName
[ { name: 'juanma', _id: 59a569e5dd936584b4a08a38 }
 */


juanma.save()


// const manuel = new User({ name: 'manuel' })
// const paco = new User({ name: 'paco' })
// const maria = new User({ name: 'maria' })
// const julian = new User({ name: 'julian' })
// const andres = new User({ name: 'andres' })


// manuel.save()
// paco.save()
// maria.save()
// julian.save()
// andres.save()

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


