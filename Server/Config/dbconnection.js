const mongoose=require("mongoose")
const Connect=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/medi-kit")
                .then(()=>{
                    console.log("connected to database");
                })
                .catch(()=>{
                    console.log("not connect");
                })
}
module.exports=Connect