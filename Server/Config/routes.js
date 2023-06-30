const express=require("express")
const userController=require("../App/Controller/userController/userController")
const medicineController=require("../App/Controller/medicineController/medicineController")
const Auth=require("../App/Middleware/Auth")
const routes=express.Router()

routes.post("/register",userController.register)
routes.post("/login",userController.login)

routes.post("/add/medicine",medicineController.add)
routes.get("/all/medicine",medicineController.getAll)


module.exports=routes