import User from "../models/Appointment.js";

export const appointment = async (req, res) => {
  try {
    const {name, email, phone, dob, doctor, date, time} = req.body;

    const user = new User({ name, email, phone, dob, doctor, date, time });
    await user.save();

    return res.status(201).json({ message: "Appointment Booked Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

