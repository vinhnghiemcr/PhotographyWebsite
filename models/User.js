const { Schema } = require('mongoose')

const User = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    displayName: { type: String, required: true},
    email: { type: String},
    loginCount: { type: Number,},
    packages: [{ type: Schema.Types.ObjectId, ref: 'Package'}],
    pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture'}],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Picture'}]
  },
  { timestamps: true }
)

module.exports = User