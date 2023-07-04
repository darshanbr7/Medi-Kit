const mongoose=require("mongoose")
const Schema=mongoose.Schema
const addCart=new Schema({
    name:{
        type:String,
        required:[true ,"medicine name  is required"],
        unique:true
    },
    avatar:{
        type:String,
        required:[true,"image is required"]
    },
    price:{
        type:String,
        required:[true,"price is required"]
    }, 
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:[true,"user id is required"]
  }
})
const cart=mongoose.model("cart",addCart)
module.exports=cart