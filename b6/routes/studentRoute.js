const express=require("express")
const {create_student,create_students,students,studentm,studento,
    updateo,updatem,deleteById,deletem,deleteo,studentById,
    updateById
}=require("../controllers/studentController.js")
const Router=express.Router()
Router.post("/create_student",create_student)
Router.post("/create_students",create_students)
Router.get("/students",students)
Router.get("/studentm",studentm)
Router.get("/studento",studento)
Router.get("/student/:id",studentById)
Router.put("/updateo",updateo)
Router.put("/updatem",updatem)
Router.put("/update/:id",updateById)
Router.delete("/deleteo",deleteo) 
Router.delete("/delete/:id",deleteById) 
Router.delete("/deletem",deletem)

module.exports={Router}