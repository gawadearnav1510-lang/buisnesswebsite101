import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: String,
  company: String,
  content: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;