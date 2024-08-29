import { ChevronRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Filters() {
  return (
    <aside className="flex flex-col rounded-3xl border border-border p-5 gap-6">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Filters</p>
        <SlidersHorizontal className="w-5 h-5 opacity-40" />
      </div>
      <div className="h-px w-full bg-border" />
      <div className="flex flex-col gap-5">
        <Link href="/" className="flex items-center justify-between opacity-60">
          T-shirts
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link href="/" className="flex items-center justify-between opacity-60">
          Shorts
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
