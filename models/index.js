const mongoose = require('mongoose')
const User = require('./User')
const Service = require('./Service')
const Package = require('./Package')
const Picture = require('./Picture')
const Review = require('./Review')

const User = mongoose.model('User', UserSchema)
const Service = mongoose.model('Service', ServiceSchema)
const Package = mongoose.model('User', PAckageSchema)
const Picture = mongoose.model('Picture', PictureSchema)
const Review = mongoose.model('Review', ReviewSchema)


module.exports = {
  User,
  Service,
  Package,
  Picture,
  Review
}