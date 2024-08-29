"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Reviews from "./Reviews";

type Tab = {
  label: string;
  value: "details" | "reviews" | "faqs";
};

const tabs: Tab[] = [
  {
    label: "Product Details",
    value: "details",
  },
  {
    label: "Rating & Reviews",
    value: "reviews",
  },
  {
    label: "FAQs",
    value: "faqs",
  },
];

export default function Tabs() {
  const [tab, setTab] = useState<Tab["value"]>("reviews");

  return (
    <section className="container flex flex-col gap-6">
      <div className="flex gap-0 overflow-x-scroll">
        {tabs.map((iTab) => (
          <div
            key={iTab.value}
            className={cn(
              "md:flex-1 border-b px-4 first:pl-0 last:pr-0 md:px-0 flex"
            )}
          >
            <button
              onClick={() => setTab(iTab.value)}
              className="flex-1 relative py-2 md:py-4"
            >
              <div className="whitespace-nowrap">{iTab.label}</div>
              {tab === iTab.value && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                />
              )}
            </button>
          </div>
        ))}
        <div className="flex-1 md:hidden border-b"></div>
      </div>
      {tab === "details" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col"
        >
          <p className="text-2xl font-bold">Details</p>
        </motion.div>
      )}
      {tab === "reviews" && <Reviews />}
      {tab === "faqs" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col"
        >
          <p className="text-2xl font-bold">FAQs</p>
        </motion.div>
      )}
    </section>
  );
}
