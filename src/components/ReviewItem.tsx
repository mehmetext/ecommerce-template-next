import { BadgeCheck, Ellipsis, Star, StarHalf } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function ReviewItem() {
  return (
    <div className="flex flex-col border border-border rounded-3xl p-6 gap-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex text-yellow-500 gap-1">
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5" />
          <Star className="w-5 h-5" />
          <StarHalf className="w-5 h-5" />
        </div>
        <Button size="icon" variant="ghost">
          <Ellipsis className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-xl font-bold">Sarah M.</p>
        <BadgeCheck className="w-5 h-5 text-green-500" />
      </div>
      <p className="opacity-60">
        I&apos;m blown away by the quality and style of the clothes I received
        from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve
        bought has exceeded my expectations.
      </p>
      <p className="font-medium opacity-60">Posted on August 14, 2023</p>
    </div>
  );
}
