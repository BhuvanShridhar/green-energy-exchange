
import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-nexus-gray-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4">
            Peer-to-Peer Energy Trading
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Role in the Energy Ecosystem
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Green Grid Nexus enables direct energy exchange between local producers and consumers in India, 
            creating a more sustainable and efficient energy ecosystem.
          </p>
        </div>

        {/* User Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden shadow-lg border-0 bg-white">
            <div className="bg-nexus-green text-white p-4">
              <h3 className="text-xl font-bold">As an Energy Producer</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-nexus-green/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Monitor your energy production on the dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-green/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>List your excess renewable energy for sale</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-green/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Set your own prices in Indian Rupees (INR)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-green/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Track your sales and earnings in real-time</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/dashboard">
                  <Button variant="primary">Start Selling Energy</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg border-0 bg-white">
            <div className="bg-nexus-blue text-white p-4">
              <h3 className="text-xl font-bold">As an Energy Consumer</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-nexus-blue/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Browse available energy on the marketplace</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-blue/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Purchase renewable energy directly from local producers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-blue/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Pay securely in Indian Rupees (INR)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-nexus-blue/10 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Track your energy consumption and savings</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/marketplace">
                  <Button variant="primary">Browse the Marketplace</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How it Works Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">How the Process Works</h3>
          
          <div className="relative">
            {/* Progress bar */}
            <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gray-200">
              <div className="absolute left-0 top-0 bottom-0 bg-nexus-green w-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-nexus-green rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-bold text-white">01</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Register & Connect</h4>
                <p className="text-gray-600">Create an account as a producer or consumer and connect your smart meter.</p>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-nexus-green rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-bold text-white">02</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Produce or Browse</h4>
                <p className="text-gray-600">List your excess energy or browse available energy in the marketplace.</p>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-nexus-green rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-bold text-white">03</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Secure Transaction</h4>
                <p className="text-gray-600">Complete secure transactions with payments in Indian Rupees (INR).</p>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-nexus-green rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-bold text-white">04</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Track & Monitor</h4>
                <p className="text-gray-600">Track your energy production, consumption, and financial details.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to join India's peer-to-peer renewable energy network? 
            Start trading clean energy today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/marketplace">
              <Button size="lg">
                Explore Marketplace
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
