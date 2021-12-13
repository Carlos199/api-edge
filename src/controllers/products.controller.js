import Product from '../models/Product'

exports.createProduct = async (req, res) => {
  try {
    const { name, category, price, imgUrl } = req.body
    if (!name) return res.status(404).json('name is required')
    if (!price) return res.status(404).json('price is required')

    const newProduct = new Product({ name, category, price, imgUrl })
    const productSaved = await newProduct.save()

    res.status(200).send(productSaved)
  } catch (error) {
    res.status(400).json({ message: `Error, ${error} creating product` })
  }
}

export const getProducts = async (req, res) => {
  const products = await Product.paginate({})
  if (products) return res.status(200).json(products)
  res.status(404).json('No products')
}

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId)
  if (product) return res.status(200).json(product)
  res.status(404).json('product id does not exist')
}

export const updateProductById = async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  )
  if (updateProduct) return res.status(200).json(updateProduct)
  res.status(404).json('product id does not exist')
}

export const deleteProductById = async (req, res) => {
  const { productId } = req.params
  const result = await Product.findByIdAndDelete(productId)
  if (result) return res.status(200).json('susscefull')

  res.status(404).json('product id does not exist')
}
