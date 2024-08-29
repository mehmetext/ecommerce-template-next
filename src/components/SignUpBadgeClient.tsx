"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SignUpBadgeClient({
  hidden,
  setSignUpBadgeCookie,
}: {
  hidden: boolean;
  setSignUpBadgeCookie: (value: string) => void;
}) {
  if (hidden) return null;

  return (
    <div className="bg-black text-white">
      <div className="container text-center text-sm">
        <div className="relative py-2.5">
          Sign up and get 20% off to your first order.{" "}
          <Link href="/" className="underline underline-offset-4 font-medium">
            Sign Up Now
          </Link>
          <button onClick={() => setSignUpBadgeCookie("hidden")}>
            <X className="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2" />
          </button>
        </div>
      </div>
    </div>
  );
}
