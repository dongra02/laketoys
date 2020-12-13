const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/laketoys'
const secret = 'secret here'

module.exports = { dbURI, port, secret }