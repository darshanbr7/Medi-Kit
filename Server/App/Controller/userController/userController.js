const user=require("../../Model/user/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userController={}
userController.register=(req,res)=>{
 const body=req.body
 const newUser=new user(body)
      bcrypt.genSalt()
                .then((salt)=>{
                    bcrypt.hash(newUser.password,salt)
                            .then((enc)=>{
                                newUser.password=enc
                                    newUser.save()
                                    .then((data)=>{
                                        res.json(data)
                                    })
                                    .catch((err)=>{
                                        res.json({
                                            "message":"user already exist",
                                            "error":err
                                        })
                                    })
                            })
                            .catch((err)=>{
                                res.json("please provide a password")
                            })
                })
                .catch((err)=>{
                    res.json({"error":err})
                })
}
userController.login=(req,res)=>{
    const body= req.body
    user.findOne({email:body.email})
            .then((details)=>{
                bcrypt.compare(body.password,details.password)
                        .then((response)=>{
                            if(response){
                               const token={
                                _id:details._id,
                                email:details.email
                               }
                            const gentoken=jwt.sign(token,"D123",{expiresIn:"5d"})
                            res.json({
                                "token":gentoken
                            })
                            }else{
                                res.json({"error":"Enter A Valid Email/ Password"})
                            }
                        })
                        
            })
            .catch((err)=>{
                res.json(err)
            })
}

userController.updatePassword=(req,res)=>{
    const body=req.user
    const update=req.body
    user.findOneAndUpdate({_id:body._id},update,{runValidators:true})
        .then((list)=>{
            res.json(list)
        })
        .catch((err)=>{
            res.json(" not updated")
        })
}
module.exports=userController