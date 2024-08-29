import ProductItem from "@/components/ProductItem";

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
}
