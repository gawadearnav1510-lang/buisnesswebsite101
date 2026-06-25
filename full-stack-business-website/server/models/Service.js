import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '✦'
  },
  features: [String],
  price: Number,
  category: {
    type: String,
    enum: ['digital-marketing', 'web-development', 'branding', 'consulting'],
    default: 'digital-marketing'
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;