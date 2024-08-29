"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUpBadgeClient({
  hidden,
  setSignUpBadgeCookie,
}: {
  hidden: boolean;
  setSignUpBadgeCookie: (value: string) => Promise<void>;
}) {
  const [isHidden, setIsHidden] = useState(hidden);

  return (
    <AnimatePresence>
      {!isHidden && (
        <>
          <motion.div
            initial={{ height: isHidden ? 0 : "auto" }}
            exit={{ height: 0 }}
            className="fixed top-0 left-0 w-full h-10 z-10 overflow-hidden bg-black text-white"
          >
            <div className="container text-center text-sm">
              <div className="relative py-2.5">
                Sign up and get 20% off to your first order.{" "}
                <Link
                  href="/"
                  className="underline underline-offset-4 font-medium"
                >
                  Sign Up Now
                </Link>
                <button
                  onClick={async () => {
                    await setSignUpBadgeCookie("hidden");
                    setIsHidden(true);
                  }}
                >
                  <X className="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2" />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ height: isHidden ? 0 : 40 }}
            exit={{ height: 0 }}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
