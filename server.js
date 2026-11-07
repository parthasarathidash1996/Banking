import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app= express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.get("/happy",(req,res)=>{
    res.send("HAPPY DIWALI")
})
const port=process.env.PORT
app.listen(port,()=>{
    console.log("server connected")
})