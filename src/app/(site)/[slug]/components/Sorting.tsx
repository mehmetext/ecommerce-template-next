import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Sorting() {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-sm opacity-60">Showing 1-10 of 100 Products</p>
      <div className="shrink-0 flex items-center gap-2">
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
  );
}
