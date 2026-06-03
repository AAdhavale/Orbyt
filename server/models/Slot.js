const mongoose = require("mongoose"),

const slotSchema = new mongoose.Schema(
    {
        ground:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Ground"
        },
        court:{
            type:Number,
            default:1,
            min:1,
        },
        startTime:{
            type:String,
            required:[true, "Start time is required"],
        },
        endTime: {
      type: String,
      required: [true, "End time is required"],
    },
        date:{
            type:Date,
            required:[true, "date is required for creating slot"]
        },
        bookedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        purpose:{
            type:String,
            enum:["PRACTICE" , "MATCH", "SELECTION"],
            required:true,
        },
        isBooked:{
            type: Boolean,
            default: true,
        }
    },{
        timestamps:true,
    }
);

const Slot = mongoose.model("Slot", slotSchema)
module.exports=Slot