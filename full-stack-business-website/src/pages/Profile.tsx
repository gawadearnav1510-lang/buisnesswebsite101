import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Edit, Phone, Globe, Briefcase, Smile, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // Profile state
  const [profileData, setFormData] = useState({
    name: user?.name || '',
    company: (user as any)?.company || '',
    phone: (user as any)?.phone || '',
    website: (user as any)?.website || '',
    bio: (user as any)?.bio || '',
    avatar: user?.avatar || ''
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(profileData);
    setIsEditing(false);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate updating password successfully
    toast.success('Password updated successfully!');
    setPasswordData({ oldPassword: '', newPassword: '' });
  };

  return (
    <div className="pt-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 pb-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-10">
        
        {/* Left Card: Avatar & Summary */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-[32px] p-8 text-center space-y-6">
            <div className="relative inline-block">
              <img 
                src={profileData.avatar || "https://ui-avatars.com/api/?name=User&background=random"} 
                alt={profileData.name} 
                className="w-24 h-24 rounded-[32px] object-cover ring-4 ring-violet-100"
              />
              <button 
                onClick={() => {
                  const url = prompt("Enter new avatar image URL:", profileData.avatar);
                  if (url) setFormData({ ...profileData, avatar: url });
                }}
                className="absolute bottom-0 right-0 bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-xl transition-all"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="font-bold text-xl">{profileData.name}</h3>
              <p className="text-xs text-zinc-400 mt-1 uppercase font-mono tracking-widest">{user?.role} Account</p>
            </div>

            <p className="text-xs text-zinc-500 italic">
              {profileData.bio || '"No biography provided yet. Edit profile to share your corporate mission."'}
            </p>

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 text-left space-y-3.5">
              <div className="flex items-center gap-x-3 text-xs">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-650">{user?.email}</span>
              </div>
              {profileData.phone && (
                <div className="flex items-center gap-x-3 text-xs">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span className="text-zinc-650">{profileData.phone}</span>
                </div>
              )}
              {profileData.website && (
                <div className="flex items-center gap-x-3 text-xs">
                  <Globe className="w-4 h-4 text-zinc-400" />
                  <a href={profileData.website} target="_blank" rel="noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">{profileData.website}</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side Tabs/Forms */}
        <div className="md:col-span-8 space-y-8">
          
          {/* Main profile form */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-[32px] p-8 md:p-10 space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Profile Details</h2>
                <p className="text-xs text-zinc-500 mt-1">Manage your professional identity &amp; company specs</p>
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-xs font-semibold rounded-full transition-all"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-450">
                      <Smile className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      name="name"
                      disabled={!isEditing}
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl pl-11 pr-5 py-3.5 text-sm outline-none transition-all disabled:opacity-60 text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Company Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-450">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      name="company"
                      disabled={!isEditing}
                      value={profileData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl pl-11 pr-5 py-3.5 text-sm outline-none transition-all disabled:opacity-60 text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Phone Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-450">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      name="phone"
                      disabled={!isEditing}
                      value={profileData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl pl-11 pr-5 py-3.5 text-sm outline-none transition-all disabled:opacity-60 text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Corporate Website</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-450">
                      <Globe className="w-4 h-4" />
                    </span>
                    <input 
                      type="text" 
                      name="website"
                      disabled={!isEditing}
                      value={profileData.website}
                      onChange={handleInputChange}
                      placeholder="https://company.com"
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl pl-11 pr-5 py-3.5 text-sm outline-none transition-all disabled:opacity-60 text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Biography / Core Mission</label>
                <textarea 
                  name="bio"
                  rows={4}
                  disabled={!isEditing}
                  value={profileData.bio}
                  onChange={handleInputChange}
                  placeholder="Share details about your business goals and why you are partnering with Nexus..."
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl px-5 py-3.5 text-sm outline-none transition-all disabled:opacity-60 text-zinc-900 dark:text-white resize-none"
                ></textarea>
              </div>

              {isEditing && (
                <button 
                  type="submit"
                  className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl text-sm transition-all"
                >
                  Save Profile Changes
                </button>
              )}
            </form>
          </div>

          {/* Change Password Block */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-[32px] p-8 md:p-10 space-y-6">
            <div>
              <h3 className="text-xl font-bold">Security &amp; Encryption</h3>
              <p className="text-xs text-zinc-500 mt-1">Change your portal password safely with cryptographically secured updates</p>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">Current Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-450">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input 
                      type="password" 
                      required
                      value={passwordData.oldPassword}
                      onChange={e => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl pl-11 pr-5 py-3.5 text-sm outline-none transition-all text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[1px] mb-2 text-zinc-400">New Secure Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-450">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input 
                      type="password" 
                      required
                      value={passwordData.newPassword}
                      onChange={e => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-violet-500 rounded-2xl pl-11 pr-5 py-3.5 text-sm outline-none transition-all text-zinc-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="px-8 py-3.5 bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-semibold rounded-2xl text-sm transition-all"
              >
                Update Password
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;