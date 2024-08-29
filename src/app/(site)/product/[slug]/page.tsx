import { BreadcrumbResponsive } from "@/components/BreadcrumbResponsive";
import React from "react";

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
    </main>
  );
}
