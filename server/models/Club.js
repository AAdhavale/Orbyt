const mongoose = require("mongoose")

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Club name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    president: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Club must have a president"],
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    membershipFee: {
      type: Number,
      default: 0,
      min: [0, "Membership fee cannot be negative"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Club = mongoose.model("Club", clubSchema)
module.exports = Club