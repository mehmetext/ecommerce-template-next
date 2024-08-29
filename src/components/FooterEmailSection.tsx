"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function FooterEmailSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="container -mb-[120px] z-10">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center rounded-3xl bg-black p-6 md:p-16">
        <p className="font-candal tracking-tighter text-4xl md:w-[480px] text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex flex-col gap-3 w-full md:w-2/5">
          <Input
            icon={<Mail className="w-5 h-5" />}
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="white"
            onClick={() => {
              if (email) {
                toast.success("Subscribed to newsletter");
              } else {
                toast.error("Please enter your email address");
              }
            }}
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
}
