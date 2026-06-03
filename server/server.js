require("dotenv").config()
const express = require("express");
const mongoose= require("mongoose")
const cors = require("cors") //connects frontend to backend

const app = express();
app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDB connecteds successfully"))
    .catch((err)=>console.log("DB connection failed:",err))

app.get("/test",(req,res)=>{
    res.send("Orbyt API is running")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
     console.log("server is running on port 3000")
} 
)