const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const Schema=mongoose.Schema
const userdb=new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        minLength:5
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        validate:{
            validator:function(value){
              return isEmail(value)  
            },
            message:function(){
                return "enter proper Email"
            }
        }
    },
    password:{
        type : String,
        required : [true, 'Password is neccessary to login'],
        min : 8,
        max : 128,
    },
})
const user=mongoose.model("user",userdb)
module.exports=user