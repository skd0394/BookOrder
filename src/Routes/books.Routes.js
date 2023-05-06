const express=require('express')
const bookRoute=express.Router()
const {bookModel}=require('../Models/BookModel')


bookRoute.get('/books',async (req,res)=>{
    const {query}=req
    try {
        let books=await bookModel.find(query)
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

bookRoute.get('/books/:id',async(req,res)=>{
    try {
        const {id}=req.params
        let book=await bookModel.find({'_id':id})
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

bookRoute.post('/books',async(req,res)=>{
    try {
        let book=bookModel(req.body)
        await book.save()
        res.status(201).send({"msg":"Book Added To Cart"})
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

bookRoute.put('/books/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        let book=await bookModel.findByIdAndUpdate(id,{...req.body})
        res.status(204).send({"msg":"Book Details are Changed"})
    } catch (error) {
        // console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

bookRoute.delete('/books/:id',async(req,res)=>{
    try{
        const {id}=req.params
        let book=await bookModel.findByIdAndDelete(id)
        res.status(202).send({"msg":"Book Deleted Successfully"})
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

module.exports={bookRoute}
