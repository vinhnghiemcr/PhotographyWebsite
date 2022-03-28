const { Schema } = require('mongoose')

const Service = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    packages: [{ type: Schema.Types.ObjectId, ref: 'Package'}],
    pictures: [{ type: Schema.Types.ObjectId, ref: 'Picture'}]
  },
  { timestamps: true }
)

module.exports = Service