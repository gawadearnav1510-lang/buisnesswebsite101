import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 fixed w-full z-50">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-x-16">
            <Link to="/" className="flex items-center gap-x-2">
              <div className="w-8 h-8 bg-violet-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">N</div>
              <div>
                <span className="font-semibold text-2xl tracking-tighter text-zinc-900 dark:text-white">NEXUS</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
              <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</Link>
              <Link to="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Services</Link>
              <Link to="/pricing" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Pricing</Link>
              <Link to="/blog" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Blog</Link>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-x-3">
                <div 
                  onClick={() => navigate('/profile')}
                  className="flex items-center gap-x-2.5 cursor-pointer"
                >
                  <img 
                    src={user?.avatar} 
                    alt={user?.name}
                    className="w-8 h-8 rounded-2xl object-cover ring-2 ring-violet-200 dark:ring-violet-900"
                  />
                  <div className="hidden md:block">
                    <div className="text-sm font-medium">{user?.name}</div>
                    <div className="text-[10px] text-emerald-500 -mt-0.5">Online</div>
                  </div>
                </div>
                
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="px-4 py-1.5 text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-2xl hover:bg-amber-200 transition-colors"
                  >
                    ADMIN
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-x-2 text-sm font-medium text-zinc-500 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-x-3">
                <Link 
                  to="/login"
                  className="px-5 py-2 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-3xl transition-all active:scale-95"
                >
                  Log in
                </Link>
                <Link 
                  to="/register"
                  className="px-6 py-2 text-sm font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 rounded-3xl transition-all active:scale-95"
                >
                  Get Started
                </Link>
              </div>
            )}

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t dark:border-zinc-800 flex flex-col gap-y-4 text-lg">
            <Link to="/" onClick={() => setIsOpen(false)} className="py-2">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="py-2">About Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="py-2">Services</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="py-2">Pricing</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="py-2">Insights</Link>
            
            {!isAuthenticated && (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="py-3 text-center border rounded-3xl">Sign In</Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="py-3 text-center bg-zinc-900 text-white rounded-3xl">Create Account</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;