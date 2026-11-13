const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})
app.listen(5440,()=>{
    console.log("server is running successfully at http://localhost:5440")
})