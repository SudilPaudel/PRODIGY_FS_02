import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/authController.js';


const router = express.Router();

// POST /api/auth/login
router.post('/login', loginAdmin);
router.post('/register', registerAdmin);

export default router;
