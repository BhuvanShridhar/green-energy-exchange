
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import PurchaseModal from '../components/marketplace/PurchaseModal';
import ProducerProfileModal from '../components/marketplace/ProducerProfileModal';
import { useEnergyListings } from '../context/EnergyListingsContext';

// Mock data for marketplace
const defaultEnergyListings = [
  {
    id: 1,
    producer: {
      name: 'Rohan Sharma',
      rating: 4.8,
      location: 'Bangalore, Karnataka'
    },
    energyType: 'Solar',
    available: 25.3,
    price: 5.20,
    distance: 3.2,
  },
  {
    id: 2,
    producer: {
      name: 'Aarav Patel',
      rating: 4.6,
      location: 'Ahmedabad, Gujarat'
    },
    energyType: 'Wind',
    available: 18.7,
    price: 4.85,
    distance: 5.7,
  },
  {
    id: 3,
    producer: {
      name: 'Divya Singh',
      rating: 4.9,
      location: 'Pune, Maharashtra'
    },
    energyType: 'Solar',
    available: 32.1,
    price: 5.10,
    distance: 2.4,
  },
  {
    id: 4,
    producer: {
      name: 'Neha Reddy',
      rating: 4.7,
      location: 'Hyderabad, Telangana'
    },
    energyType: 'Hydro',
    available: 15.5,
    price: 6.30,
    distance: 8.1,
  },
  {
    id: 5,
    producer: {
      name: 'Vikram Joshi',
      rating: 4.5,
      location: 'Delhi, NCR'
    },
    energyType: 'Wind',
    available: 28.9,
    price: 4.95,
    distance: 7.3,
  },
  {
    id: 6,
    producer: {
      name: 'Priya Mehta',
      rating: 4.8,
      location: 'Mumbai, Maharashtra'
    },
    energyType: 'Solar',
    available: 12.8,
    price: 5.45,
    distance: 4.6,
  },
];

const Marketplace = () => {
  const { listings: userListings } = useEnergyListings();
  const [energyTypeFilter, setEnergyTypeFilter] = useState<string>('all');
  const [sortOption, setSortOption] = useState<string>('price');
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  // Combine user-added listings with mock listings
  const allListings = [...userListings, ...defaultEnergyListings];
  
  // Filter and sort listings
  const filteredListings = allListings
    .filter(listing => energyTypeFilter === 'all' || listing.energyType.toLowerCase() === energyTypeFilter.toLowerCase())
    .sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      } else if (sortOption === 'distance') {
        return a.distance - b.distance;
      } else if (sortOption === 'available') {
        return b.available - a.available;
      }
      return 0;
    });
  
  const handleBuyNow = (listing: any) => {
    setSelectedListing(listing);
    setIsPurchaseModalOpen(true);
  };
  
  const handleViewProfile = (listing: any) => {
    setSelectedListing(listing);
    setIsProfileModalOpen(true);
  };
  
  return (
    <div className="min-h-screen bg-nexus-gray-light">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Marketplace Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Energy Marketplace
              </h1>
              <p className="text-gray-600">
                Find and purchase renewable energy from local producers
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link to="/producer-listing">
                <Button variant="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M18 12H6" />
                  </svg>
                  List New Energy
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Filters and Sorting */}
          <div className="mb-8">
            <GlassCard className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <label htmlFor="energy-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Energy Type
                    </label>
                    <select
                      id="energy-type"
                      className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                      value={energyTypeFilter}
                      onChange={(e) => setEnergyTypeFilter(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="solar">Solar</option>
                      <option value="wind">Wind</option>
                      <option value="hydro">Hydro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
                      Sort By
                    </label>
                    <select
                      id="sort-by"
                      className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexus-green/50"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="price">Price (Low to High)</option>
                      <option value="distance">Distance (Nearest)</option>
                      <option value="available">Availability (Highest)</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Button variant="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
                    </svg>
                    More Filters
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Showing {filteredListings.length} results
                  </span>
                  
                  <div className="flex items-center space-x-4">
                    <button className="text-sm text-gray-600 hover:text-nexus-green transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                      Grid
                    </button>
                    <button className="text-sm text-gray-600 hover:text-nexus-green transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
                      </svg>
                      List
                    </button>
                    <button className="text-sm text-gray-600 hover:text-nexus-green transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0 0-3 2.1 2.1 0 0 0-3 0L13 8l-8.2-1.8a.8.8 0 0 0-.8 1.2l8 8-8 8a.8.8 0 0 0 0 1.2.8.8 0 0 0 1.2 0l8-8 8 8a.8.8 0 0 0 1.2 0 .8.8 0 0 0 0-1.2l-8-8 8-8a.8.8 0 0 0 1.2-.8Z"/>
                      </svg>
                      Map
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Energy Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <GlassCard key={listing.id} className="p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full mr-3 bg-gray-200"></div>
                    <div>
                      <h3 className="font-medium">{listing.producer.name}</h3>
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-1">{listing.producer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    listing.energyType === 'Solar' 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : listing.energyType === 'Wind'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {listing.energyType}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{listing.producer.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{listing.distance} km away</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Available Energy</span>
                    <span className="text-sm text-nexus-green font-medium">{listing.available} kWh</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-nexus-green rounded-full" 
                      style={{ width: `${Math.min(100, (listing.available / 40) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="block text-gray-600 text-sm">Current Price</span>
                    <span className="text-2xl font-semibold flex items-center">
                      <span className="text-xl">₹</span>{listing.price}
                      <span className="text-sm text-gray-500 ml-1">/kWh</span>
                    </span>
                  </div>
                  <Button variant="primary" onClick={() => handleBuyNow(listing)}>
                    Buy Now
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <button 
                    className="text-nexus-green hover:text-nexus-green-dark text-sm font-medium flex items-center"
                    onClick={() => handleViewProfile(listing)}
                  >
                    View Producer Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </GlassCard>
            ))}
            
            {filteredListings.length === 0 && (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-lg font-medium text-gray-600 mb-2">No energy listings found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or add a new listing</p>
                <Link to="/producer-listing">
                  <Button variant="primary">
                    List New Energy
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modals */}
      {selectedListing && (
        <>
          <PurchaseModal 
            isOpen={isPurchaseModalOpen} 
            onClose={() => setIsPurchaseModalOpen(false)} 
            listing={selectedListing} 
          />
          
          <ProducerProfileModal 
            isOpen={isProfileModalOpen} 
            onClose={() => setIsProfileModalOpen(false)} 
            producer={selectedListing.producer} 
          />
        </>
      )}
    </div>
  );
};

export default Marketplace;
