import Image from "next/image";

const products = [
  {
    brand: "INUIKII",
    name: "Classic Beige",
    type: "Winter Boots",
    image: "/products/inui-beige.png",
    oldPrice: 245.3,
    price: 156.7,
    discount: 36,
  },
  {
    brand: "INUIKII",
    name: "Classic Taupe",
    type: "Winter Boots",
    image: "/products/inui-taupe.png",
    oldPrice: 245.3,
    price: 156.7,
    discount: 36,
  },
  {
    brand: "COACH",
    name: "Brooklyn Shoulder Bag 39 Black",
    type: "Shoulder Bag",
    image: "/products/coach-bag.png",
    price: 541.8,
  },
  {
    brand: "GUESS",
    name: "Ilary Black",
    type: "Loafer",
    image: "/products/guess-loafer.png",
    price: 142.8,
  },
];

export default function PopularRightNow() {
  return (
    <section className="w-full flex justify-center bg-[#fafafa] py-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-light mb-8 ml-2">POPULAR RIGHT NOW</h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded flex flex-col items-center p-6 relative shadow-sm"
            >
              {/* Carousel arrows */}
              {i === 0 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black text-3xl"
                  aria-label="Previous"
                >
                  &#60;
                </button>
              )}
              {i === products.length - 1 && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black text-3xl"
                  aria-label="Next"
                >
                  &#62;
                </button>
              )}
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
    </section>
  );
}
