const {
  validationError,
  notFound,
  castError,
  unauthorized,
  forbidden,
  jsonWebTokenError
} = require('./errorMessage')

const errorHandler = (err, _req, res, next) => {
  console.log(err.message)
  if (err.name === validationError) {
    const customErrors = {}
    for (const key in err.errors) {
      customErrors[key] = err.errors[key]
    }
    return res.status(422).json({
      message: 'Form Validation Error',
      errors: customErrors
    })
  }
  if (err.message === notFound || err.message === castError ) {
    return res.status(404).send({ message: 'Not Found' })
  }
  if (err.message === unauthorized) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if (err.message === forbidden) {
    return res.status(403).json({ message: 'Forbidden' })
  }
  if (err.name === jsonWebTokenError){ 
    return res.status(403).json({ message: 'Forbidden', detail: 'Token Error' })
  }
  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler