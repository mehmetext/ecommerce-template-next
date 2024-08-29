import { Button } from "@/components/ui/button";
import UpDownQuantity from "@/components/UpDownQuantity";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CartItem() {
  return (
    <div className="flex gap-4">
      <Image
        src="/images/product-1.png"
        alt="product"
        width={120}
        height={120}
        className="rounded-2xl"
      />
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="text-xl font-bold">T-shirt</h3>
        <div className="flex-1 flex flex-col">
          <p className="text-sm">
            Size: <span className="opacity-60">Large</span>
          </p>
          <p className="text-sm">
            Color: <span className="opacity-60">Black</span>
          </p>
        </div>
        <p className="text-2xl font-bold">$145</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <Button variant="ghost" size="icon">
          <Trash className="w-5 h-5 text-destructive" />
        </Button>
        <UpDownQuantity className="gap-2" />
      </div>
    </div>
  );
}
