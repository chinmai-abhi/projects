const {student}=require("../models/studentModel.js")
const students=async(req,res)=>{
    const students= await student.find()
    await res.send(students)
}
const studento=async(req,res)=>{
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
const updateById= async(req,res)=>{
    const s=await student.updateOne({_id:req.params.id},{$set:req.body})
    await res.send(s)


}
const deleteo=async(req,res)=>{
    const s=await student.deleteOne({name:req.body.name})
    await res.send(s)
}
const deleteById=async(req,res)=>{
const s=await student.deleteOne({_id:req.params.id})
await res.send(s)
}

const deletem=async(req,res)=>{
    const s=await student.deleteMany({course:req.body.course})
    await res.send(s)
}
const studentm=async(req,res)=>{
    const s=await student.find({city:req.body.city})
    await res.send(s)
}
const create_students=(req,res)=>{
    student.insertMany(req.body)
    res.send("students are created")
}
const create_student=(req,res)=>{
    student.insertOne(req.body)
    res.send("student is created")
}
module.exports={students,studento,studentById,
    updateo,updatem,deleteo,deleteById,deletem,updateById,
    studentm,create_students,create_student}
