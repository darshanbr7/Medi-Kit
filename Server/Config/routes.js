const express=require("express")
const userController=require("../App/Controller/userController")
const Auth=require("../App/Middleware/Auth")
const routes=express.Router()

routes.post("/register",userController.register)
routes.post("/login",userController.login)


module.exports=routes