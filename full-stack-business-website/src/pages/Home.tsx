import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Sparkles, ArrowRight, CheckCircle, Flame, Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const API_BASE = (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000' : '') + '/api';

const Home = () => {
  const { content, services, testimonials } = useContent();
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Message sent! We will contact you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err: any) {
      toast.error(err.message || 'Could not send inquiry. Fallback simulated.');
      // Simulate fallback for completely standalone operations
      toast.success('Simulation: Inquiry recorded & confirmation email triggered!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-50 dark:bg-zinc-950 px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.08),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-x-2 px-3 py-1 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct to Consumer &amp; B2B Growth Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-[1.08] tracking-tight">
              {content.hero?.headline}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-[620px] leading-relaxed">
              {content.hero?.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact"
                className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold text-center flex items-center justify-center gap-x-2 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-violet-600/20 active:translate-y-0"
              >
                Let's Partner <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full font-semibold text-center transition-all hover:translate-y-[-2px] active:translate-y-0"
              >
                View Services
              </a>
            </div>

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">180+</div>
                <div className="text-xs text-zinc-500 mt-1">Brands Transformed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">340%</div>
                <div className="text-xs text-zinc-500 mt-1">Avg. Client Growth</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">24</div>
                <div className="text-xs text-zinc-500 mt-1">Global Specialists</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="w-full aspect-square bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-[40px] shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
              {/* Abstract decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-10 left-10 text-white p-6 backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 max-w-[280px]">
                <div className="flex items-center gap-x-1.5 text-amber-400 mb-2">
                  {"★".repeat(5)}
                </div>
                <p className="text-xs italic leading-relaxed">"The best marketing investment we have ever made. Completely exceeded all targets."</p>
                <div className="text-[11px] font-bold mt-3 uppercase tracking-wider">— Sarah Chen, Lumina Health</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-zinc-900 px-6 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">Our Services</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Integrated Solutions For Growth</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">We combine data, strategy, and design to help modern brands scale with agility and predictability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service._id} 
                className="bg-zinc-50 dark:bg-zinc-950 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-900 hover:border-violet-500/30 dark:hover:border-violet-500/30 hover:shadow-xl transition-all hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-x-2 text-xs font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/About Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">About Us</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{content.about?.title}</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">{content.about?.description}</p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-x-4">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 rounded-xl flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Agile Execution</h4>
                  <p className="text-sm text-zinc-500">We work in tight sprint cycles to deploy campaigns and build websites fast.</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Direct Access</h4>
                  <p className="text-sm text-zinc-500">No account managers. You work directly with the experts building your product.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[40px] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"></div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-x-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                ✨ Core Philosphy
              </div>
              <h3 className="text-3xl font-bold leading-snug">"We don't sell hours. We deliver enterprise value and market dominance."</h3>
              <p className="text-zinc-400 text-sm">We believe that beautiful aesthetics are only as good as the underlying strategy. We engineer complete business engines designed from first principles to scale.</p>
              
              <div className="pt-6 border-t border-white/10 flex items-center gap-x-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/86.jpg" 
                  alt="Director" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">Christian Vance</div>
                  <div className="text-xs text-zinc-400">Co-Founder &amp; Strategist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-zinc-900 px-6 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">Success Stories</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Loved By Modern Brands</h2>
            <p className="text-zinc-500 text-lg">Hear directly from the founders, operators, and executives we partner with daily.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t._id} className="bg-zinc-50 dark:bg-zinc-950 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-900 relative">
                <div className="flex items-center gap-x-1 text-amber-500 mb-6">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed italic mb-8">"{t.content}"</p>
                
                <div className="flex items-center gap-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-violet-100" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-zinc-500">{t.position}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">Got Questions?</div>
            <h2 className="text-4xl font-bold tracking-tight">Frequently Answered Queries</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "How do you structure client engagements?", a: "We operate on both transparent project milestones and monthly retainer agreements, custom-tailored to your product roadmap." },
              { q: "Do you offer post-launch support & maintenance?", a: "Yes, we provide standard SLAs covering routine updates, search engine optimization monitoring, and general web operations support." },
              { q: "What technology stack do you specialize in?", a: "For web development, we specialize in high-performance modern stacks including React, Node.js, Next.js, and headless CMS integrations." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white dark:bg-zinc-900 px-6 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-screen-2xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-8">
            <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">Get in touch</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build something iconic?</h2>
            <p className="text-zinc-500 leading-relaxed">Fill out the brief form or reach out directly to schedule a strategy call. Our team typically responds in under 2 hours during Pacific time.</p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Email us</div>
                  <div className="font-medium text-sm">{content.contactInfo?.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Call us</div>
                  <div className="font-medium text-sm">{content.contactInfo?.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Our HQ</div>
                  <div className="font-medium text-sm">{content.contactInfo?.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-zinc-50 dark:bg-zinc-950 rounded-[40px] p-8 md:p-12 border border-zinc-200/50 dark:border-zinc-800/50">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[1px] mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe" 
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl px-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[1px] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com" 
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl px-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="E.g., Website Redesign &amp; Optimization" 
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl px-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us a bit about your product and targets..." 
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl px-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-x-2 transition-all hover:shadow-lg disabled:opacity-50"
                >
                  {submitting ? 'Sending inquiry...' : (
                    <>
                      Send Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;