const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
const userData = require('./data/users')
const Toy = require('../models/toy')
const toyData = require('./data/toys')

mongoose.connect(
  dbURI,
  {  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {
    if (err) {
      console.log(err)
      return
    }
    try {

      await mongoose.connection.db.dropDatabase()
      console.log('🗑 🗑 Database Dropped 🗑 🗑')

      const users = await User.create(userData)
      console.log(`${users.length} users created successfully`)

      const owners = users.filter(user => user.userType === 'Owner')

      const toyDataOwners = toyData.map(toy => {
        toy.owner = owners[Math.floor(Math.random() * owners.length)]
        return toy
      })
      const toys = await Toy.create(toyDataOwners)
      console.log(`${toys.length} toys created successfully with owners`)

    } catch (err) {
      console.log(err)
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  }
)