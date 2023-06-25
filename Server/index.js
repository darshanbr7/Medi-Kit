const express=require("express")
const Connect=require("./Config/dbconnection")
const routes=require("./Config/routes")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/api",routes)
const port=3090
Connect()
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})