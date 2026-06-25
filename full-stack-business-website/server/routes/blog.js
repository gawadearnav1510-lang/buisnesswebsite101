import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Public blog routes
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).limit(6);
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;