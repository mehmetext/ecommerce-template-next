import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <ProductList title="NEW ARRIVALS" showBorder />
      <ProductList title="TOP SELLING" />
    </main>
  );
}
