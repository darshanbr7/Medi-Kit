const mongoose=require("mongoose")
const Schema=mongoose.Schema
const medicines=new Schema({
    name:{
        type:String,
        required:[true ,"medicine name  is required"]
    },
    avatar:{
        type:String,
        required:[true,"image is required"]
    },
    price:{
        type:String,
        required:[true,"price is required"]
    }, 
    type:{
        type:String,
        required:[true,"type is required"],
    }
})
 const medicine=mongoose.model("medicine",medicines)
 module.exports=medicine