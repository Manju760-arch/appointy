import express from 'express';
import Appointment from '../models/Appointment.js';


const router = express.Router();
router.get('/booking', async(req, res)=>{
    try {
        const users = await Appointment.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ message: "Server error" });
      }
    
});
router.post('/', async (req, res)=>{
    const {name, email, phone, dob, doctor, date, time  } = req.body;
    try{
         const newAppointment = new Appointment({ name, email, phone, dob, doctor, date, time});
        await newAppointment.save();
        res.json({ message: 'Appointment Booked successfully' });
    }catch(err){
        res.status(400).json({ message: 'Server error' });
    }
});



export default router;
