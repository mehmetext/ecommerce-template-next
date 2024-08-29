import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderMenu() {
  return (
    <div className="gap-6 hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          Shop <ChevronDownIcon className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>On Sale</DropdownMenuItem>
          <DropdownMenuItem>New Arrivals</DropdownMenuItem>
          <DropdownMenuItem>Brands</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/">On Sale</Link>
      <Link href="/">New Arrivals</Link>
      <Link href="/">Brands</Link>
    </div>
  );
}
