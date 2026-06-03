const mongoose = require("mongoose")

const groundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["FOOTBALL_GROUND", "BASKETBALL_GROUND", "VOLLEYBALL_GROUND"],
      required: [true, "Ground name is required"],
      unique: true,
    },

    sports: {
      type: [String],
      required: [true, "At least one sport is required"],
    },

    courts: {
      type: Number,
      default: 1,
      min: 1,
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

const Ground = mongoose.model("Ground", groundSchema)
module.exports = Ground