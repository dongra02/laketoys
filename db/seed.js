const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
let userData = require('./data/users')
const Toy = require('../models/toy')
const toyData = require('./data/toys')
const faker = require('faker')

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

      // user faker to create username then join with userData
      const fakerUsers = []
      for (let i = 0; i < 20; i++) {
        const newUser = {
          username: faker.internet.userName(),
          userType: ['Owner', 'Renter'][Math.floor(Math.random() * 2)],
          password: 'pass',
          passwordConfirmation: 'pass',
          profileImage: faker.image.avatar()
        }
        newUser['email'] = `${newUser.username}@email.com`,
        fakerUsers.push(newUser)
      }
      userData = userData.concat(fakerUsers)
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