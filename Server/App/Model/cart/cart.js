const mongoose=require("mongoose")
const medicine=require("../medicine/medicine")
const Schema=mongoose.Schema
const addCart=new Schema({
    email:{
            type:String,
            required:[true,"email is required"]
    },
    medicine:{
        type:Schema.Types.ObjectId,
        ref:medicine,
        reqired:[true,"medicine is required"]
    }
})
const cart=mongoose.model("cart",addCart)
module.exports=cart