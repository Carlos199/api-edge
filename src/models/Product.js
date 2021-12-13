import { Schema, model } from 'mongoose'
const mongoosePaginate = require('mongoose-paginate-v2')
const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    category: String,
    price: {
      type: Number,
      require: true
    },
    imageUrl: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

productSchema.plugin(mongoosePaginate)

export default model('Product', productSchema)
