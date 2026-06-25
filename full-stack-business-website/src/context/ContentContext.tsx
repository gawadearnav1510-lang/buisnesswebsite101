import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ContentData {
  hero?: {
    headline: string;
    subheadline: string;
  };
  about?: {
    title: string;
    description: string;
  };
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: number;
  category: string;
  isActive: boolean;
}

export interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface ContentContextType {
  content: ContentData;
  services: Service[];
  testimonials: Testimonial[];
  loading: boolean;
  updateLocalContent: (key: keyof ContentData, value: any) => void;
  updateLocalService: (id: string, updatedService: Service) => void;
  addLocalTestimonial: (testimonial: Testimonial) => void;
  fetchContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const API_BASE = (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000' : '') + '/api';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentData>({
    hero: {
      headline: "We Craft Digital Experiences That Drive Growth",
      subheadline: "A full-service digital agency helping ambitious brands dominate their markets through strategy, creativity, and technology."
    },
    about: {
      title: "About Nexus Agency",
      description: "Founded in 2018, Nexus Agency has helped over 180 brands achieve remarkable growth through integrated digital strategies. Our team of 24 specialists brings together expertise from marketing, design, development, and analytics."
    },
    contactInfo: {
      email: "hello@nexusagency.com",
      phone: "+1 (415) 555-0192",
      address: "123 Market Street, Suite 400, San Francisco, CA 94105"
    }
  });

  const [services, setServices] = useState<Service[]>([
    {
      _id: "1",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive qualified traffic, increase conversions, and build brand authority.",
      icon: "📈",
      features: ["SEO Optimization", "PPC Campaigns", "Social Media Management", "Content Marketing", "Email Campaigns", "Analytics & Reporting"],
      price: 2499,
      category: "digital-marketing",
      isActive: true
    },
    {
      _id: "2",
      title: "Web Development",
      description: "Bespoke, high-performance websites and web applications built with modern technologies and user-centric design.",
      icon: "💻",
      features: ["Custom Website Design", "E-commerce Solutions", "Web Applications", "CMS Development", "API Integration", "Performance Optimization"],
      price: 3999,
      category: "web-development",
      isActive: true
    },
    {
      _id: "3",
      title: "Brand Strategy",
      description: "Develop a powerful brand identity that resonates with your target audience and differentiates you from competitors.",
      icon: "🎨",
      features: ["Brand Identity Design", "Logo & Visual Assets", "Brand Guidelines", "Messaging & Positioning", "Market Research", "Competitor Analysis"],
      price: 1899,
      category: "branding",
      isActive: true
    },
    {
      _id: "4",
      title: "Growth Consulting",
      description: "Expert strategic guidance to accelerate your business growth through data-driven insights and proven methodologies.",
      icon: "📊",
      features: ["Business Audits", "Growth Roadmaps", "Conversion Optimization", "Customer Journey Mapping", "Team Training", "Ongoing Support"],
      price: 3200,
      category: "consulting",
      isActive: true
    }
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      _id: "1",
      name: "Sarah Chen",
      position: "CEO",
      company: "Lumina Health",
      content: "Nexus transformed our online presence completely. Their digital marketing campaign increased our leads by 340% in just 4 months.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      _id: "2",
      name: "Marcus Rodriguez",
      position: "Founder",
      company: "Vivid Studios",
      content: "The website they built for us is not only beautiful but converts visitors at an incredible rate. Their team is professional and responsive.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      _id: "3",
      name: "Priya Patel",
      position: "Marketing Director",
      company: "Evergreen Co.",
      content: "Working with Nexus was a game changer. Their SEO expertise helped us rank #1 for multiple competitive keywords.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    }
  ]);

  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const [contentRes, servicesRes] = await Promise.all([
        fetch(`${API_BASE}/content`),
        fetch(`${API_BASE}/services`)
      ]);

      if (contentRes.ok) {
        const data = await contentRes.json();
        if (data.success && Object.keys(data.content).length > 0) {
          setContent(prev => ({ ...prev, ...data.content }));
        }
      }

      if (servicesRes.ok) {
        const data = await servicesRes.json();
        if (data.success && data.services.length > 0) {
          setServices(data.services);
        }
      }
    } catch (error) {
      console.warn("Using offline / fallback content. API server might not be running locally yet.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const updateLocalContent = (key: keyof ContentData, value: any) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const updateLocalService = (id: string, updatedService: Service) => {
    setServices(prev => prev.map(s => s._id === id ? updatedService : s));
  };

  const addLocalTestimonial = (testimonial: Testimonial) => {
    setTestimonials(prev => [testimonial, ...prev]);
  };

  return (
    <ContentContext.Provider value={{
      content,
      services,
      testimonials,
      loading,
      updateLocalContent,
      updateLocalService,
      addLocalTestimonial,
      fetchContent
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};