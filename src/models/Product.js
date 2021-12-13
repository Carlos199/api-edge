import { Schema, model } from 'mongoose'
const mongoosePaginate = require('mongoose-paginate-v2')
const productSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    imageUrl: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

productSchema.plugin(mongoosePaginate)

export default model('Product', productSchema)
