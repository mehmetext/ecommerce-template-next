import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

export default function SortingAndTitle() {
  return (
    <div className="flex justify-between items-center gap-4">
      <h2 className="text-4xl font-semibold">Casual</h2>
      <div className="flex flex-1 md:flex-none gap-3 items-center">
        <p className="text-sm opacity-60">Showing 1-10 of 100 Products</p>
        <div className="hidden md:flex shrink-0 items-center gap-2">
          <p className="shrink-0 text-sm opacity-60">Sort by:</p>
          <Select defaultValue="most-popular">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select a sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="most-popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Low to High</SelectItem>
              <SelectItem value="price-desc">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="md:hidden" variant="outline" size="icon">
        <SlidersHorizontal className="w-5 h-5" />
      </Button>
    </div>
  );
}
