import { BreadcrumbResponsive } from "@/components/BreadcrumbResponsive";
import React from "react";
import Products from "./components/Products";

export default function CartPage() {
  return (
    <main className="flex flex-col gap-6 mb-20">
      <BreadcrumbResponsive
        items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
      />
      <div className="container">
        <h1 className="text-4xl font-candal tracking-tighter">YOUR CART</h1>
      </div>
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="md:w-7/12">
          <Products />
        </div>
        <div className="md:w-5/12">summary</div>
      </div>
    </main>
  );
}
