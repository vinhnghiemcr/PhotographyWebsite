const mongoose = require('mongoose')
const UserSchema = require('./User')
const ServiceSchema = require('./Service')
const PackageSchema = require('./Package')
const PictureSchema = require('./Picture')
const ReviewSchema = require('./Review')
const ReceiptSchema = require('./Receipt')

const User = mongoose.model('User', UserSchema)
const Service = mongoose.model('Service', ServiceSchema)
const Package = mongoose.model('Package', PackageSchema)
const Picture = mongoose.model('Picture', PictureSchema)
const Review = mongoose.model('Review', ReviewSchema)
const Receipt = mongoose.model('Receipt', ReceiptSchema)


module.exports = {
  User,
  Service,
  Package,
  Picture,
  Review,
  Receipt
}