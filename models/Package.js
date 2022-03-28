const { Schema } = require('mongoose')

const Package = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true},
    service: { type: Schema.Types.ObjectId, ref: 'Service'}
  },
  { timestamps: true }
)

module.exports = Package