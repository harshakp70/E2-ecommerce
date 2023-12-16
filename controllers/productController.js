const getAllProducts = async (req, res) => {

  const products = await Product.find();
  res.status(200).json(products)
}

const getProductById = async (req, res) => {
  res.send('Get one product!')
}

const addNewProduct = async (req, res) => {
  const data = req.body
  const product = new Product(data)
  await product.save()
  res.status(201).json(product)
}

const updateProduct = async (req, res) => {
  const data = req.body
  const product = await Product.findByIdAndUpdate(req.params.productId, data, { new: true })
  res.status(200).json(product)
}

const deleteProduct = async (req, res) => {
  res.send('delete product!')
}

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct
}