const getAllCategories =async (req, res) => {
    const categories = await Category.find({});
    res.status(200).json(categories)
  }
  const getCategoryById = async(req, res) => {
    res.send('Get one category!')
  }

  const addNewCategory = async (req, res) => {
    const data = req.body
    const category = new Category(data)
    await category.save()
    res.status(201).json(category)
    }

    const updateCategory = async (req, res) => {
        res.send('update category!')
      }

      const deleteCategory = async(req, res) => {
        res.send('delete category!')
      }

  module.exports = {
    getAllCategories,
    getCategoryById,
    addNewCategory,
    updateCategory,
    deleteCategory
  }