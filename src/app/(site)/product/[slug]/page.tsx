import { BreadcrumbResponsive } from "@/components/BreadcrumbResponsive";
import React from "react";
import ProductTop from "./components/ProductTop";
import Tabs from "./components/Tabs";
import ProductList from "@/components/ProductList";

export default function ProductPage() {
  return (
    <main className="flex flex-col gap-16 mb-20">
      <BreadcrumbResponsive
        items={[
          { label: "Home", href: "/" },
          { label: "Men", href: "/men" },
          {
            label: "T-shirt with Tape Details",
          },
        ]}
      />
      <ProductTop />
      <Tabs />
      <ProductList title="YOU MIGHT ALSO LIKE" />
    </main>
  );
}
