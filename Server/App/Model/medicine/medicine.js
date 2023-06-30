const mongoose=require("mongoose")

const isNumber=require("validator/lib/isNumeric")
const isFloat=require("validator/lib/isFloat")
const Schema=mongoose.Schema
const medicines=new Schema({
    mname:{
        type:String,
        required:[true ,"medicine name  is required"]
    },
    price:{
        type:String,
        validate:{
            validator:(value)=>{
                return validator.isFloat(value)
            },
            message:()=>{
                return "price Should be  in float"
            }
        },
        required:[true ,"price  is required"]
    },
    avatar:{
        type:String,
        required:[true,"image is required"]
    },
    id:{
        type:String,
        required:[true,"id is required"],
        unique:true,
       validate:{
        validator:(value)=>{
            return isNumber(value)
        },
        message:()=>{
            return "value should be in Number"
        }
       }
    }
})
 const medicine=mongoose.model("medicine",medicines)
 module.exports=medicine