// models/User.js
import mongoose from "mongoose";

const bookedDoctorSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  doctorName: String,
  date: String,
  time: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  bookedDoctors: [bookedDoctorSchema],
});

export default mongoose.model("User", userSchema);
