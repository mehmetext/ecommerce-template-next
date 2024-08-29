"use client";

import { Search, X } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        <Search className="w-5 h-5" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-hidden absolute left-0 top-0 bottom-0 right-0 flex bg-white"
          >
            <div className="container flex gap-5 items-center justify-center">
              <Input
                containerClassName="flex-1"
                icon={<Search className="w-5 h-5" />}
                placeholder="Search for products..."
              />
              <button onClick={() => setIsOpen(!isOpen)}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
