import React from "react";
// import Image from "next/image";

// const categories = [
//   {
//     label: "NEW",
//     image:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     label: "HANDBAGS",
//     image:
//       "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     label: "SHOES",
//     image:
//       "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     label: "SUNGLASSES",
//     image:
//       "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     label: "JEWELLERY & WATCHES",
//     image:
//       "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     label: "ACCESSORIES",
//     image:
//       "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     label: "SALE",
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
//     isSale: true,
//   },
// ];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Test: React.FC = () => {
  return (
    <div className="w-full mx-auto p-6 bg-pink-500">
      {/* Desktop layout */}
      <div className="hidden sm:grid grid-cols-4 h-[295px] w-full mx-auto mb-4 gap-2">
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          1
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          2
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          3
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          4
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-8 h-[295px] w-full mx-auto mb-4 gap-2">
        <div
          className="text-white font-bold col-start-2 col-span-2"
          style={{ backgroundColor: getRandomColor() }}
        >
          5
        </div>
        <div
          className="text-white font-bold col-span-2"
          style={{ backgroundColor: getRandomColor() }}
        >
          6
        </div>
        <div
          className="text-white font-bold col-span-2"
          style={{ backgroundColor: getRandomColor() }}
        >
          7
        </div>
      </div>
      {/* Mobile layout */}
      <div className="sm:hidden grid grid-cols-2 gap-2 h-[600px] w-full mx-auto">
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          1
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          2
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          3
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          4
        </div>
        <div
          className="text-white font-bold"
          style={{ backgroundColor: getRandomColor() }}
        >
          5
        </div>
        <div
          className="text-white font-bold "
          style={{ backgroundColor: getRandomColor() }}
        >
          6
        </div>
      </div>
      <div className="sm:hidden grid grid-cols-4 mt-2">
        <div
          className="text-white font-bold col-start-2 h-[194.68px] col-span-2"
          style={{ backgroundColor: getRandomColor() }}
        >
          7
        </div>
      </div>
    </div>
  );
};

export default Test;
