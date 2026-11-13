const {student}=require("../models/studentModel.js")
const students=async(req,res)=>{
    const students= await student.find()
    await res.send(students)
}

const create_student=(req,res)=>{
    student.insertOne(req.body)
    res.send("student is created")
}
const create_students=(req,res)=>{
    student.insertMany(req.body)
    res.send("students are created")
}
const studento=async(req,res)=>{
    const s=await student.find({city:req.body.city})
    await res.send(s)
}
const studentu=async(req,res)=>{
const s=await student.find(req.body)
await res.send(s)
}

const studentById=async(req,res)=>{
    console.log(req.params.id)
    const s= await student.find({_id:req.params.id})
    await res.send(s)
}
const updateo=async(req,res)=>{
    const s=await student.updateOne({name:req.body.name},{$set:{city:req.body.city}})
    await res.send(s)
}
const updatem=async(req,res)=>{
    const s=await student.updateMany({city:req.body.city},{$set:{marks:req.body.marks}})
    await res.send(s)
}
module.exports={students,create_student,create_students,
    studento,studentu,studentById,updateo,updatem}