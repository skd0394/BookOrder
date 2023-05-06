const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
},{
    versionKey:false
})

const userModel=mongoose.model('user',UserSchema)

module.exports={userModel}