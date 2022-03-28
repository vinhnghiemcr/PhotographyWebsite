const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true}
  },
  { timestamps: true }
)

module.exports = Review