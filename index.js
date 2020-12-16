
const express = require('express')
const mongoose = require('mongoose')
const { dbURI, port } = require('./config/environment')
const logger = require('./lib/logger')
const errorHandler = require('./lib/errorHandler')
const router = require('./config/router')

const app = express()

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('🐘🐘 Mongo is connected 🐘🐘')
  }
)

app.use(express.json())

app.use(logger)

app.use('/api', router)

app.use(errorHandler)

app.listen(port, () => console.log(`👂👂 Listening on port ${port} 👂👂`))