const mongoose=require("mongoose")
const configdb=mongoose.connect("mongodb://localhost:27017/aidsa_students")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
    console.log(`error is ${err}`)
})

module.exports={configdb}