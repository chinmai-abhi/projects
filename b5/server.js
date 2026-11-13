const express=require("express")
const mongoose=require("mongoose")
const {student}=require("./models/studentModel.js")
const {students,create_student, create_students, studento, studentu, studentById, updateo, updatem}=require("./controllers/studentController.js")
const {Router}=require("./Routes/studentRoutes.js")
const app=express()
app.use(express.json())
const port=5001
mongoose.connect("mongodb://localhost:27017/aidsa_students")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
    console.log(`error is ${err}`)
})

app.use("/s",Router)
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})