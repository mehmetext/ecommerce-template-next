import ProductItem from "@/components/ProductItem";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ProductList({
  title,
  showBorder = false,
}: {
  title: string;
  showBorder?: boolean;
}) {
  return (
    <section
      className={cn("container flex flex-col gap-10", {
        "border-b border-b-border pb-16": showBorder,
      })}
    >
      <div className="flex items-center justify-center text-center">
        <h2 className="text-5xl font-candal tracking-tighter">{title}</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Link
        href="/"
        className={cn(
          buttonVariants({ size: "lg", variant: "outline" }),
          "md:self-center md:w-64"
        )}
      >
        View More
      </Link>
    </section>
  );
}
