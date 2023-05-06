const mongoose=require('mongoose')

const connection=mongoose.connect("mongodb+srv://marvel:marvelfan@cluster0.7678rp7.mongodb.net/BookOrder?retryWrites=true&w=majority")

module.exports={connection}