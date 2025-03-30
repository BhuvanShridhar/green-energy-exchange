
import React, { useState } from 'react';
import { toast } from "sonner";
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'register';
  initialUserType?: 'producer' | 'consumer';
}

const AuthModal = ({ isOpen, onClose, initialMode, initialUserType = 'consumer' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [userType, setUserType] = useState<'producer' | 'consumer'>(initialUserType);
  const navigate = useNavigate();
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Prepare user data to store
      const userData = {
        name: name || (mode === 'login' ? email.split('@')[0] : ''),
        email,
        location,
        userType,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        profileImage: null,
      };
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      if (mode === 'login') {
        toast.success("Successfully logged in!");
      } else {
        toast.success("Account created successfully!");
      }
      
      onClose();
      
      // Redirect based on user type
      if (userType === 'producer') {
        navigate('/dashboard');
      } else {
        navigate('/marketplace');
      }
      
      // Reset form
      setEmail('');
      setPassword('');
      setName('');
      setLocation('');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fade-up">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Header */}
        <div className="p-6 pb-0">
          <h2 className="text-2xl font-bold mb-1">
            {mode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-gray-600 mb-6">
            {mode === 'login' 
              ? 'Sign in to access your Green Grid Nexus account' 
              : 'Join the sustainable energy revolution today'}
          </p>
        </div>
        
        {/* Tabs (Login/Register) */}
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors
              ${mode === 'login' 
                ? 'text-nexus-green border-b-2 border-nexus-green' 
                : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setMode('login')}
          >
            Log In
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors
              ${mode === 'register' 
                ? 'text-nexus-green border-b-2 border-nexus-green' 
                : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {mode === 'register' && (
            <>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am a
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`p-3 rounded-lg border ${
                      userType === 'producer'
                        ? 'bg-nexus-green text-white border-nexus-green'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setUserType('producer')}
                  >
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-medium">Producer</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`p-3 rounded-lg border ${
                      userType === 'consumer'
                        ? 'bg-nexus-blue text-white border-nexus-blue'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setUserType('consumer')}
                  >
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Consumer</span>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                  placeholder="Your city or locality"
                />
              </div>
            </>
          )}
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              {mode === 'login' && (
                <a href="#" className="text-sm text-nexus-blue hover:text-nexus-blue-dark">
                  Forgot password?
                </a>
              )}
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
              placeholder={mode === 'login' ? 'Enter your password' : 'Create a password'}
            />
          </div>
          
          <Button
            type="submit"
            fullWidth
            disabled={isSubmitting}
            className={isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              mode === 'login' ? 'Sign In' : 'Create Account'
            )}
          </Button>
          
          <div className="mt-6 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
              </svg>
              Facebook
            </button>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              className="ml-1 font-medium text-nexus-green hover:text-nexus-green-dark"
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
