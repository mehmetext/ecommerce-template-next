"use client";

import {
  Check,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const exampleColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "white",
  "pink",
];

export default function Filters({
  inDrawer,
  closeDrawer,
  searchParams,
}: {
  inDrawer?: boolean;
  closeDrawer?: () => void;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const router = useRouter();
  const [minMax, setMinMax] = useState([
    Number(searchParams.min) || 0,
    Number(searchParams.max) || 250,
  ]);
  const [colors, setColors] = useState<string[]>(
    searchParams.colors ? (searchParams.colors as string).split(",") : []
  );
  const [sizes, setSizes] = useState<string[]>(
    searchParams.sizes ? (searchParams.sizes as string).split(",") : []
  );

  return (
    <div
      className={cn("flex flex-col gap-6", {
        "px-5": inDrawer,
      })}
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Filters</p>
        {inDrawer ? (
          <Button variant="ghost" size="icon" onClick={closeDrawer}>
            <X className="w-5 h-5 opacity-40" />
          </Button>
        ) : (
          <SlidersHorizontal className="w-5 h-5 opacity-40" />
        )}
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
      <div className="h-px w-full bg-border" />
      <Collapsible defaultOpen className="flex flex-col">
        <CollapsibleTrigger className="flex items-center justify-between [&>svg]:data-[state=open]:rotate-180">
          Colors
          <ChevronDown className="w-4 h-4 transition-transform" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-5 flex flex-wrap gap-5">
            {exampleColors.map((color) => (
              <div
                key={color}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-black/20 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => {
                  if (colors.includes(color)) {
                    setColors(colors.filter((c) => c !== color));
                  } else {
                    setColors([...colors, color]);
                  }
                }}
              >
                {colors.includes(color) && (
                  <Check
                    className={cn("w-4 h-4", {
                      "text-white": color !== "white",
                      "text-black": ["white", "yellow", "pink"].includes(color),
                    })}
                  />
                )}
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div className="h-px w-full bg-border" />
      <Collapsible defaultOpen className="flex flex-col">
        <CollapsibleTrigger className="flex items-center justify-between [&>svg]:data-[state=open]:rotate-180">
          Size
          <ChevronDown className="w-4 h-4 transition-transform" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-5 flex flex-wrap gap-2">
            {[
              "XX-Small",
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "XX-Large",
              "3X-Large",
              "4X-Large",
            ].map((size) => (
              <Badge
                onClick={() => {
                  if (sizes.includes(size)) {
                    setSizes(sizes.filter((s) => s !== size));
                  } else {
                    setSizes([...sizes, size]);
                  }
                }}
                variant={sizes.includes(size) ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer"
                key={size}
              >
                {size}
              </Badge>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Button
        className="sticky bottom-4"
        onClick={() => {
          router.push(
            `?${minMax[0] > 0 ? `min=${minMax[0]}` : ""}${
              minMax[1] < 250 ? `&max=${minMax[1]}` : ""
            }${colors.length > 0 ? `&colors=${colors}` : ""}${
              sizes.length > 0 ? `&sizes=${sizes}` : ""
            }`
          );

          if (closeDrawer) closeDrawer();
        }}
      >
        Apply Filters
      </Button>
    </div>
  );
}
