import React from "react";
import CartItem from "./CartItem";

export default function Products() {
  const length = 3;
  return (
    <div className="flex flex-col gap-6 p-6 border border-border rounded-3xl">
      {Array.from({ length }).map((_, index) => (
        <React.Fragment key={index}>
          <CartItem />
          {index < length - 1 && <div className="h-px bg-border" />}
        </React.Fragment>
      ))}
    </div>
  );
}
