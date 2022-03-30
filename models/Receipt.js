const { Schema } = require('mongoose')

const Receipt = new Schema(
  {
    items: {type: Object, required: true},
    total: {type: Number, required: true},
    date: { type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'user'}
  },
  { timestamps: true }
)

module.exports = Receipt