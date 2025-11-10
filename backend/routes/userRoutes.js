// routes/userRoutes.js
import express from "express";
import User from "../models/User.js";
const router = express.Router();

// Get booked appointments for a user
router.get("/:userId/bookedDoctors", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user.bookedDoctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Book a doctor
router.post("/:userId/bookDoctor", async (req, res) => {
  const { doctorId, doctorName, date, time } = req.body;
  try {
    const user = await User.findById(req.params.userId);
    user.bookedDoctors.push({ doctorId, doctorName, date, time });
    await user.save();
    res.status(200).json({ message: "Booked successfully", name: doctorName });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
