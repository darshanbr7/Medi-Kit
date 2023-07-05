const cart=require("../../Model/cart/cart")
const medicine=require("../../Model/medicine/medicine")
const cartController={}

cartController.add=(req,res)=>{
    const body=req.body
    const data=req.user
    let Data=new cart(body)
    Data.email=data.email
    Data.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json({"error":err.message})
        })
}
   
cartController.get=(req,res)=>{
    const data=req.user
    cart.find({email:data.email})
            .populate('medicine')
            .exec()
            .then((response)=>{
                res.json(response)
            })
            .catch((err)=>{
                res.json({"error":err})
            })
}

module.exports=cartController