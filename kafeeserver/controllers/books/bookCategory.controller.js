const BookCategory = require("../../models/books/bookCategory.model")


const BookCategoryController ={

    index:(req,res) => {
        
        BookCategory.find().sort({ _id: -1 }).then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },
    store:(req,res) =>{
        BookCategory.create(req.body).then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    update:(req,res) => {
        BookCategory.findByIdAndUpdate(req.params.id,req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },

    destroy : (req,res) => {
        BookCategory.findByIdAndDelete(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
}

module.exports = BookCategoryController