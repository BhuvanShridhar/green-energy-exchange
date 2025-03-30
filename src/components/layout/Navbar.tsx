import React, { useState, useEffect } from 'react';


declare global {
  interface Window {
    ethereum?: any;
  }
}
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers'; 
import { Web3Provider } from '@ethersproject/providers'; 
import Button from '../ui/Button';
import AuthModal from '../auth/AuthModal';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'producer' | 'consumer'>('consumer');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null); 
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(storedUser));
      setUserType(JSON.parse(storedUser).userType);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAuthModal = (mode: 'login' | 'register', type: 'producer' | 'consumer' = 'consumer') => {
    setAuthMode(mode);
    setUserType(type);
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserData(null);
    navigate('/');
  };

  const handleProfileClick = () => {
    if (userData?.userType === 'producer') {
      navigate('/dashboard');
    } else {
      navigate('/profile');
    }
  };

  
  const connectWallet = async () => {
    if (window.ethereum) {
        const provider = new Web3Provider(window.ethereum); 
        await provider.send('eth_requestAccounts', []); 
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setWalletAddress(userAddress); // Set wallet address in state
        console.log('Connected:', userAddress);
      try {
        const provider = new Web3Provider(window.ethereum); // Use Web3Provider from @ethersproject/providers
        await provider.send('eth_requestAccounts', []); // Request accounts
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setWalletAddress(userAddress); // Set wallet address in state
        console.log('Connected:', userAddress);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('Please install MetaMask to connect your wallet');
    }
  };
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-nexus-green to-nexus-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">Green Grid Nexus</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-nexus-green'
                      : 'text-gray-700 hover:text-nexus-green hover:bg-nexus-green/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Wallet + Auth Buttons and Profile Avatar (Desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              {walletAddress ? (
                <span className="text-sm text-gray-600">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
              ) : (
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </Button>
              )}
              {isAuthenticated ? (
                <>
                  <div className="text-sm text-gray-600 mr-2">
                    Hello, {userData?.name || 'User'}
                  </div>
                  <div onClick={handleProfileClick} className="flex items-center text-gray-700 hover:text-nexus-green transition-colors cursor-pointer">
                    <Avatar className="h-8 w-8 border border-gray-200">
                      <AvatarFallback className="bg-nexus-green/10 text-nexus-green">
                        {userData?.name ? userData.name.charAt(0).toUpperCase() : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => handleOpenAuthModal('login')}
                  >
                    Log In
                  </Button>
                  <Button 
                    variant="primary"
                    size="sm"
                    onClick={() => handleOpenAuthModal('register')}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {walletAddress ? (
                <span className="text-sm text-gray-600">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
              ) : (
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </Button>
              )}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nexus-green"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-nexus-green bg-nexus-green/10'
                    : 'text-gray-700 hover:text-nexus-green hover:bg-nexus-green/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200 flex flex-col space-y-2">
              {isAuthenticated ? (
                <Button 
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Log Out
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      handleOpenAuthModal('login');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Log In
                  </Button>
                  <Button 
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      handleOpenAuthModal('register');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        initialUserType={userType}
      />
    </>
  );
};

export default Navbar;
