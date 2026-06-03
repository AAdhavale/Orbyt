const mongoose = require("mongoose")

mongoose.Schema=new mongoose.Schema(
 {
    name={
        type:String,

    }, 
    type={
        enum:["TEAM","INDIVIDUAL"],
        default:"NONE"
    }
 }
)