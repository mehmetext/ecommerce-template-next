"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const exampleColors = ["red", "blue", "green"];

export default function ProductTop() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);

  return (
    <section className="container flex gap-5">
      <div className="md:w-6/12 flex gap-3">
        <div className="md:w-3/12 flex flex-col gap-3">
          <div className="aspect-square rounded-3xl overflow-hidden relative border border-black">
            <Image
              fill
              src="/images/product-1.png"
              alt="Product 1"
              className="object-contain"
            />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image
              fill
              src="/images/product-1.png"
              alt="Product 1"
              className="object-contain"
            />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image
              fill
              src="/images/product-1.png"
              alt="Product 1"
              className="object-contain"
            />
          </div>
        </div>
        <div className="self-start md:w-9/12 relative aspect-square rounded-3xl overflow-hidden">
          <Image
            fill
            src="/images/product-1.png"
            alt="Product 1"
            className="object-contain"
          />
        </div>
      </div>
      <div className="md:w-6/12 flex flex-col gap-5">
        <h1 className="text-4xl font-candal tracking-tighter">
          {"T-shirt with Tape Details".toUpperCase()}
        </h1>
        <div className="flex items-center gap-1">
          <div className="flex text-yellow-500">
            <Star className="w-6 h-6" />
            <Star className="w-6 h-6" />
            <Star className="w-6 h-6" />
            <Star className="w-6 h-6" />
            <StarHalf className="w-6 h-6" />
          </div>
          <p className="text-xs">
            4.5/<span className="opacity-60">5</span>
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <p className="text-4xl font-bold">$120</p>
          <p className="text-4xl font-bold opacity-40 line-through">$260</p>
          <Badge className="bg-red-100 hover:bg-red-50 text-red-400 py-1 px-3">
            -20%
          </Badge>
        </div>
        <p className="opacity-40">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="h-px w-full bg-border" />
        <div className="flex flex-col gap-4">
          <p className="opacity-60">Select Colors</p>
          <div className="flex flex-wrap gap-2">
            {exampleColors.map((color) => (
              <div
                key={color}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-black/20 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setSelectedColor(color);
                }}
              >
                {selectedColor === color && (
                  <Check
                    className={cn("w-4 h-4", {
                      "text-white": color !== "white",
                      "text-black": ["white", "yellow", "pink"].includes(color),
                    })}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-border" />
        <div className="flex flex-col gap-4">
          <p className="opacity-60">Choose Size</p>
          <div className="flex flex-wrap gap-2">
            {["Small", "Medium", "Large", "X-Large"].map((cSize) => (
              <Badge
                onClick={() => {
                  setSize(cSize);
                }}
                variant={size === cSize ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer"
                key={cSize}
              >
                {cSize}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
