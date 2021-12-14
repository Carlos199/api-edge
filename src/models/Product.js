const { Schema, model } = require('mongoose')
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

module.exports = model('Product', productSchema)
