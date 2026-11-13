const express=require("express")
const cors=require("cors")

const mongoose=require("mongoose")
const app=express()
app.use(express.json())
app.use(cors())
const {Router}=require("./routes/studentRoute.js")
const {configdb}=require("./config/db.js")
const port=5001
app.use("/ma",Router)
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
// hi aidsama