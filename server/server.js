import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import errorHandler from './middleware/errorHandler.js';  // Import the error handler

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req,res)=>{
    res.json({
        message: "Server is healthy"
    })
})
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Error handler (must be placed after routes)
app.use(errorHandler);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
