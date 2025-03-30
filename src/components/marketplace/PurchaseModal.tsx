
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Button from "@/components/ui/Button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { toast } from "sonner";
import PaymentForm, { formSchema } from './PaymentForm';
import PurchaseReceipt from './PurchaseReceipt';
import * as z from "zod";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: {
    id: number;
    producer: {
      name: string;
      rating: number;
      location: string;
    };
    energyType: string;
    available: number;
    price: number;
    distance: number;
  };
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose, listing }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("upi");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      paymentMethod: "upi",
      paymentDetails: ""
    },
  });

  const totalPrice = listing.price * quantity;
  const platformFee = totalPrice * 0.02;
  const totalAmount = totalPrice + platformFee;
  
  const handlePurchase = () => {
    setProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate random transaction ID
      const randomId = Math.random().toString(36).substring(2, 12).toUpperCase();
      setTransactionId(randomId);
      setProcessingPayment(false);
      setShowReceipt(true);
      toast.success("Payment successful! Energy purchased.");
    }, 1500);
  };
  
  const handleClose = () => {
    setShowReceipt(false);
    onClose();
  };
  
  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value);
    form.setValue("paymentMethod", value as "upi" | "card" | "netbanking" | "wallet");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {!showReceipt ? (
          <>
            <DialogHeader>
              <DialogTitle>Purchase Energy</DialogTitle>
              <DialogDescription>
                Customize your energy purchase from {listing.producer.name}
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form className="space-y-6 py-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Energy Quantity (kWh)</h3>
                    <div className="flex items-center space-x-4">
                      <Slider 
                        value={[quantity]}
                        min={0.1}
                        max={Math.min(listing.available, 100)}
                        step={0.1}
                        onValueChange={(values) => setQuantity(values[0])}
                        className="flex-1"
                      />
                      <span className="bg-secondary py-1 px-3 rounded-md w-16 text-center">
                        {quantity.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                      <span>0.1 kWh</span>
                      <span>{Math.min(listing.available, 100)} kWh</span>
                    </div>
                  </div>
                  
                  <PaymentForm 
                    form={form} 
                    selectedPaymentMethod={selectedPaymentMethod}
                    handlePaymentMethodChange={handlePaymentMethodChange}
                  />
                </div>
                
                <div className="rounded-lg bg-secondary/50 p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Price per kWh</span>
                    <span>₹{listing.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Quantity</span>
                    <span>{quantity.toFixed(1)} kWh</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Platform fee (2%)</span>
                    <span>₹{platformFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border mt-2 pt-2 flex justify-between font-medium">
                    <span>Total amount</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </form>
            </Form>
            
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button 
                onClick={handlePurchase} 
                disabled={processingPayment}
              >
                {processingPayment ? 'Processing...' : 'Complete Payment'}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 mr-2">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                Payment Successful
              </DialogTitle>
              <DialogDescription>
                Your purchase has been completed successfully
              </DialogDescription>
            </DialogHeader>
            
            <PurchaseReceipt
              transactionId={transactionId}
              selectedPaymentMethod={selectedPaymentMethod}
              producer={listing.producer}
              energyType={listing.energyType}
              quantity={quantity}
              price={listing.price}
              platformFee={platformFee}
              totalAmount={totalAmount}
              handleClose={handleClose}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
