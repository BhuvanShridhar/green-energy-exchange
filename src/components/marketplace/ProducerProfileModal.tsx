
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Button from "@/components/ui/Button";
import { Star, MapPin, Calendar, BarChart3, Battery, Globe } from "lucide-react";

interface ProducerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  producer: {
    name: string;
    rating: number;
    location: string;
    memberSince?: string;
    totalProduction?: number;
    energyTypes?: string[];
    bio?: string;
    certifications?: string[];
  };
}

const ProducerProfileModal: React.FC<ProducerProfileModalProps> = ({ isOpen, onClose, producer }) => {
  // Set default values for optional props
  const memberSince = producer.memberSince || "January 2023";
  const totalProduction = producer.totalProduction || 3521.8;
  const energyTypes = producer.energyTypes || ["Solar", "Wind"];
  const bio = producer.bio || "Dedicated renewable energy producer committed to sustainable power generation. Equipped with state-of-the-art solar panels and wind turbines that consistently generate excess energy for the community.";
  const certifications = producer.certifications || ["Green Energy Certified", "ISO 50001", "Carbon Neutral"];
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Producer Profile</DialogTitle>
          <DialogDescription>
            Details about the energy producer
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Producer header */}
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-xl font-bold">{producer.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">{producer.name}</h2>
              <div className="flex items-center mt-1">
                <div className="flex items-center text-yellow-500 mr-3">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  <span>{producer.rating}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{producer.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-secondary/30 rounded-lg p-3">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Member Since</span>
              </div>
              <span className="font-medium">{memberSince}</span>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span>Total Production</span>
              </div>
              <span className="font-medium">{totalProduction} kWh</span>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Battery className="h-4 w-4 mr-1" />
                <span>Energy Types</span>
              </div>
              <span className="font-medium">{energyTypes.join(", ")}</span>
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <h3 className="text-sm font-medium mb-2">About</h3>
            <p className="text-sm text-muted-foreground">{bio}</p>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-sm font-medium mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="inline-flex items-center text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full px-3 py-1"
                >
                  <Globe className="h-3 w-3 mr-1" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
          
          {/* Energy production chart placeholder */}
          <div className="border border-border rounded-lg p-4 h-48 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Energy production chart would go here</p>
          </div>
        </div>
        
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
          <Button variant="primary">Contact Producer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProducerProfileModal;
