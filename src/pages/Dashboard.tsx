import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';

// Mock data for dashboard
const producerData = {
  totalProduced: 245.8,
  totalSold: 182.5,
  totalEarnings: 948.5,
  available: 63.3,
  recentTransactions: [
    { id: 1, buyer: 'Priya Sharma', amount: 10.2, price: 5.2, total: 53.04, date: '2023-06-15' },
    { id: 2, buyer: 'Rahul Verma', amount: 8.5, price: 5.1, total: 43.35, date: '2023-06-13' },
    { id: 3, buyer: 'Ananya Patel', amount: 12.0, price: 5.3, total: 63.60, date: '2023-06-10' },
  ],
  energyProduction: [
    { date: 'Mon', value: 28.5 },
    { date: 'Tue', value: 32.1 },
    { date: 'Wed', value: 35.8 },
    { date: 'Thu', value: 30.2 },
    { date: 'Fri', value: 34.7 },
    { date: 'Sat', value: 42.3 },
    { date: 'Sun', value: 40.2 },
  ],
};

const Dashboard = () => {
  const [userType] = useState<'producer' | 'consumer'>('producer');
  const navigate = useNavigate();
  
  const handleListNewEnergy = () => {
    navigate('/producer-listing');
  };
  
  return (
    <div className="min-h-screen bg-nexus-gray-light">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Welcome, Rohan Sharma
              </h1>
              <p className="text-gray-600">
                {userType === 'producer' 
                  ? 'Manage your energy production and sales' 
                  : 'Find and purchase renewable energy'}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" onClick={handleListNewEnergy}>
                {userType === 'producer' ? 'List New Energy' : 'Browse Marketplace'}
              </Button>
              <Button variant="outline">
                View Profile
              </Button>
            </div>
          </div>
          
          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-700">Total Produced</h3>
                <div className="w-10 h-10 bg-nexus-green/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8m0 0l-4-4m4 4l4-4" />
                    <path d="M12 14v8m0 0l-4-4m4 4l4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{producerData.totalProduced}</span>
                <span className="text-gray-600 ml-2 mb-1">kWh</span>
              </div>
              <div className="mt-2 flex items-center text-xs">
                <span className="text-nexus-green flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  8.5% from last week
                </span>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-700">Total Sold</h3>
                <div className="w-10 h-10 bg-nexus-blue/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8c-2.8 0-5 1.6-5 4s2.2 4 5 4c2.8 0 5-1.6 5-4s-2.2-4-5-4z" />
                    <path d="M17.9 15c.6-.9 1.1-2 1.1-3s-.5-2.1-1.1-3" />
                    <path d="M6 15c-.6-.9-1-2-1-3s.4-2.1 1-3" />
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                  </svg>
                </div>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{producerData.totalSold}</span>
                <span className="text-gray-600 ml-2 mb-1">kWh</span>
              </div>
              <div className="mt-2 flex items-center text-xs">
                <span className="text-nexus-green flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  12.3% from last week
                </span>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-700">Total Earnings</h3>
                <div className="w-10 h-10 bg-nexus-green/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>
              <div className="flex items-end">
                <span className="text-lg mr-1">₹</span>
                <span className="text-3xl font-bold">{producerData.totalEarnings}</span>
              </div>
              <div className="mt-2 flex items-center text-xs">
                <span className="text-nexus-green flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  15.7% from last week
                </span>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-700">Available Energy</h3>
                <div className="w-10 h-10 bg-nexus-blue/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nexus-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.25 8.75H1.75M18 16.25H6M13.75 3v6.5M10.25 20.5V14" />
                  </svg>
                </div>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold">{producerData.available}</span>
                <span className="text-gray-600 ml-2 mb-1">kWh</span>
              </div>
              <div className="mt-2 flex items-center text-xs">
                <span className="text-red-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6-6 6" />
                  </svg>
                  4.2% from last week
                </span>
              </div>
            </GlassCard>
          </div>
          
          {/* Energy Production Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 lg:col-span-2">
              <h3 className="text-lg font-medium text-gray-700 mb-6">Energy Production</h3>
              <div className="h-64 flex items-end">
                {producerData.energyProduction.map((day, index) => (
                  <div 
                    key={index} 
                    className="flex-1 flex flex-col items-center justify-end h-full"
                  >
                    <div 
                      className="w-full mx-1 max-w-[30px] bg-gradient-to-t from-nexus-green to-nexus-blue rounded-t-md"
                      style={{ height: `${(day.value / 50) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-2">{day.date}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-700">Quick Actions</h3>
              </div>
              
              <div className="space-y-4">
                <Button variant="primary" fullWidth className="justify-start" onClick={handleListNewEnergy}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M18 12H6" />
                  </svg>
                  List New Energy
                </Button>
                
                <Button variant="outline" fullWidth className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 1 2 2h14a2 2 0 0 1 2-2v-7" />
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
                  </svg>
                  Edit Smart Meter Settings
                </Button>
                
                <Button variant="outline" fullWidth className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                  Download Energy Report
                </Button>
                
                <Button variant="outline" fullWidth className="justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16 16l5 5-5 5" />
                    <path d="M9 20H4a2 2 0 0 1-2-2v-4" />
                    <path d="M14 2H6m4 0v6M3 6l7 7 7-7" />
                  </svg>
                  Manage Payment Methods
                </Button>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link to="/marketplace" className="text-nexus-green hover:text-nexus-green-dark flex items-center text-sm font-medium">
                    <span>View Marketplace</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Recent Transactions */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-700">Recent Transactions</h3>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {producerData.recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                          <span className="font-medium">{transaction.buyer}</span>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        {transaction.amount} kWh
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        ₹{transaction.price}/kWh
                      </td>
                      <td className="py-4 whitespace-nowrap font-medium">
                        ₹{transaction.total}
                      </td>
                      <td className="py-4 whitespace-nowrap text-gray-600">
                        {transaction.date}
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

