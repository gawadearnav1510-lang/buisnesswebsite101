import User from '../models/User.js';
import Service from '../models/Service.js';
import Testimonial from '../models/Testimonial.js';
import Blog from '../models/Blog.js';
import Content from '../models/Content.js';

export const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({ email: { $ne: 'admin@nexusagency.com' } });
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    await Blog.deleteMany({});
    await Content.deleteMany({});

    // Create admin if not exists
    let admin = await User.findOne({ email: 'admin@nexusagency.com' });
    if (!admin) {
      admin = await User.create({
        name: 'Admin User',
        email: 'admin@nexusagency.com',
        password: 'admin123',
        role: 'admin'
      });
      console.log('✅ Admin user created (admin@nexusagency.com / admin123)');
    }

    // Seed Services
    await Service.create([
      {
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies that drive qualified traffic, increase conversions, and build brand authority.",
        icon: "📈",
        features: ["SEO Optimization", "PPC Campaigns", "Social Media Management", "Content Marketing", "Email Campaigns", "Analytics & Reporting"],
        price: 2499,
        category: "digital-marketing"
      },
      {
        title: "Web Development",
        description: "Bespoke, high-performance websites and web applications built with modern technologies and user-centric design.",
        icon: "💻",
        features: ["Custom Website Design", "E-commerce Solutions", "Web Applications", "CMS Development", "API Integration", "Performance Optimization"],
        price: 3999,
        category: "web-development"
      },
      {
        title: "Brand Strategy",
        description: "Develop a powerful brand identity that resonates with your target audience and differentiates you from competitors.",
        icon: "🎨",
        features: ["Brand Identity Design", "Logo & Visual Assets", "Brand Guidelines", "Messaging & Positioning", "Market Research", "Competitor Analysis"],
        price: 1899,
        category: "branding"
      },
      {
        title: "Growth Consulting",
        description: "Expert strategic guidance to accelerate your business growth through data-driven insights and proven methodologies.",
        icon: "📊",
        features: ["Business Audits", "Growth Roadmaps", "Conversion Optimization", "Customer Journey Mapping", "Team Training", "Ongoing Support"],
        price: 3200,
        category: "consulting"
      }
    ]);

    // Seed Testimonials
    await Testimonial.create([
      {
        name: "Sarah Chen",
        position: "CEO",
        company: "Lumina Health",
        content: "Nexus transformed our online presence completely. Their digital marketing campaign increased our leads by 340% in just 4 months.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5
      },
      {
        name: "Marcus Rodriguez",
        position: "Founder",
        company: "Vivid Studios",
        content: "The website they built for us is not only beautiful but converts visitors at an incredible rate. Their team is professional and responsive.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
      },
      {
        name: "Priya Patel",
        position: "Marketing Director",
        company: "Evergreen Co.",
        content: "Working with Nexus was a game changer. Their SEO expertise helped us rank #1 for multiple competitive keywords.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5
      }
    ]);

    // Seed Blog Posts
    await Blog.create([
      {
        title: "The Future of Digital Marketing in 2026",
        slug: "future-of-digital-marketing-2026",
        excerpt: "Discover the emerging trends that will dominate digital marketing this year and how your business can stay ahead.",
        content: "<p>The digital marketing landscape is evolving faster than ever. In 2026, AI personalization, voice search, and immersive experiences are no longer nice-to-haves but necessities.</p><h3>Key Trends:</h3><ul><li>Hyper-personalization using AI</li><li>Zero-party data strategies</li><li>Immersive AR/VR campaigns</li><li>Ethical marketing practices</li></ul><p>Businesses that embrace these changes will see significant ROI.</p>",
        image: "https://picsum.photos/id/1015/800/600",
        category: "Marketing",
        author: "Elena Voss",
        readTime: 8
      },
      {
        title: "How to Build a High-Converting Website in 30 Days",
        slug: "build-high-converting-website-30-days",
        excerpt: "A step-by-step guide to creating a website that not only looks great but actually grows your business.",
        content: "<p>Creating a high-converting website requires more than beautiful design. It requires a deep understanding of user psychology and clear calls-to-action.</p><h3>Our Proven Process:</h3><ol><li>Discovery & Strategy</li><li>Wireframing & UX</li><li>Visual Design</li><li>Development & Testing</li><li>Launch & Optimization</li></ol>",
        image: "https://picsum.photos/id/201/800/600",
        category: "Web Design",
        author: "David Kim",
        readTime: 12
      }
    ]);

    // Seed default content for dynamic editing
    await Content.create([
      { key: 'hero', value: { 
        headline: "We Craft Digital Experiences That Drive Growth", 
        subheadline: "A full-service digital agency helping ambitious brands dominate their markets through strategy, creativity, and technology." 
      }},
      { key: 'about', value: { 
        title: "About Nexus Agency", 
        description: "Founded in 2018, Nexus Agency has helped over 180 brands achieve remarkable growth through integrated digital strategies. Our team of 24 specialists brings together expertise from marketing, design, development, and analytics." 
      }},
      { key: 'contactInfo', value: { 
        email: "hello@nexusagency.com", 
        phone: "+1 (415) 555-0192", 
        address: "123 Market Street, Suite 400, San Francisco, CA 94105" 
      }}
    ]);

    console.log('✅ Database seeded successfully with realistic content!');
  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
};