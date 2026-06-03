const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "bloody hell!, enter your name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is require to proceed"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "enter password, How the hell you can login or register without password"],
      minlength: [6, "Password must be at least 6 characters"],
    },

    role: {
      type: String,
      enum: [
        "STUDENT",
        "CAPTAIN",
        "DEPT_COORDINATOR",
        "GAME_COORDINATOR",
        "CLUB_PRESIDENT",
        "SPORTS_COORDINATOR",
        "PRINCIPAL",
      ],
      default: "STUDENT",
    },

    department: {
      type: String,
      enum: ["IT", "COMP", "ENTC", "AUTO", "FE", "NONE"],
      message:"choose between them, there is no default",
      default: "NONE", // NONE for principal, coordinators etc
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // auto adds createdAt and updatedAt
  }
)

// hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next() // only hash if password changed
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// method to compare password at login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema)
module.exports = User