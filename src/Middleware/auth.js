const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
       let verify= jwt.verify(token,"token")
       if(verify){
        req.body.userId=verify.ID
        next()
       }else{
        res.status(400).send({"msg":"Please Login First"})
       }
    }else{
        res.status(400).send({"msg":"Please Login First"})
    }
}

module.exports={auth}