"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function SignUpBadge() {
  return (
    <div className="bg-black text-white">
      <div className="container text-center text-sm">
        <div className="relative py-2.5">
          Sign up and get 20% off to your first order.{" "}
          <Link href="/" className="underline underline-offset-4 font-medium">
            Sign Up Now
          </Link>
          <button>
            <X className="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2" />
          </button>
        </div>
      </div>
    </div>
  );
}
