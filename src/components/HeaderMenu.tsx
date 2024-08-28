import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HeaderMenu() {
  return (
    <div className="flex gap-6">
      <button className="flex items-center gap-1">
        Shop <ChevronDownIcon className="w-4 h-4" />
      </button>
      <Link href="/">On Sale</Link>
      <Link href="/">New Arrivals</Link>
      <Link href="/">Brands</Link>
    </div>
  );
}
