import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function ProductItem() {
  return (
    <Link href="/product/example" className="flex flex-col gap-2">
      <div className="bg-[#F0EEED] rounded-3xl overflow-hidden relative aspect-square">
        <Image
          fill
          src="/images/product-1.png"
          alt="Product 1"
          className="object-contain"
        />
      </div>
      <p className="self-start text-xl font-bold">T-shirt with Tape Details</p>
      <div className="flex items-center gap-1">
        <div className="flex text-yellow-500">
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <StarHalf className="w-4 h-4" />
        </div>
        <p className="text-xs">
          4.5/<span className="opacity-60">5</span>
        </p>
      </div>
      <div className="flex gap-2.5 items-center">
        <p className="text-2xl font-bold">$120</p>
        <p className="text-2xl font-bold opacity-40 line-through">$260</p>
        <Badge className="bg-red-100 hover:bg-red-50 text-red-400">-20%</Badge>
      </div>
    </Link>
  );
}
