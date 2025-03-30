
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, IndianRupee, Landmark, Wallet } from "lucide-react";
import { UseFormReturn } from 'react-hook-form';
import * as z from "zod";

const formSchema = z.object({
  quantity: z.number().min(0.1).max(100),
  paymentMethod: z.enum(["upi", "card", "netbanking", "wallet"]),
  paymentDetails: z.string().optional()
});

type PaymentFormProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  selectedPaymentMethod: string;
  handlePaymentMethodChange: (value: string) => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  form, 
  selectedPaymentMethod, 
  handlePaymentMethodChange 
}) => {
  return (
    <div>
      <h3 className="font-medium mb-3">Payment Method</h3>
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={handlePaymentMethodChange}
                defaultValue={field.value}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="upi"
                    id="upi"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="upi"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <IndianRupee className="mb-3 h-6 w-6" />
                    <span className="text-sm font-medium">UPI</span>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CreditCard className="mb-3 h-6 w-6" />
                    <span className="text-sm font-medium">Card</span>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem
                    value="netbanking"
                    id="netbanking"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="netbanking"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Landmark className="mb-3 h-6 w-6" />
                    <span className="text-sm font-medium">Net Banking</span>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem
                    value="wallet"
                    id="wallet"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="wallet"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Wallet className="mb-3 h-6 w-6" />
                    <span className="text-sm font-medium">Wallet</span>
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {selectedPaymentMethod === "upi" && (
        <div className="mt-4">
          <FormField
            control={form.control}
            name="paymentDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UPI ID</FormLabel>
                <FormControl>
                  <Input placeholder="yourname@upi" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your UPI ID for payment
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
      
      {selectedPaymentMethod === "card" && (
        <div className="space-y-3 mt-4">
          <FormField
            control={form.control}
            name="paymentDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input placeholder="1234 5678 9012 3456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FormLabel>Expiry Date</FormLabel>
              <Input placeholder="MM/YY" />
            </div>
            <div>
              <FormLabel>CVV</FormLabel>
              <Input placeholder="123" maxLength={3} />
            </div>
          </div>
        </div>
      )}
      
      {selectedPaymentMethod === "netbanking" && (
        <div className="mt-4">
          <FormField
            control={form.control}
            name="paymentDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Bank</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    {...field}
                  >
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
      
      {selectedPaymentMethod === "wallet" && (
        <div className="mt-4">
          <FormField
            control={form.control}
            name="paymentDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Wallet</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    {...field}
                  >
                    <option value="">Select your wallet</option>
                    <option value="paytm">Paytm</option>
                    <option value="phonepe">PhonePe</option>
                    <option value="amazonpay">Amazon Pay</option>
                    <option value="mobikwik">MobiKwik</option>
                    <option value="freecharge">Freecharge</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
export { formSchema };
