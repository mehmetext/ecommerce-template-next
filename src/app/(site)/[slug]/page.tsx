import { BreadcrumbResponsive } from "@/components/BreadcrumbResponsive";
import React from "react";
import Filters from "./components/Filters";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Sorting from "./components/Sorting";
import ProductList from "./components/ProductList";

export default function CategoryPage() {
  return (
    <main className="flex flex-col gap-16 mb-20">
      <BreadcrumbResponsive
        items={[{ label: "Home", href: "/" }, { label: "Men" }]}
      />
      <div className="container flex gap-5">
        <div className="sm:w-3/12 flex flex-col">
          <aside className="rounded-3xl border border-border p-5">
            <Filters />
          </aside>
        </div>
        <div className="sm:w-9/12">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-semibold">Casual</h2>
              <Sorting />
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
}
