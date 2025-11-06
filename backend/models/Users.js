import mongoose from "mongoose";

// ====== Schema & Model ======
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  year: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User