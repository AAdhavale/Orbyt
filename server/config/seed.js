require("dotenv").config({ path: "../.env" })
const mongoose = require("mongoose")
const Ground = require("../models/Ground")
require("dotenv").config()

const grounds = [
  {
    name: "FOOTBALL_GROUND",
    sports: ["Football", "Cricket", "Running"],
    courts: 1,
  },
  {
    name: "BASKETBALL_GROUND",
    sports: ["Basketball"],
    courts: 2,
  },
  {
    name: "VOLLEYBALL_GROUND",
    sports: ["Volleyball", "Kabaddi", "Shotput"],
    courts: 1,
  },
]

const seedGrounds = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")

    await Ground.deleteMany() // clear existing grounds first
    await Ground.insertMany(grounds)
    console.log("Grounds seeded successfully")

    process.exit()
  } catch (err) {
    console.log("Seeding failed:", err)
    process.exit(1)
  }
}

seedGrounds()