const express=require('express')
const authRoute=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const {userModel}=require('../Models/UserModel')

authRoute.post('/register',(req,res)=>{
        const {name,email,password,isAdmin}=req.body
        try {
            bcrypt.hash(password,3,async(err,hash)=>{
                const user=userModel({name,email,password:hash,isAdmin})
                 await user.save()
                res.status(201).send({"msg":"Registration Successful"})
            })
        } catch (error) {
            res.status(500).send()
        }
})

authRoute.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await userModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    res.status(201).send({"msg":"Login Successful","token":jwt.sign({"ID":user._id},"token")})
                }else{
                    res.status(400).send({"msg":"Please Enter Valid Credentails"})
                }
            })
        }
    }
    catch(err){
        res.status(400).send({"msg":"Cannot find User! Please Register"})
    }
})



module.exports={authRoute}