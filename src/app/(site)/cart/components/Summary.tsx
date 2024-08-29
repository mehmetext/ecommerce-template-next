import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Tag } from "lucide-react";
import React from "react";

export default function Summary() {
  return (
    <div className="flex flex-col gap-6 p-6 border border-border rounded-3xl">
      <h3 className="text-xl font-bold">Order Summary</h3>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="opacity-60">Subtotal</p>
          <p className="font-bold">$565</p>
        </div>
        <div className="flex justify-between">
          <p className="opacity-60">Discount (-20%)</p>
          <p className="font-bold text-destructive">-$113</p>
        </div>
        <div className="flex justify-between">
          <p className="opacity-60">Delivery Fee</p>
          <p className="font-bold">$15</p>
        </div>
        <div className="h-px bg-border" />
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">$467</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Input
          icon={<Tag className="w-5 h-5" />}
          containerClassName="flex-1"
          placeholder="Add promo code"
        />
        <Button>Apply</Button>
      </div>
      <Button size="lg">
        Go to Checkout <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}
