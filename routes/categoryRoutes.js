const express = require('express')
const Category = require('../models/category')
const { getAllCategories, getCategoryById, addNewCategory, updateCategory, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()

router.get('/', getAllCategories)
router.get('/:categoryId', getCategoryById)
router.post('/', addNewCategory)
router.patch('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router