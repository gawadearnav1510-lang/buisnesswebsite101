import { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  readTime: number;
  createdAt: string;
}

const API_BASE = (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000' : '') + '/api';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Marketing', 'Web Design', 'SEO', 'Branding', 'Social Media', 'Analytics'];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/blog`);
        const data = await res.json();
        if (res.ok && data.success) {
          setBlogs(data.blogs);
        } else {
          throw new Error('Failed to load');
        }
      } catch (error) {
        // Fallback simulated blog posts for seamless stand-alone flow
        setBlogs([
          {
            _id: "1",
            title: "The Future of Digital Marketing in 2026",
            slug: "future-of-digital-marketing-2026",
            excerpt: "Discover the emerging trends that will dominate digital marketing this year and how your business can stay ahead.",
            content: "<p>The digital marketing landscape is evolving faster than ever.</p>",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            category: "Marketing",
            author: "Elena Voss",
            readTime: 8,
            createdAt: new Date().toISOString()
          },
          {
            _id: "2",
            title: "How to Build a High-Converting Website in 30 Days",
            slug: "build-high-converting-website-30-days",
            excerpt: "A step-by-step guide to creating a website that not only looks great but actually grows your business.",
            content: "<p>Creating a high-converting website requires more than beautiful design.</p>",
            image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
            category: "Web Design",
            author: "David Kim",
            readTime: 12,
            createdAt: new Date().toISOString()
          },
          {
            _id: "3",
            title: "The Core Blueprint of Conversion Rate Optimization",
            slug: "core-cro-blueprint",
            excerpt: "Maximize the percentage of website visitors who take desired actions. A look at user psychology, messaging, and interface flow.",
            content: "<p>Conversion rate optimization is about removing friction from the user flow.</p>",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
            category: "SEO",
            author: "Christian Vance",
            readTime: 6,
            createdAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(b => b.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 pb-20">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">The Journal</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Expert perspective on strategy, engineering, and scaling.
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
            Stay up to date with modern conversion frameworks, digital advertising trends, and modular frontend architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/15' 
                  : 'bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content State */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse space-y-4">
                <div className="aspect-[4/3] bg-zinc-200 dark:bg-zinc-850 rounded-[24px]"></div>
                <div className="h-6 bg-zinc-200 dark:bg-zinc-850 w-2/3 rounded-lg"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-850 w-full rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-200/50 dark:border-zinc-800/50">
            <p className="text-zinc-500">No matching articles in this category yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog._id} 
                className="group flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex gap-x-4 text-[11px] text-zinc-400">
                      <span className="flex items-center gap-x-1"><Calendar className="w-3.5 h-3.5" /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-x-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime} min read</span>
                    </div>

                    <h3 className="font-bold text-lg md:text-xl group-hover:text-violet-600 transition-colors leading-snug">
                      {blog.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-500 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-zinc-50 dark:border-zinc-850/50 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-x-2.5">
                    <span className="w-6 h-6 bg-violet-100 dark:bg-violet-950 text-[10px] font-bold flex items-center justify-center rounded-full text-violet-600 dark:text-violet-400 uppercase">
                      {blog.author.charAt(0)}
                    </span>
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300">{blog.author}</span>
                  </div>
                  
                  <span className="text-xs font-bold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform flex items-center gap-x-1 cursor-pointer">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;