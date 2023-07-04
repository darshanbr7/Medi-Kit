const cart=require("../../Model/cart/cart")
const cartController={}

cartController.add=(req,res)=>{
    const body=req.body
    const data=req.user
    const Data=new cart(body)
    Data.userId=data._id
    Data.save()
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json({"error":err})
        })
}
cartController.get=(req,res)=>{
    let data=req.user
    cart.find({userId:data._id})
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json({"error":err})
    })
}

module.exports=cartController