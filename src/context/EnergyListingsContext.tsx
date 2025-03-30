
import React, { createContext, useContext, useState } from 'react';

// Define the shape of an energy listing
export interface EnergyListing {
  id: number;
  producer: {
    name: string;
    rating: number;
    location: string;
  };
  energyType: string;
  available: number;
  price: number;
  description?: string;
  distance: number;
  location: string;
  image?: string;
}

// Define the shape of the context
interface EnergyListingsContextProps {
  listings: EnergyListing[];
  addListing: (listing: Omit<EnergyListing, 'id'>) => void;
  removeListing: (id: number) => void;
}

// Sample initial listings
const initialListings: EnergyListing[] = [
  {
    id: 1,
    producer: {
      name: "SolarTech Solutions",
      rating: 4.8,
      location: "Bangalore"
    },
    energyType: "Solar",
    available: 45.7,
    price: 5.20,
    description: "Clean solar energy generated from our state-of-the-art solar farm with high efficiency panels.",
    distance: 3.2,
    location: "Whitefield, Bangalore",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 2,
    producer: {
      name: "WindPower Generators",
      rating: 4.6,
      location: "Chennai"
    },
    energyType: "Wind",
    available: 32.8,
    price: 4.85,
    description: "Sustainable wind energy from our offshore wind farms, harnessing coastal winds for clean power.",
    distance: 5.7,
    location: "Coastal Area, Chennai",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 3,
    producer: {
      name: "Green Biomass Energy",
      rating: 4.3,
      location: "Delhi"
    },
    energyType: "Biomass",
    available: 28.5,
    price: 4.50,
    description: "Eco-friendly biomass energy derived from agricultural waste and sustainable organic materials.",
    distance: 4.1,
    location: "South Delhi",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Create the context
const EnergyListingsContext = createContext<EnergyListingsContextProps | undefined>(undefined);

// Provider component
export const EnergyListingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listings, setListings] = useState<EnergyListing[]>(initialListings);

  const addListing = (listing: Omit<EnergyListing, 'id'>) => {
    const newListing = {
      ...listing,
      id: Date.now(),
    };
    setListings(prev => [...prev, newListing]);
  };

  const removeListing = (id: number) => {
    setListings(prev => prev.filter(listing => listing.id !== id));
  };

  return (
    <EnergyListingsContext.Provider value={{ listings, addListing, removeListing }}>
      {children}
    </EnergyListingsContext.Provider>
  );
};

// Custom hook to use the energy listings context
export const useEnergyListings = () => {
  const context = useContext(EnergyListingsContext);
  if (context === undefined) {
    throw new Error('useEnergyListings must be used within an EnergyListingsProvider');
  }
  return context;
};
