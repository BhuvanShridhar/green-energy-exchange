import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { toast } from "sonner";
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const location = useLocation();
  const userDataFromAuth = location.state?.userData || {};
  
  const [userData, setUserData] = useState({
    name: userDataFromAuth.name || '',
    email: userDataFromAuth.email || '',
    location: userDataFromAuth.location || '',
    userType: userDataFromAuth.userType || 'consumer',
    joinedDate: userDataFromAuth.joinedDate || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    profileImage: userDataFromAuth.profileImage || null,
  });

  const handleSaveChanges = () => {
    setUserData({
      ...userData,
    });
    toast.success("Profile updated successfully!");
  };

  useEffect(() => {
    if (location.state?.userData) {
      setUserData(prevData => ({
        ...prevData,
        ...location.state.userData,
      }));
    }
  }, [location.state?.userData]);

  return (
    <div className="min-h-screen bg-nexus-gray-light">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              My Profile
            </h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <GlassCard className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-nexus-green/10 rounded-full flex items-center justify-center mb-4">
                    {userData.profileImage ? (
                      <img 
                        src={userData.profileImage} 
                        alt={userData.name} 
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-nexus-green">
                        {userData.name ? userData.name.charAt(0) : '?'}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-1">{userData.name || 'User Name'}</h2>
                  <p className="text-gray-600 mb-2">{userData.email || 'email@example.com'}</p>
                  
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4">
                    {userData.userType === 'producer' ? 'Energy Producer' : 'Energy Consumer'}
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-6">
                    Member since {userData.joinedDate}
                  </p>
                  
                  <Button variant="outline" fullWidth>
                    Upload Photo
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-medium mb-4">Account Navigation</h3>
                  
                  <nav className="space-y-1">
                    <a href="#personal-info" className="flex items-center px-3 py-2 text-sm rounded-md bg-nexus-green/10 text-nexus-green font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Personal Information
                    </a>
                    
                    <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-nexus-green/5 hover:text-nexus-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Energy Preferences
                    </a>
                    
                    <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-nexus-green/5 hover:text-nexus-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      Transaction History
                    </a>
                    
                    <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-nexus-green/5 hover:text-nexus-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Connected Devices
                    </a>
                    
                    <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-nexus-green/5 hover:text-nexus-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      Security Settings
                    </a>
                  </nav>
                </div>
              </GlassCard>
            </div>
            
            <div className="lg:col-span-2">
              <GlassCard className="p-6" id="personal-info">
                <h3 className="text-lg font-medium text-gray-700 mb-6">Personal Information</h3>
                
                <form onSubmit={(e) => { e.preventDefault(); handleSaveChanges(); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        defaultValue={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        defaultValue={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        defaultValue={userData.location}
                        onChange={(e) => setUserData({...userData, location: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                      placeholder="Tell us a bit about yourself..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </GlassCard>
              
              {userData.userType === 'producer' && (
                <GlassCard className="p-6 mt-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-6">Producer Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="energyType" className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Energy Type
                      </label>
                      <select
                        id="energyType"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        defaultValue="solar"
                      >
                        <option value="solar">Solar</option>
                        <option value="wind">Wind</option>
                        <option value="hydro">Hydro</option>
                        <option value="biomass">Biomass</option>
                        <option value="geothermal">Geothermal</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                        Production Capacity (kWh)
                      </label>
                      <input
                        id="capacity"
                        type="number"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        placeholder="500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="defaultRate" className="block text-sm font-medium text-gray-700 mb-1">
                        Default Rate (₹/kWh)
                      </label>
                      <input
                        id="defaultRate"
                        type="number"
                        step="0.01"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                        placeholder="5.20"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => toast.success("Producer settings updated!")}>
                        Update Settings
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
