import React from "react";
import SignUpBadge from "./SignUpBadge";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { Input } from "./ui/input";
import { Search, ShoppingCart, User } from "lucide-react";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <div className="flex flex-col">
      <SignUpBadge />
      <header className="py-6 relative">
        <div className="container flex gap-10 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-3xl font-bold font-candal tracking-tighter"
            >
              SHOP.CO
            </Link>
            <HeaderMenu />
          </div>
          <Input
            containerClassName="flex-1 hidden lg:flex"
            icon={<Search className="w-5 h-5" />}
            placeholder="Search for products..."
          />
          <div className="flex gap-4">
            <HeaderSearch />
            <button>
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button>
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
