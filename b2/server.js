const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/aids_flights")
.then(()=>{
    console.log("mongodb is connected successfully")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})
const studentSchema=new mongoose.Schema({
    name:"String",
    age:"Number",
    city:"String"
})
const student=mongoose.model("Students",studentSchema)
app.post("/post",(req,res)=>{
    const s=new student({
        name:req.body.name,
        age:req.body.age,
        city:req.body.city
    })
    s.save()
    res.send("object is created successfully")
})
const port=5879
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
