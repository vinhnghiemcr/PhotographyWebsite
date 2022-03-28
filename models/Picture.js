const { Schema } = require('mongoose')

const Picture = new Schema(
  {
    name: { type: String },
    description: { type: String},
    location: { type: String },
    url: { type: String, required: true },
    forSale: { type: Boolean, required: true},
    price: { type: Number}
  },
  { timestamps: true }
)

module.exports = Picture