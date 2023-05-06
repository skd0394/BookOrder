const mongoose=require("mongoose");

const OrderSchema=new mongoose.Schema({
    user:{
        type:String,
        ref:String,
    },
    books:[{type:String,ref:String,}],
    totalAmount:Number,
},{
    versionKey:false
})

const orderModel=mongoose.model('order',OrderSchema)

module.exports={orderModel}