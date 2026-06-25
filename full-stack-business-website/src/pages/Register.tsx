import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, Lock, User } from 'lucide-react';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      // Errors handled elegantly in context toast
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-[40px] p-8 md:p-12 shadow-xl shadow-zinc-100 dark:shadow-none">
        
        <div className="text-center space-y-3 mb-10">
          <div className="w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center text-white font-bold mx-auto">N</div>
          <h2 className="text-3xl font-bold tracking-tight">Create an account</h2>
          <p className="text-sm text-zinc-500">Scale with digital excellence &amp; tracking</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4.5 pointer-events-none text-zinc-400">
                <User className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe" 
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl pl-12 pr-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4.5 pointer-events-none text-zinc-400">
                <Mail className="w-4 h-4" />
              </span>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com" 
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl pl-12 pr-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4.5 pointer-events-none text-zinc-400">
                <Lock className="w-4 h-4" />
              </span>
              <input 
                type="password" 
                required
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••" 
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-2xl pl-12 pr-5 py-4 text-sm outline-none transition-all text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl flex items-center justify-center gap-x-2 transition-all active:scale-95 disabled:opacity-50"
          >
            {submitting ? 'Registering...' : (
              <>
                Register <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-800 text-center">
          <p className="text-xs text-zinc-500">
            Already have an account? <Link to="/login" className="text-violet-600 dark:text-violet-400 font-semibold hover:underline">Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;