import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="container flex flex-col md:flex-row items-stretch md:items-center justify-between">
        <div className="mb-0 md:mb-10 mt-10 flex flex-col items-start gap-5 md:gap-8 md:w-5/12">
          <h1 className="text-4xl md:text-6xl font-candal tracking-tighter">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm md:text-base opacity-60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button size="lg" className="md:w-1/3">
            Show Now
          </Button>
        </div>
        <div className="relative -mx-8 md:mx-0 md:w-6/12 aspect-[390/448]">
          <Image
            fill
            src="/images/hero-image.png"
            alt="hero"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
