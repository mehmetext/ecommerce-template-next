import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-6 md:w-6/12">
          <h1 className="text-6xl font-candal tracking-tighter">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="opacity-60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
      </div>
    </section>
  );
}
