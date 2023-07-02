const express=require("express")
const userController=require("../App/Controller/userController/userController")
const medicineController=require("../App/Controller/medicineController/medicineController")
const Auth=require("../App/Middleware/Auth")
const addresscontroller=require("../App/Controller/addressController/addresscontroller")
const routes=express.Router()

routes.post("/register",userController.register)
routes.post("/login",userController.login)

routes.get("/account",Auth.verify,userController.getAccount)
routes.post("/add/medicine",medicineController.add)
routes.get("/all/medicine",medicineController.getAll)

routes.post("/add/address",Auth.verify,addresscontroller.add)

module.exports=routes