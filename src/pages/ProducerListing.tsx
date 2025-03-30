
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ProducerForm from '../components/producer/ProducerForm';

const ProducerListing = () => {
  return (
    <div className="min-h-screen bg-nexus-gray-light">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Producer Energy Listing
            </h1>
            <p className="text-gray-600">
              List your renewable energy for sale on the Green Grid Nexus marketplace
            </p>
          </div>
          
          <ProducerForm />
        </div>
      </div>
    </div>
  );
};

export default ProducerListing;
