const {check, validationResult} = require('express-validator');
const BookCategory = require('../models/books/bookCategory.model');

exports.bookCategoryValidator = [
  check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User title can not be empty!')
    .bail()
    .custom(async (title) => {
        const category = await findoneBook(title)
        if(category){
            throw new Error("This title is in use")
        }
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];

const  findoneBook = async (title) =>{
   const bookCategory = await  BookCategory.findOne({'title':title})
   return bookCategory
}