import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import doctorRoutes from './routes/doctor.js';
import express from "express";
import path from "path";



dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(5000, () => console.log("Server running on port 5000"));

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
