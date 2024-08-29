import { BreadcrumbResponsive } from "@/components/BreadcrumbResponsive";
import React from "react";
import Filters from "./components/Filters";

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
        <div className="sm:w-9/12">products</div>
      </div>
    </main>
  );
}
