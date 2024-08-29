import type { Metadata } from "next";
import { Inter, Candal } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const candal = Candal({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-candal",
});

export const metadata: Metadata = {
  title: "Ecommerce Template Next",
  description: "Ecommerce Template Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, candal.variable, "font-inter")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
