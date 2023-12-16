
  const express = require('express')
  const Product = require('../models/product')
const { getProductById, addNewProduct, updateProduct, deleteProduct, getAllProducts } = require('../controllers/productController')
  const router = express.Router()

  router.get('/',getAllProducts)
  router.get('/:productId',getProductById )
  router.post('/', addNewProduct)
  router.patch('/:productId', updateProduct)
  router.delete('/:productId', deleteProduct)
  
  module.exports = router  