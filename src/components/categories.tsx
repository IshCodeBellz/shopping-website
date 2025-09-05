import Image from "next/image";
import React from "react";

const categories = [
  {
    label: "NEW",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/23GqQhD0fwIOF0IZOqpxq7/3797e062264cd80073e6c4a3985e628e/signpost_new_summer.jpg?w=300&fm=webp",
  },
  {
    label: "HANDBAGS",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/2HVOa6QsAwwr5GZb8iHXIT/9436976ecbf1d3e80508e6227b87a6e1/signpost_homepage_bags_new.jpg?w=300&fm=webp",
  },
  {
    label: "SHOES",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/53AN0cRh8GiEYrGy6B6tGd/0ad661969da4645cf41f09f82eca362a/signpost_shoes_SS25.jpg?w=300&fm=webp",
  },
  {
    label: "SUNGLASSES",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/7v7wpyqEkge2KqxyvFfow5/45910c210db58f89c752850f3af071bd/signpost_sunglasses.jpg?w=300&fm=webp",
  },
  {
    label: "JEWELLERY & WATCHES",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/4KCjYSl48CrU28gCUuNFJw/0e8bea79a26780ac9dfb1147d80a96d0/signpost_jewellerywatches.jpg?w=300&fm=webp",
  },
  {
    label: "ACCESSORIES",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/7LxSeEGM4hGxqhGtFdqvkG/dc273f25c9dde322d02f71ecdc673fd1/signpost_Accessoires_HP.jpg?w=300&fm=webp",
  },
  {
    label: "SALE",
    image:
      "https://images.ctfassets.net/zmbbfrp5qt5b/1EN9SF2SRV5EdMOc9jfwjy/db4c3469a9630c2c63047d40ad4db933/signpost_final-sale.jpg?w=300&fm=webp",
  },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Top row: 4 columns */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {categories.slice(0, 4).map((cat) => (
          <div key={cat.label} className="flex flex-col items-center">
            <a
              href="#"
              className="relative group rounded overflow-hidden shadow hover:shadow-lg transition flex flex-col"
            >
              <div
                style={{
                  width: "295px",
                  height: "295px",
                  position: "relative",
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={295}
                  height={295}
                  className="w-[295px] h-[295px] object-cover group-hover:scale-105 transition-transform"
                  sizes="295px"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold tracking-wide pointer-events-none">
                  {cat.label === "NEW" || cat.label === "SALE" ? cat.label : ""}
                </span>
              </div>
            </a>
            <div className="mt-3 text-center text-base text-gray-900 font-medium">
              {cat.label}
            </div>
          </div>
        ))}
      </div>
      {/* Bottom row: 3 columns, centered, minimal gap */}
      <div className="grid grid-cols-3 gap-0 justify-items-center">
        {categories.slice(4).map((cat) => (
          <div key={cat.label} className="flex flex-col items-center">
            <a
              href="#"
              className="relative group rounded overflow-hidden shadow hover:shadow-lg transition flex flex-col"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                width={295}
                height={295}
                className="w-[295px] h-[295px] object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-semibold tracking-wide pointer-events-none">
                {cat.label === "SALE" ? cat.label : ""}
              </span>
            </a>
            <div className="mt-3 text-center text-base text-gray-900 font-medium">
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
