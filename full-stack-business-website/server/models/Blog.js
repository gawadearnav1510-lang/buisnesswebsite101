import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  excerpt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://picsum.photos/id/1015/800/600'
  },
  category: {
    type: String,
    enum: ['Marketing', 'Web Design', 'SEO', 'Branding', 'Social Media', 'Analytics'],
    default: 'Marketing'
  },
  author: {
    type: String,
    default: 'Nexus Team'
  },
  readTime: {
    type: Number,
    default: 5
  },
  published: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

blogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;