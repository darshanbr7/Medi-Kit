const mongoose=require("mongoose")
const Schema=mongoose.Schema
const useraddress=new Schema({
    address:{
        type:String,
        required:[true,"address is required"]
     },
     city:{
      type:String,
      required:[true,"city is required"]
   },
      state:{
         type:String,
         required:[true,"state is required"]
   },
      pincode:{
         type:String,
         required:[true,"pincode is required"]
      },
      landmark:{
         type:String,
         required:[true,"landmark is required"]
   },
      userId:{
         type:Schema.Types.ObjectId,
         ref:"user",
         required:[true,"user id is required"]
   },
})
const address=mongoose.model("address",useraddress)
module.exports=address