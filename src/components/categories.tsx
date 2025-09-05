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

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-4 gap-6 mb-8">
        {categories.slice(0, 4).map((cat) => (
          <a
            key={cat.label}
            href="#"
            className="relative group rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={cat.image}
              alt={cat.label}
              width={400}
              height={256}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            {/* <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-20 group-hover:bg-opacity-40 transition">
              {cat.label}
            </span> */}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {categories.slice(4).map((cat) => (
          <a
            key={cat.label}
            href="#"
            className="relative group rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={cat.image}
              alt={cat.label}
              width={400}
              height={256}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
            />
            {/* <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-20 group-hover:bg-opacity-40 transition">
              {cat.label}
            </span> */}
          </a>
        ))}
      </div>
    </div>
  );
}
