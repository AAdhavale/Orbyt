const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"name of the Team are required"],
     },
     sports:{
        type:String,
     },
     department:{
        type:String,
        required:true,
    },
    captain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true,
    },
    players:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
    },
    isApproved:{
        type:Boolean,
        default:false,
    }
,


}
,{
    timestamps:true,
});

const Team = mongoose.model("Team",teamSchema)

module.exports=Team