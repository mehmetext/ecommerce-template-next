import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HeaderMenu() {
  return (
    <div className="gap-6 hidden md:flex">
      <button className="flex items-center gap-1">
        Shop <ChevronDownIcon className="w-4 h-4" />
      </button>
      <Link href="/">On Sale</Link>
      <Link href="/">New Arrivals</Link>
      <Link href="/">Brands</Link>
    </div>
  );
}
