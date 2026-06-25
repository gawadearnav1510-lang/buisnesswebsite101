import express from 'express';
import { registerUser, loginUser, getMe, updateProfile } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/register', [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
], registerUser);

router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);

export default router;