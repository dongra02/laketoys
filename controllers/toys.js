const Toy = require('../models/toy')
const { notFound, forbidden } = require('../lib/errorMessage')

async function toyIndex(_req, res, next) {
  try {
    const toys = await Toy.find()
      .populate('owner')
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

async function toyShow(req, res, next) {
  try {
    const toy = await Toy.findById(req.params.id)
      .populate('owner')
      .populate('reviews')
    if (!toy) throw new Error(notFound)
    res.status(200).json(toy)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: toyIndex,
  create: toyCreate,
  show: toyShow
}