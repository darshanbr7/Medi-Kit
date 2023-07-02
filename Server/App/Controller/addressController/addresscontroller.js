
const address=require("../../Model/address/address")
const addresscontroller={}
addresscontroller.add=(req,res)=>{
        const body=req.body
        const data=req.user
       let addAddress= new address(body)
       addAddress.userId=data._id
        addAddress.save()
                    .then((response)=>{
                        res.json(response)
                    })
                    .catch((err)=>{
                        res.json({"error":err})
                    })
       
}
module.exports=addresscontroller