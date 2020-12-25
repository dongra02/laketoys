const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')
let userData = require('./data/users')
const Toy = require('../models/toy')
let toyData = require('./data/toys')
const faker = require('faker')

const userCount = 20
const toyCount = 50

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

      // Create users with faker & users.js
      const fakerUsers = []
      for (let i = 0; i < userCount; i++) {
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

      // isolate owners, create toys with faker and toys.js
      const owners = users.filter(user => user.userType === 'Owner')
      const categories = ['Fishing', 'Boats', 'Inflatable', 'Childrens']
      const fakerToys = []
      for (let i = 0; i < toyCount; i++) {
        const baseGPS = [['42.12803241810443', '-71.3774061531078'],['42.704572457292464', '-76.95506991231035']][Math.floor(Math.random() * 2)]
        const baseName = faker.random.word()
        const catOne = categories[Math.floor(Math.random() * 4)]
        const filtCats = categories.filter(cat => cat !== catOne)
        const catTwo = filtCats[Math.floor(Math.random() * 3)]
        const newToy = {
          name: `DEMO ${baseName} Toy`,
          categories: [catOne, catTwo],
          description: faker.lorem.paragraph(nb_sentences=2, variable_nb_sentences=false),
          location: {
            latitude: Number(faker.address.nearbyGPSCoordinate(baseGPS)[0]),
            longitude: Number(faker.address.nearbyGPSCoordinate(baseGPS)[1]) 
          },
          rate: Math.max(Math.ceil(Math.random() * 150), 55),
          images: [faker.image.sports()]
        }
        fakerToys.push(newToy)
      }
      toyData = toyData.concat(fakerToys)
      for (let i = 0; i < toyData.length; i++) {
        toyData[i]['owner'] = owners[Math.floor(Math.random() * owners.length)]
      }
      const toys = await Toy.create(toyData)
      console.log(`${toys.length} toys created successfully with owners`)

      // Create orders

    } catch (err) {
      console.log(err)
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  }
)