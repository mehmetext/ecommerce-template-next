"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomerComment from "@/components/CustomerComment";
import { useState } from "react";

export default function HappyCustomers() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <section className="flex flex-col">
      <div className="container flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-candal tracking-tighter">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="mt-2 flex gap-4 items-center justify-center">
            <button onClick={() => api?.scrollPrev()}>
              <ArrowLeft />
            </button>
            <button onClick={() => api?.scrollNext()}>
              <ArrowRight />
            </button>
          </div>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/3">
              <CustomerComment />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <CustomerComment />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <CustomerComment />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <CustomerComment />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
