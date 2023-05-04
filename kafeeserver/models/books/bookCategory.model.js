const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookCategory = new Schema({
    title:{type:String,require:true,unique:true}
},
{
    timestamps: true,
}
);

const BookCategory = mongoose.model("BookCategory",bookCategory);
module.exports = BookCategory