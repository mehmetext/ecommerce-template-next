/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col">
      <div className="bg-[#F2F0F1]">
        <div className="container flex flex-col lg:flex-row items-stretch lg:items-center justify-between">
          <div className="mb-0 lg:mb-10 mt-10 flex flex-col items-start gap-5 lg:gap-8 lg:w-7/12">
            <h1 className="md:w-9/12 text-4xl md:text-6xl font-candal tracking-tighter">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="md:w-9/12 text-sm md:text-base opacity-60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button size="lg" className="w-full md:w-1/3">
              Show Now
            </Button>
            <div className="flex gap-8 gap-y-3 flex-wrap justify-center">
              <div className="flex flex-col">
                <span className="font-bold text-4xl">200+</span>
                <span className="opacity-60 whitespace-nowrap">
                  International Brands
                </span>
              </div>
              <div className="w-px bg-black opacity-10" />
              <div className="flex flex-col">
                <span className="font-bold text-4xl">2,000+</span>
                <span className="opacity-60 whitespace-nowrap">
                  High-Quality Products
                </span>
              </div>
              <div className="hidden lg:block w-px bg-black opacity-10" />
              <div className="flex flex-col">
                <span className="font-bold text-4xl">30,000+</span>
                <span className="opacity-60 whitespace-nowrap">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="relative -mx-8 lg:mx-0 lg:w-5/12 aspect-[390/448]">
            <Image
              fill
              src="/images/hero-image.png"
              alt="hero"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container flex flex-wrap items-center py-10 justify-center lg:justify-between gap-8">
          <img src="/images/versace.svg" alt="Versace" className="h-8" />
          <img src="/images/zara.svg" alt="Zara" className="h-8" />
          <img src="/images/gucci.svg" alt="Gucci" className="h-8" />
          <img src="/images/prada.svg" alt="Prada" className="h-8" />
          <img
            src="/images/calvin-klein.svg"
            alt="Calvin Klein"
            className="h-8"
          />
        </div>
      </div>
    </section>
  );
}
