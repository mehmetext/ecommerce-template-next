import React from "react";
import SignUpBadge from "./SignUpBadge";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className="flex flex-col">
      <SignUpBadge />
      <header className="py-6">
        <div className="container flex gap-10 items-center">
          <Link href="/" className="text-3xl font-bold font-candal">
            SHOP.CO
          </Link>
          <HeaderMenu />
          <Input />
        </div>
      </header>
    </div>
  );
}
