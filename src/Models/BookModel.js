const mongoose=require("mongoose");

const BookSchema=new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number,
},{
    versionKey:false
})

const bookModel=mongoose.model('book',BookSchema)

module.exports={bookModel}