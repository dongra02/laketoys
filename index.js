const { Router } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const { dbURI, PORT } = require('./config/environment')
const logger = require('./lib/logger')

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

app.listen(PORT, () => console.log(`Running on port ${PORT}`))