"use client";

import { Menu } from "lucide-react";
import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HeaderResponsiveMenu({
  menu,
}: {
  menu: HeaderMenuItem[];
}) {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <Menu className="w-5 h-5" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 flex flex-col gap-4">
          {menu.map((v, i) => (
            <React.Fragment key={i}>
              {v.subMenu ? (
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold">{v.name}</div>
                  {v.subMenu.map((s, j) => (
                    <DrawerClose asChild key={j}>
                      <Link
                        href={s.href}
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "justify-start ml-4"
                        )}
                      >
                        {s.name}
                      </Link>
                    </DrawerClose>
                  ))}
                </div>
              ) : (
                <DrawerClose asChild>
                  <Link
                    href={v.href!}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "justify-start"
                    )}
                  >
                    {v.name}
                  </Link>
                </DrawerClose>
              )}
            </React.Fragment>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
