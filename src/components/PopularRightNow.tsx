"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    brand: "INUIKII",
    name: "Classic Beige",
    type: "Winter Boots",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/6e9caf5a-4ce2-4df9-bbb4-ca07265a24d8/A0668425-PDP-1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    oldPrice: 245.3,
    price: 156.7,
    discount: 36,
  },
  {
    brand: "INUIKII",
    name: "Classic Taupe",
    type: "Winter Boots",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/8278b6ce-80bd-4632-a951-90d2bbdd9392/A0668427-PDP-1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    oldPrice: 245.3,
    price: 156.7,
    discount: 36,
  },
  {
    brand: "COACH",
    name: "Brooklyn Shoulder Bag 39 Black",
    type: "Shoulder Bag",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/f68e2528-e1f1-4b49-b8b1-2853ac82c475/A0367131-PDP-1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    price: 541.8,
  },
  {
    brand: "GUESS",
    name: "Ilary Black",
    type: "Loafer",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/b87ac58d-ffe8-40c9-a05d-2956b956b661/A0180457_Guess_position_1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    price: 142.8,
  },
  {
    brand: "SAINT LAURENT",
    name: "Le Loafer Mocassins Black",
    type: "Loafer",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/4bf32d8b-36e2-49c8-b038-103bf41816e7/A0333299-PDP-1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    oldPrice: 738.8,
    price: 517.1,
    discount: 30,
  },
  {
    brand: "AXEL ARIGATO",
    name: "Orbit Vintage Sneaker White/White",
    type: "Low-Top Sneakers",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/b3c187b1-649a-4a43-967f-7c5aba1e3b65/A0220914-PDP-1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    oldPrice: 246.3,
    price: 184.7,
    discount: 25,
  },
  {
    brand: "PANDORA",
    name: "Engravable Oval Halo Ring Sterling Silber",
    type: "Ring",
    image:
      "https://statics-cdn-v2.fashionette.net/transform/9e3554ce-2d42-42ea-9a7a-f5dde9b2bb55/A0610438-PDP-1?io=transform:extend,width:640,height:640,background:white&quality=100&format=webp",
    oldPrice: 68,
    price: 51,
    discount: 25,
  },
];

export default function PopularRightNow() {
  const [start, setStart] = useState(0);
  const itemsPerPage = 4;
  const canPrev = start > 0;
  const canNext = start + itemsPerPage < products.length;

  const visible = products.slice(start, start + itemsPerPage);

  return (
    <section className="w-full flex justify-center bg-[#fafafa] py-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-light mb-8 ml-2">POPULAR RIGHT NOW</h2>
        <div className="relative">
          {/* Left arrow */}
          {canPrev && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-300 hover:text-black text-4xl px-2"
              aria-label="Previous"
              onClick={() => setStart((s) => Math.max(0, s - itemsPerPage))}
              style={{ height: "100%", minHeight: 200 }}
            >
              &#60;
            </button>
          )}
          {/* Right arrow */}
          {canNext && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-300 hover:text-black text-4xl px-2"
              aria-label="Next"
              onClick={() =>
                setStart((s) =>
                  Math.min(products.length - itemsPerPage, s + itemsPerPage)
                )
              }
              style={{ height: "100%", minHeight: 200 }}
            >
              &#62;
            </button>
          )}
          <div className="grid grid-cols-4 gap-6">
            {visible.map((p, i) => (
              <div
                key={i + start}
                className="bg-white rounded flex flex-col items-center p-6 relative shadow-sm"
              >
                {/* Heart icon */}
                <button
                  className="absolute right-4 top-4 text-gray-400 hover:text-black"
                  aria-label="Add to wishlist"
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M12 21s-6.5-5.7-8.5-8.2A5.5 5.5 0 0 1 12 5.5a5.5 5.5 0 0 1 8.5 7.3C18.5 15.3 12 21 12 21Z"
                    />
                  </svg>
                </button>
                <div className="flex-1 flex items-center justify-center w-full mb-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={220}
                    height={180}
                    className="object-contain h-44 w-auto"
                    priority
                  />
                </div>
                <div className="w-full text-center">
                  <div className="font-bold text-lg mt-2 mb-1">{p.brand}</div>
                  <div className="text-gray-700 text-base mb-1">{p.name}</div>
                  <div className="text-gray-500 text-sm mb-2">{p.type}</div>
                  <div className="flex items-center justify-center gap-2">
                    {p.oldPrice && (
                      <span className="text-black/60 text-base line-through">
                        £{p.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-[#d32f2f] text-xl font-semibold">
                      £{p.price.toFixed(2)}
                    </span>
                    {p.discount && (
                      <span className="text-[#d32f2f] text-base font-medium">
                        -{p.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
