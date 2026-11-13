const express=require("express")
const mongoose=require("mongoose")
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
const studentSchema=mongoose.Schema({
    name:"String",
    age:"Number",
    gender:"String",
    course:"String",
    year:"Number",
    marks:"Number",
    city:"String",
    email:"String"
})
const student=mongoose.model("students",studentSchema)

app.post("/create_student",(req,res)=>{
    student.insertOne(req.body)
    res.send("student is created")
})

app.post("/create_students",(req,res)=>{
    student.insertMany(req.body)
    res.send("students are created")
})

app.get("/students",async(req,res)=>{
    const students= await student.find()
    await res.send(students)
})
app.get("/student",async(req,res)=>{
    const s=await student.find({city:req.body.city})
    await res.send(s)
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})