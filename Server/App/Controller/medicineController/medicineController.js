const medicine=require("../../Model/medicine/medicine")
const medicineController={}
medicineController.add=(req,res)=>{
    const body=req.body
    new medicine(body).save()
                        .then((response)=>{
                            res.json(response)
                        })
                        .catch((err)=>{
                            res.json(err.message)
                        })
}
medicineController.getAll=(req,res)=>{
    medicine.find()
            .then((response)=>{
                res.json(response)
            })
            .catch((err)=>{
                res.json(err)
            })

}

module.exports=medicineController