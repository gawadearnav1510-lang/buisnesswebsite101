import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-x-3 mb-6">
              <div className="w-9 h-9 bg-white rounded-3xl flex items-center justify-center text-zinc-950 font-bold">N</div>
              <span className="text-white text-3xl font-semibold tracking-tighter">NEXUS</span>
            </div>
            <p className="text-sm max-w-[210px] leading-relaxed">Crafting digital excellence since 2018.</p>
            
            <div className="flex gap-x-4 mt-8">
              {/* Custom SVG Twitter */}
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-violet-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Custom SVG LinkedIn */}
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-violet-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>
              {/* Custom SVG Instagram */}
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-violet-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-[1px] font-mono mb-6 text-white/70">Company</div>
            <div className="space-y-3 text-sm">
              <Link to="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link to="/blog" className="block hover:text-white transition-colors">Journal</Link>
              <a href="#" className="block hover:text-white transition-colors">Careers</a>
              <a href="#" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-[1px] font-mono mb-6 text-white/70">Services</div>
            <div className="space-y-3 text-sm">
              <Link to="/services" className="block hover:text-white transition-colors">Digital Marketing</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Web Development</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Brand Strategy</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Growth Consulting</Link>
            </div>
          </div>

          <div>
            <div className="uppercase text-xs tracking-[1px] font-mono mb-6 text-white/70">Legal</div>
            <div className="space-y-3 text-sm">
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="block hover:text-white transition-colors">Trust &amp; Safety</a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="bg-zinc-900 rounded-3xl p-7">
              <div className="text-white text-sm mb-2">Stay in the loop</div>
              <p className="text-xs leading-snug mb-6">Monthly insights, case studies, and industry reports delivered to your inbox.</p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="bg-zinc-800 border border-zinc-700 focus:border-white text-sm px-5 py-3.5 rounded-l-3xl flex-1 outline-none text-white"
                />
                <button className="bg-white text-zinc-950 px-7 rounded-r-3xl text-sm font-semibold hover:bg-zinc-200 transition-colors">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-y-3 text-xs">
          <div>© {new Date().getFullYear()} Nexus Agency. All rights reserved.</div>
          <div className="flex items-center gap-x-5">
            <a href="#" className="hover:text-white flex items-center gap-x-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5" /> hello@nexusagency.com
            </a>
            <div>San Francisco, California</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;