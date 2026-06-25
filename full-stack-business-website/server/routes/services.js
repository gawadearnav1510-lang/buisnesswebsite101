import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.json({ success: true, services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;