const express=require('express')
const orderRoute=express.Router()
const {orderModel}=require('../Models/OrderModel')
const {auth}=require('../Middleware/auth')

orderRoute.post('/order',async(req,res)=>{
    try {
        const token=req.headers.authorization;
        let order={
            books:req.body.books,
            amount:req.body.amount
        }
        if(token){
            let verify= jwt.verify(token,"token")
            if(verify){
                order.user={userId:verify.ID,ref:"User"}
                let finalOrder=orderModel(order)
                await finalOrder.save()
                res.status(201).send({"msg":"Order Saved!!"})
            }else{
                res.status(400).send({"msg":"Please Login First"})
            }
        }else{
            res.status(400).send({"msg":"Please Login First"})
        }
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

orderRoute.use(auth)
orderRoute.get("/orders",async(req,res)=>{
    try {
        let order=await orderModel.find()
        res.status(200).send(order)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})


module.exports={orderRoute}