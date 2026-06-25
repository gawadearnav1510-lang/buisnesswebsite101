import express from 'express';
import Content from '../models/Content.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const contents = await Content.find();
    const contentObj = {};
    contents.forEach(c => contentObj[c.key] = c.value);
    res.json({ success: true, content: contentObj });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;