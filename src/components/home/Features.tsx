
import React from 'react';
import GlassCard from '../ui/GlassCard';

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-5.8m0 0c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          <circle cx="12" cy="7" r="1" />
          <path d="M7 3h10" />
        </svg>
      ),
      title: 'Smart Energy Monitoring',
      description: 'Real-time monitoring of energy production and consumption with smart meter integration.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 11h.01M11 15h.01M16 16h.01M10 10h.01" />
          <path d="M22 12s-4-5-9.5-5S3 12 3 12s4 5 9.5 5 9.5-5 9.5-5z" />
        </svg>
      ),
      title: 'Transparent Marketplace',
      description: 'Browse and compare energy offerings with complete transparency on pricing and sources.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M16 10a2 2 0 0 1 0 4" />
          <path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          <path d="M8 10a2 2 0 1 0 0 4" />
        </svg>
      ),
      title: 'Secure Payments',
      description: 'Safe and reliable payment processing in Indian Rupees (INR) with transaction history.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 12v5h16a2 2 0 0 1 0 4H3v-4" />
        </svg>
      ),
      title: 'Smart Contracts',
      description: 'Automated contracts ensure reliable and trustworthy energy exchanges between users.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M15 8h.01" />
          <path d="M11 8h.01" />
          <path d="M7 8h.01" />
          <path d="M15 12h.01" />
          <path d="M11 12h.01" />
          <path d="M7 12h.01" />
          <path d="M15 16h.01" />
          <path d="M11 16h.01" />
          <path d="M7 16h.01" />
        </svg>
      ),
      title: 'Grid Analytics',
      description: 'Detailed analytics and reporting on energy production, consumption, and savings.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3v4" />
          <path d="M15 7h8" />
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      title: 'Scheduled Transactions',
      description: 'Plan and schedule energy purchases and sales in advance for optimal efficiency.',
    },
  ];

  return (
    <section className="py-20 bg-nexus-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-nexus-green/10 text-nexus-green rounded-full mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Revolutionizing Energy Exchange
          </h2>
          <p className="text-lg text-gray-700">
            Our platform combines cutting-edge technology with user-friendly features to create a seamless energy trading experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-6 bg-gray-50 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
