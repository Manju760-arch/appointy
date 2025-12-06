import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { loginUser, registerUser, getAllUsers } from '../controllers/authController.js';

const router = express.Router();

// Register
router.post('/register', registerUser);
router.get('/users', getAllUsers);
// Login
router.post('/login', loginUser);

export default router;
