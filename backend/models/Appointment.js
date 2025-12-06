
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  
  name: String,
  email: String,
  phone: Number,
  dob:Date,
  doctor:String,
  date:Date,
  time: String,
});



export default mongoose.model("Appointment", appointmentSchema);
