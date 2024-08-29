"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function UpDownQuantity({ className }: { className?: string }) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div
      className={cn(
        "flex items-center justify-between bg-zinc-100 rounded-full",
        className
      )}
    >
      <Button
        onClick={() => {
          setQuantity(quantity > 1 ? quantity - 1 : 1);
        }}
        className="h-12 w-12"
        size="icon"
        variant="ghost"
      >
        <Minus />
      </Button>
      <p className="text-xl font-bold">{quantity}</p>
      <Button
        onClick={() => {
          setQuantity(quantity + 1);
        }}
        className="h-12 w-12"
        size="icon"
        variant="ghost"
      >
        <Plus />
      </Button>
    </div>
  );
}
