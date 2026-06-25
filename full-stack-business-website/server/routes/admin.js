import express from 'express';
import { protect, adminOnly } from '../middleware/auth.js';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

router.use(protect);
router.use(adminOnly);

router.get('/dashboard', adminController.getDashboardStats);
router.get('/users', adminController.getAllUsers);
router.delete('/users/:id', adminController.deleteUser);

router.get('/contacts', adminController.getAllContacts);
router.put('/contacts/:id/reply', adminController.replyToContact);

router.get('/blogs', adminController.getAllBlogs);
router.post('/blogs', adminController.createBlog);
router.put('/blogs/:id', adminController.updateBlog);
router.delete('/blogs/:id', adminController.deleteBlog);

router.get('/services', adminController.getServices);
router.put('/services/:id', adminController.updateService);

router.get('/testimonials', adminController.getTestimonials);
router.post('/testimonials', adminController.createTestimonial);

router.get('/content', adminController.getWebsiteContent);
router.post('/content', adminController.updateWebsiteContent);

export default router;