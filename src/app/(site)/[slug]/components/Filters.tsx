"use client";

import { ChevronDown, ChevronRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";

export default function Filters() {
  const [minMax, setMinMax] = useState([50, 200]);

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
      <div className="h-px w-full bg-border" />
      <Collapsible defaultOpen className="flex flex-col">
        <CollapsibleTrigger className="flex items-center justify-between [&>svg]:data-[state=open]:rotate-180">
          Price
          <ChevronDown className="w-4 h-4 transition-transform" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-5 flex flex-col">
            <Slider
              onValueChange={(value) => {
                setMinMax(value);
              }}
              min={0}
              max={250}
              value={minMax}
              className="pb-3"
            />
            <div className="flex justify-between">
              <p className="text-xs">${minMax[0]}</p>
              <p className="text-xs">${minMax[1]}</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </aside>
  );
}
