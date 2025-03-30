
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Globe, Leaf, LightbulbOff, Shield, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-nexus-gray-light">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Green Grid Nexus aims to revolutionize energy distribution by creating a decentralized marketplace 
            that empowers communities and reduces carbon footprint.
          </p>
        </div>
        
        {/* Vision Section */}
        <GlassCard className="p-8 mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="w-full sm:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-nexus-green/20 to-nexus-green flex items-center justify-center">
                <Globe className="w-24 h-24 text-nexus-green" />
              </div>
            </div>
            <div className="w-full sm:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We envision a world where energy distribution is democratized, empowering individuals to 
                become both consumers and producers. By creating a peer-to-peer marketplace, we're building 
                a more sustainable and resilient energy ecosystem.
              </p>
              <p className="text-gray-600">
                Our platform leverages cutting-edge technology to connect local energy producers with consumers, 
                reducing transmission losses and promoting renewable energy adoption.
              </p>
            </div>
          </div>
        </GlassCard>
        
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="bg-nexus-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Leaf className="text-nexus-green h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmental responsibility in everything we do, promoting renewable energy 
                sources and reducing carbon emissions.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="bg-nexus-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-nexus-green h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in the power of local communities and their ability to shape a sustainable energy future
                through collaboration and shared resources.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="bg-nexus-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-nexus-green h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Trust & Security</h3>
              <p className="text-gray-600">
                We ensure transparent and secure transactions through advanced technology, giving our users 
                peace of mind with every interaction.
              </p>
            </GlassCard>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Why Choose Green Grid Nexus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="mt-1 bg-nexus-green/10 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <Zap className="text-nexus-green h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reduced Energy Costs</h3>
                <p className="text-gray-600">
                  By buying directly from local producers, consumers can access energy at competitive rates 
                  without the markup from traditional utilities.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-nexus-green/10 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <Leaf className="text-nexus-green h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Environmental Impact</h3>
                <p className="text-gray-600">
                  Our platform prioritizes renewable energy sources, helping to reduce carbon emissions and 
                  combat climate change.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-nexus-green/10 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <Users className="text-nexus-green h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Community Empowerment</h3>
                <p className="text-gray-600">
                  We enable communities to become self-sufficient in their energy needs, strengthening local 
                  economies and resilience.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-nexus-green/10 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <LightbulbOff className="text-nexus-green h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Grid Independence</h3>
                <p className="text-gray-600">
                  By facilitating peer-to-peer energy trading, we help reduce reliance on centralized grid systems, 
                  increasing energy security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
