const Auth={}
const user=require("../Model/user/user")
const jwt=require("jsonwebtoken")

 
Auth.verify=(req,res,next)=>{
    const token=req.headers.authorization
    let tokendata;
    try{
        tokendata=jwt.verify(token,"D123")
        user.find({email:tokendata.email})
                .then((details)=>{
                    req.user=details
                    next()
                })
                .catch((err)=>{
                    res.json(err)
                })
    }catch(err){
        res.status(401).json(err.message)
    }
}   
module.exports=Auth