/* eslint-disable @next/next/no-img-element */
import React from "react";
import { buttonVariants } from "./ui/button";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FooterEmailSection from "./FooterEmailSection";

export default function Footer() {
  return (
    <section className="flex flex-col">
      <FooterEmailSection />
      <footer className="bg-[#F0F0F0] pt-[170px] pb-24">
        <div className="container flex flex-col gap-12">
          <div className="flex flex-wrap gap-y-10">
            <div className="basis-full md:basis-2/6 flex flex-col gap-4">
              <p className="font-candal tracking-tighter text-4xl">SHOP.CO</p>
              <p className="opacity-60 text-sm">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ size: "icon", variant: "outline" })
                  )}
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ size: "icon", variant: "outline" })
                  )}
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ size: "icon", variant: "outline" })
                  )}
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ size: "icon", variant: "outline" })
                  )}
                >
                  <Github className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="basis-1/2 md:basis-1/6 flex flex-col gap-5">
              <p className="font-medium tracking-wider">COMPANY</p>
              <div className="flex flex-col gap-2 opacity-60 items-start">
                <Link href="/">About</Link>
                <Link href="/">Features</Link>
                <Link href="/">Works</Link>
                <Link href="/">Career</Link>
              </div>
            </div>
            <div className="basis-1/2 md:basis-1/6 flex flex-col gap-5">
              <p className="font-medium tracking-wider">HELP</p>
              <div className="flex flex-col gap-2 opacity-60 items-start">
                <Link href="/">Customer Support</Link>
                <Link href="/">Delivery Details</Link>
                <Link href="/">Terms & Conditions</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
            <div className="basis-1/2 md:basis-1/6 flex flex-col gap-5">
              <p className="font-medium tracking-wider">FAQ</p>
              <div className="flex flex-col gap-2 opacity-60 items-start">
                <Link href="/">Account</Link>
                <Link href="/">Manage Deliveries</Link>
                <Link href="/">Orders</Link>
                <Link href="/">Payments</Link>
              </div>
            </div>
            <div className="basis-1/2 md:basis-1/6 flex flex-col gap-5">
              <p className="font-medium tracking-wider">RESOURCES</p>
              <div className="flex flex-col gap-2 opacity-60 items-start">
                <Link href="/">Free eBooks</Link>
                <Link href="/">Development Tutorial</Link>
                <Link href="/">How to - Blog</Link>
                <Link href="/">Youtube Playlist</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-t-border flex flex-col gap-4 pt-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <p className="opacity-60 text-sm">
                Shop.co © 2000-{new Date().getFullYear()}. All rights reserved.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-white rounded">
                    <img src="/images/visa.svg" alt="Visa" className="h-3" />
                  </div>
                  <div className="p-2 bg-white rounded">
                    <img
                      src="/images/mastercard.svg"
                      alt="Mastercard"
                      className="h-3"
                    />
                  </div>
                  <div className="p-2 bg-white rounded">
                    <img
                      src="/images/paypal.svg"
                      alt="Paypal"
                      className="h-3"
                    />
                  </div>
                  <div className="p-2 bg-white rounded">
                    <img
                      src="/images/apple-pay.svg"
                      alt="Apple Pay"
                      className="h-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
