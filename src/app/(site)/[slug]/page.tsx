import { BreadcrumbResponsive } from "@/components/BreadcrumbResponsive";
import React from "react";
import Filters from "./components/Filters";

import SortingAndTitle from "./components/SortingAndTitle";
import ProductList from "./components/ProductList";

export default function CategoryPage() {
  return (
    <main className="flex flex-col gap-16 mb-20">
      <BreadcrumbResponsive
        items={[{ label: "Home", href: "/" }, { label: "Men" }]}
      />
      <div className="container flex gap-5">
        <div className="md:w-3/12 hidden md:flex flex-col">
          <aside className="rounded-3xl border border-border p-5">
            <Filters />
          </aside>
        </div>
        <div className="w-full md:w-9/12">
          <div className="flex flex-col gap-6">
            <SortingAndTitle />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
}
