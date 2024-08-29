import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderMenu({ menu }: { menu: HeaderMenuItem[] }) {
  return (
    <div className="gap-6 hidden md:flex">
      {menu.map((v, i) => (
        <React.Fragment key={i}>
          {v.subMenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                {v.name} <ChevronDownIcon className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {v.subMenu.map((s, i) => (
                  <DropdownMenuItem key={i} asChild>
                    <Link href={s.href}>{s.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={v.href!}>{v.name}</Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
