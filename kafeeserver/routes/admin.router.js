const BookCategoryController = require('../controllers/books/bookCategory.controller')
const { bookCategoryValidator } = require('../validation/bookValidator')

const router = require('express').Router()

router.get('/api/admins/books/categories',BookCategoryController.index)

router.post("/api/admins/books/categories",bookCategoryValidator,BookCategoryController.store)
router.put("/api/admins/books/categories/:id",bookCategoryValidator,BookCategoryController.update)
router.delete("/api/admins/books/categories/:id",BookCategoryController.destroy)
router.post("/api/admins/books/upload",(req,res) => {
    res.send(req.body)
})
module.exports = router