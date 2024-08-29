import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Reviews() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <div className="flex justify-between">
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold">Reviews</p>
          <p className="text-sm opacity-60">(451)</p>
        </div>
        <div className="flex gap-2.5">
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="w-5 h-5 opacity-40" />
          </Button>
          <Select defaultValue="most-popular">
            <SelectTrigger className="w-40 rounded-full">
              <SelectValue placeholder="Select a sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most-popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Low to High</SelectItem>
              <SelectItem value="price-desc">High to Low</SelectItem>
            </SelectContent>
          </Select>
          <Button>Write a Review</Button>
        </div>
      </div>
    </motion.div>
  );
}
