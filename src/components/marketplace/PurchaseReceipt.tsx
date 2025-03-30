
import React from 'react';
import { Button } from "@/components/ui/buttonShadcn";
import { Check, Download } from "lucide-react";
import { toast } from "sonner";

interface PurchaseReceiptProps {
  transactionId: string;
  selectedPaymentMethod: string;
  producer: {
    name: string;
  };
  energyType: string;
  quantity: number;
  price: number;
  platformFee: number;
  totalAmount: number;
  handleClose: () => void;
}

const PurchaseReceipt: React.FC<PurchaseReceiptProps> = ({
  transactionId,
  selectedPaymentMethod,
  producer,
  energyType,
  quantity,
  price,
  platformFee,
  totalAmount,
  handleClose
}) => {
  const downloadReceipt = () => {
    // In a real app, this would generate a PDF or print the receipt
    toast.success("Receipt downloaded successfully");
  };

  return (
    <div className="space-y-6 py-4">
      <div className="bg-muted/50 rounded-lg p-4 space-y-3 border border-border">
        <div className="text-center mb-3">
          <h3 className="text-lg font-semibold">PAYMENT RECEIPT</h3>
          <p className="text-muted-foreground text-sm">Green Grid Nexus</p>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Transaction ID</span>
          <span className="font-mono">{transactionId}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Date & Time</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Payment Method</span>
          <span className="capitalize">{selectedPaymentMethod}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Producer</span>
          <span>{producer.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Energy Type</span>
          <span>{energyType}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Quantity</span>
          <span>{quantity.toFixed(1)} kWh</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Price per kWh</span>
          <span>₹{price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Platform Fee (2%)</span>
          <span>₹{platformFee.toFixed(2)}</span>
        </div>
        <div className="pt-2 border-t border-border flex justify-between font-medium">
          <span>Total amount</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-900/30">
        <div className="flex items-center">
          <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
          <p className="text-green-800 dark:text-green-400 text-sm font-medium">
            Energy purchase confirmed! The energy will be transferred to your account within the next 10 minutes.
          </p>
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        A receipt has been sent to your registered email address
      </div>
      
      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline" onClick={downloadReceipt} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Receipt
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </div>
  );
};

export default PurchaseReceipt;
