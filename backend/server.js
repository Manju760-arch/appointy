import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import express from "express";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Middlewares must come BEFORE routes
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointment', appointmentRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
