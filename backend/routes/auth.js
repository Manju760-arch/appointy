import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Register
router.post('/register', async (req, res)=>{
    const { username, email, password } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.json({ message: 'Account created successfully' });
    }catch(err){
        res.status(400).json({ message: 'User already exists' });
    }
});

// Login
router.post('/login', async (req,res)=>{
    const { username, email, password } = req.body;
    try{
        const user = await User.findOne({ username, email });
        if(!user) return res.status(400).json({ message: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Incorrect password' });
        res.json({ message: 'Login successful', user });
    }catch(err){
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
