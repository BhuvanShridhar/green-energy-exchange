
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import AuthModal from '../auth/AuthModal';

interface HeroProps {
  onOpenAuthModal: (mode: 'login' | 'register', userType: 'producer' | 'consumer') => void;
}

const Hero = ({ onOpenAuthModal }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 lg:pt-40 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full max-w-lg h-96 bg-nexus-green/10 rounded-full blur-3xl top-10 -left-20 animate-pulse-slow"></div>
        <div className="absolute w-full max-w-lg h-96 bg-nexus-blue/10 rounded-full blur-3xl bottom-10 -right-20 animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4">
              Eco-friendly Energy Exchange
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Decentralized <span className="nexus-gradient-text">Renewable Energy</span> Marketplace
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Connect directly with local renewable energy producers, cut out the middleman, and reduce your carbon footprint while saving money. Trade energy peer-to-peer on our secure blockchain platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => onOpenAuthModal('register', 'producer')}
              >
                Join as Producer
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onOpenAuthModal('register', 'consumer')}
              >
                Join as Consumer
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            {/* Energy exchange illustration */}
            <div className="relative">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-nexus-green/80 to-nexus-blue/80 p-6">
                <img 
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Renewable energy solar panels" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-nexus-green/20 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-nexus-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-medium">Solar Energy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available</span>
                  <span className="font-medium">25.3 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">₹5.20/kWh</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-nexus-blue/20 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-nexus-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.7 7.7C19.3 9.3 20 11.1 20 13C20 14.9 19.3 16.7 17.7 18.3C16.1 19.9 14.3 20.6 12.4 20.6C10.5 20.6 8.70002 19.9 7.10002 18.3C5.50002 16.7 4.80002 14.9 4.80002 13C4.80002 11.1 5.50002 9.3 7.10002 7.7C8.70002 6.1 10.5 5.4 12.4 5.4C14.3 5.4 16.1 6.1 17.7 7.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5 13.7C8.90002 15 8.90002 9 12.5 10.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.4 13.7C16 15 16 9 12.4 10.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.9 4L12.4 5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.90002 4L12.4 5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.4 20.6V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.90002 22L12.4 20.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.9 22L12.4 20.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-medium">Wind Energy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available</span>
                  <span className="font-medium">18.7 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">₹4.85/kWh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
