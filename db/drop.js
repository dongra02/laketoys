const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

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
    } catch (err) {
      console.log(err)
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  }
)