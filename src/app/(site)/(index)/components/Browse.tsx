import Image from "next/image";
import React from "react";

export default function Browse() {
  return (
    <section className="container">
      <div className="flex bg-[#F0F0F0] p-6 md:p-16 flex-col  gap-6 md:gap-16 rounded-3xl">
        <h2 className="text-5xl font-candal tracking-tighter text-center">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-5 bg-white overflow-hidden rounded-3xl relative flex justify-end">
            <p className="absolute text-4xl font-bold left-4 top-4">Casual</p>
            <Image
              src="/images/browse-1.png"
              className="object-cover"
              alt="Browse 1"
              width={400}
              height={280}
            />
          </div>
          <div className="md:col-span-7 bg-white overflow-hidden rounded-3xl relative flex justify-end">
            <p className="absolute text-4xl font-bold left-4 top-4">Formal</p>
            <Image
              src="/images/browse-2.png"
              className="object-cover"
              alt="Browse 2"
              width={400}
              height={280}
            />
          </div>
          <div className="md:col-span-7 bg-white overflow-hidden rounded-3xl relative flex justify-end">
            <p className="absolute text-4xl font-bold left-4 top-4">Party</p>
            <Image
              src="/images/browse-3.png"
              className="object-cover"
              alt="Browse 3"
              width={400}
              height={280}
            />
          </div>
          <div className="md:col-span-5 bg-white overflow-hidden rounded-3xl relative flex justify-end">
            <p className="absolute text-4xl font-bold left-4 top-4">Gym</p>
            <Image
              src="/images/browse-4.png"
              className="object-cover"
              alt="Browse 4"
              width={400}
              height={280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
