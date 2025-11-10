import express from 'express';
import Doctor from '../models/Doctor.js';
import User from '../models/User.js';

const router = express.Router();

// Get all doctors
router.get('/', async (req,res)=>{
    const doctors = await Doctor.find();
    res.json(doctors);
});

// Book doctor
router.post('/book', async (req,res)=>{
    const { userId, doctorId, date, time } = req.body;
    const user = await User.findById(userId);
    const alreadyBooked = user.bookedDoctors.find(d=>d.doctorId.toString()===doctorId);
    if(!alreadyBooked){
        user.bookedDoctors.push({ doctorId, date, time });
        await user.save();
    }
    res.json({ message:'Doctor booked' });
});

// Unbook doctor
router.post('/unbook', async (req,res)=>{
    const { userId, doctorId } = req.body;
    const user = await User.findById(userId);
    user.bookedDoctors = user.bookedDoctors.filter(d=>d.doctorId.toString()!==doctorId);
    await user.save();
    res.json({ message:'Doctor unbooked' });
});

export default router;
