import User from '../models/User.js';
import Contact from '../models/Contact.js';
import Blog from '../models/Blog.js';
import Service from '../models/Service.js';
import Testimonial from '../models/Testimonial.js';
import Content from '../models/Content.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalContacts = await Contact.countDocuments();
    const totalBlogs = await Blog.countDocuments();
    const unreadContacts = await Contact.countDocuments({ status: 'new' });

    res.json({
      success: true,
      stats: {
        totalUsers,
        totalContacts,
        totalBlogs,
        unreadContacts,
        totalRevenue: 124890 // Mock
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const replyToContact = async (req, res) => {
  try {
    const { reply } = req.body;
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    contact.reply = reply;
    contact.status = 'replied';
    contact.repliedAt = new Date();
    await contact.save();

    res.json({ success: true, message: 'Reply sent and saved' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Services and Content
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json({ success: true, services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json({ success: true, testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ success: true, testimonial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateWebsiteContent = async (req, res) => {
  try {
    const { key, value } = req.body;
    let content = await Content.findOne({ key });
    
    if (content) {
      content.value = value;
      await content.save();
    } else {
      content = await Content.create({ key, value });
    }
    
    res.json({ success: true, content });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getWebsiteContent = async (req, res) => {
  try {
    const contents = await Content.find();
    const contentObj = {};
    contents.forEach(item => {
      contentObj[item.key] = item.value;
    });
    res.json({ success: true, content: contentObj });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};