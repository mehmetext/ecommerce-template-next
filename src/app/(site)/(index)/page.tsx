import ProductList from "@/components/ProductList";
import Browse from "./components/Browse";
import HappyCustomers from "./components/HappyCustomers";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 mb-20">
      <Hero />
      <ProductList title="NEW ARRIVALS" showBorder />
      <ProductList title="TOP SELLING" />
      <Browse />
      <HappyCustomers />
    </main>
  );
}
