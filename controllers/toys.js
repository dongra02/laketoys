const Toy = require('../models/toy')
const { notFound, forbidden } = require('../lib/errorMessage')

async function toyIndex(_req, res, next) {
  try {
    const toys = await Toy.find()
    if (!toys) throw new Error(notFound)
    res.status(200).json(toys)
  } catch (err) {
    next(err)
  }
}

async function toyCreate(req, res, next) {
  try {
    const newToyData = { ...req.body, owner: req.currentUser._id }
    const newToy = await Toy.create(newToyData)
    res.status(201).json(newToy)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: toyIndex,
  create: toyCreate
}