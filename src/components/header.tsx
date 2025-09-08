"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchTrigger from "./SearchTrigger";

const NAV = [
  { label: "NEW", href: "/new" },
  { label: "DESIGNERS", href: "/designers" },
  { label: "BAGS", href: "/bags" },
  { label: "SHOES", href: "/shoes" },
  { label: "SUNGLASSES", href: "/sunglasses" },
  { label: "ACCESSORIES", href: "/accessories" },
  { label: "JEWELLERY & WATCHES", href: "/jewellery-watches" },
  { label: "MEN", href: "/men" },
  {
    label: "SALE",
    href: "/sale",
    className: "text-red-600 text-[13px] font-semibold",
  },
  { label: "INSPIRATION", href: "/inspiration" },
];

export default function Header() {
  // Dropdown data for SHOES
  const shoesDropdown = {
    categories: [
      { label: "SNEAKERS & TRAINERS", href: "/shoes/sneakers-trainers" },
      { label: "SANDALS", href: "/shoes/sandals" },
      { label: "SLIPPERS & MULES", href: "/shoes/slippers-mules" },
      { label: "PUMPS & HIGH HEELS", href: "/shoes/pumps-high-heels" },
      { label: "BALLERINAS", href: "/shoes/ballerinas" },
      { label: "LOAFERS", href: "/shoes/loafers" },
      { label: "ESPADRILLES", href: "/shoes/espadrilles" },
      { label: "BOOTS & ANKLE BOOTS", href: "/shoes/boots-ankle-boots" },
    ],
    topDesigners: [
      "Michael Kors",
      "Steve Madden",
      "Valentino Garavani",
      "INUIKII",
      "Karl Lagerfeld",
      "Guess",
    ],
    newDesigners: [
      "No Name",
      "Sam Edelman",
      "Moonboot",
      "Buffalo",
      "Mou",
      "Stuart Weitzman",
    ],
    image: {
      src: "https://images.ctfassets.net/cesi7lh7rfv6/16lgoxO9Sggv5Vo7W9RVz7/536e5c42fcf200d7ab7c0b7ae232be83/Shoe_Flyout.jpg?w=500&fm=webp",
      alt: "Signature Steps",
      caption: "Signature Steps",
    },
  };

  // Dropdown data for SUNGLASSES
  const sunglassesDropdown = {
    topDesigners: [
      "Bottega Veneta",
      "Chloé",
      "Dolce&Gabbana",
      "Gucci",
      "Michael Kors",
      "Ray-Ban",
      "Saint Laurent",
      "Tom Ford",
      "Versace",
    ],
    image: {
      src: "https://images.ctfassets.net/cesi7lh7rfv6/1A1ELQu61YeIwtWs9eykey/db2628458a49602a2a030a66f184837b/sunglasses-flyout.jpg?w=500&fm=webp",
      alt: "Cat Eye Looks",
      caption: "Cat Eye Looks",
    },
  };

  // Dropdown data for ACCESSORIES
  const accessoriesDropdown = {
    categories: [
      { label: "Wallets", href: "/accessories/wallets" },
      { label: "Sunglasses", href: "/accessories/sunglasses" },
      { label: "Belts", href: "/accessories/belts" },
      { label: "Caps & hats", href: "/accessories/caps-hats" },
      { label: "Scarves", href: "/accessories/scarves" },
      { label: "Gloves", href: "/accessories/gloves" },
      {
        label: "Keychains & Bag Charms",
        href: "/accessories/keychains-bag-charms",
      },
    ],
    topDesigners: [
      "Gucci",
      "Saint Laurent",
      "AIGNER",
      "Max Mara",
      "Michael Kors",
      "Furla",
    ],
    newDesigners: [
      "Moncler",
      "Swarovski",
      "Lala Berlin",
      "Tom Ford",
      "Polo Ralph Lauren",
      "Alexander McQueen",
    ],
    image: {
      src: "https://images.ctfassets.net/cesi7lh7rfv6/7ELNIDgH2MFAeImZ1wV1BJ/85b44b123de4ab9e049f0b58b8136bd5/VacationEdit_Snippet_Acc.jpg?w=500&fm=webp",
      alt: "The Seasons latest accessories",
      caption: "The Seasons latest accessories",
    },
  };

  // Dropdown data for JEWELLERY & WATCHES
  const jewelleryDropdown = {
    categories: [
      { label: "Watches", href: "/jewellery-watches/watches" },
      { label: "Earrings", href: "/jewellery-watches/earrings" },
      { label: "Necklaces", href: "/jewellery-watches/necklaces" },
      { label: "Rings", href: "/jewellery-watches/rings" },
      {
        label: "Pendants & Charms",
        href: "/jewellery-watches/pendants-charms",
      },
      { label: "Bracelets", href: "/jewellery-watches/bracelets" },
    ],
    newDesigners: ["Pandora"],
  };
  // Dropdown data for BAGS
  const bagsDropdown = {
    handbags: [
      { label: "Shoppers & Totes", href: "/bags/shoppers-totes" },
      { label: "Satchel Bags", href: "/bags/satchel-bags" },
      { label: "Bowling Bags", href: "/bags/bowling-bags" },
      { label: "Clutch Bags", href: "/bags/clutch-bags" },
    ],
    shoulderBags: [
      { label: "Crossbody Bags", href: "/bags/crossbody-bags" },
      { label: "Bum Bags", href: "/bags/bum-bags" },
      { label: "Bucket Bags", href: "/bags/bucket-bags" },
      { label: "Backpacks", href: "/bags/backpacks" },
    ],
    businessTravel: [
      { label: "Weekender Bags", href: "/bags/weekender-bags" },
      { label: "Suitcases", href: "/bags/suitcases" },
      { label: "Laptop Bags", href: "/bags/laptop-bags" },
      { label: "Makeup Bags", href: "/bags/makeup-bags" },
    ],
    topDesigners: [
      "Furla",
      "Coccinelle",
      "Michael Kors",
      "Guess",
      "Liebeskind Berlin",
      "Lauren Ralph Lauren",
    ],
    newDesigners: [
      "A.P.C.",
      "LES VISIONNAIRES",
      "Just Cavalli",
      "Jacquemus",
      "Lancel",
      "LIU JO",
    ],
    image: {
      src: "/bags/basket-bag.jpg", // You may need to add this image to your public folder
      alt: "Basket Bag",
      caption: "Summer must have: Basket Bags",
    },
  };
  // Dropdown data for NEW and DESIGNERS
  const newDropdown = {
    items: [
      { label: "Bags", href: "/new/bags" },
      { label: "Shoes", href: "/new/shoes" },
      { label: "Accessories", href: "/new/accessories" },
      { label: "Sunglasses", href: "/new/sunglasses" },
      { label: "Men", href: "/new/men" },
    ],
  };
  const designersDropdown = [
    "AIGNER",
    "Bottega Veneta",
    "Chloé",
    "Coach",
    "Coccinelle",
    "Dolce&Gabbana",
    "Furla",
    "Gucci",
    "Guess",
    "Jacquemus",
    "Karl Lagerfeld",
    "Lauren Ralph Lauren",
    "Marc Jacobs",
    "MCM",
    "Michael Kors",
    "Miu Miu",
    "Prada",
    "Saint Laurent",
    "Valentino Garavani",
  ];

  // Dropdown data for MEN
  const menDropdown = {
    categories: [
      { label: "Bags", href: "/mens/bags" },
      { label: "Shoes", href: "/mens/shoes" },
      { label: "Sunglasses", href: "/mens/sunglasses" },
      { label: "Wallets", href: "/mens/wallets" },
      { label: "Belts", href: "/mens/belts" },
    ],
  };

  // Dropdown data for INSPIRATION
  const inspirationDropdown = {
    categories: [
      { label: "New Arrivals", href: "/inspiration/new-arrivals" },
      {
        label: "COACH - ON YOUR OWN TIME",
        href: "/inspiration/coach-on-your-own-time",
      },
      { label: "Wedding Season", href: "/inspiration/wedding-season" },
      { label: "Mocha Mousse", href: "/inspiration/mocha-mousse" },
      { label: "City Blossom", href: "/inspiration/city-blossom" },
      { label: "Vacation Edit", href: "/inspiration/vacation-edit" },
    ],
    image: {
      src: "https://images.ctfassets.net/cesi7lh7rfv6/7zySzH6433uPeqHgDOBP3/408b63a7bd520d9fc61dc0e8661e49b9/vacationEditSnippet_Shopper.jpg?w=500&fm=webp", // Place this image in public/inspiration/
      alt: "Vacation Edit Inspiration",
      caption: "Vacation Edit",
    },
  };

  // Dropdown data for SALE
  const saleDropdown = {
    categories: [
      { label: "Bags", href: "/sale/bags" },
      { label: "Shoes", href: "/sale/shoes" },
      { label: "Sunglasses", href: "/sale/sunglasses" },
      { label: "Accessories", href: "/sale/accessories" },
      { label: "Jewellery & Watches", href: "/sale/jewellery-watches" },
      { label: "Men", href: "/sale/men" },
    ],
  };
  // Track which nav is hovered
  const [hovered, setHovered] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  // Close dropdown if mouse leaves both nav item and dropdown, with 3s grace
  React.useEffect(() => {
    if (!hovered) return;
    function handleMouseMove(e: MouseEvent) {
      if (!dropdownRef.current) return;
      const navItem = document.querySelector(`[data-nav-label='${hovered}']`);
      const dropdown = dropdownRef.current;
      if (!navItem) return;
      const navRect = navItem.getBoundingClientRect();
      const dropRect = dropdown.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      // If mouse is outside both nav and dropdown, start close timer
      const inNav =
        x >= navRect.left &&
        x <= navRect.right &&
        y >= navRect.top &&
        y <= navRect.bottom;
      const inDrop =
        x >= dropRect.left &&
        x <= dropRect.right &&
        y >= dropRect.top &&
        y <= dropRect.bottom;
      if (!inNav && !inDrop) {
        if (!closeTimeout.current) {
          closeTimeout.current = setTimeout(() => {
            setHovered(null);
            closeTimeout.current = null;
          }, 3000);
        }
      } else {
        if (closeTimeout.current) {
          clearTimeout(closeTimeout.current);
          closeTimeout.current = null;
        }
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
    };
  }, [hovered]);

  return (
    <header className="border-b bg-white sticky top-0 z-30 shadow-sm">
      {/* Top info bar */}
      {/* <div className="w-full bg-gray-100 text-center text-sm py-2 text-gray-700">
        NEW: Pay later with Paypal - interest-free payments in up to 3 monthly
        installments
      </div> */}

      {/* Main header */}
      <div className="flex items-center justify-between px-8 py-6">
        {/* Left: Account icon */}
        <Link href="/account" className="flex items-center">
          <svg width={24} height={24} stroke="currentColor" fill="none">
            <circle cx="12" cy="8" r="5" strokeWidth={1.5} />
            <path d="M20 22a8 8 0 10-16 0" strokeWidth={1.5} />
          </svg>
        </Link>

        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center">
          <span className="text-4xl font-serif font-normal text-gray-950 tracking-wide">
            DY Official
          </span>
        </Link>

        {/* Right: Search, Wishlist, Cart */}
        <div className="flex items-center gap-6">
          <SearchTrigger />
          <Link href="/wishlist" aria-label="Wishlist">
            <svg width={24} height={24} stroke="currentColor" fill="none">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                strokeWidth={1.5}
              />
            </svg>
          </Link>
          <Link href="/cart" aria-label="Cart">
            <svg width={24} height={24} stroke="currentColor" fill="none">
              <path d="M6 6h15l-1.5 9h-13z" strokeWidth={1.5} />
              <circle cx="9" cy="21" r="1" strokeWidth={1.5} />
              <circle cx="18" cy="21" r="1" strokeWidth={1.5} />
            </svg>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 py-2 text-xs font-medium relative">
        {NAV.map((item) => (
          <div
            key={item.label}
            className="relative flex flex-col items-center"
            data-nav-label={item.label}
            onMouseEnter={() => setHovered(item.label)}
          >
            <Link
              href={item.href}
              className={
                item.className
                  ? item.className
                  : "text-black text-[13px] hover:text-gray-700"
              }
            >
              {item.label}
            </Link>
            {/* Dropdowns */}
            {item.label === "SHOES" && hovered === "SHOES" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[900px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                <div className="flex flex-row gap-12 w-full">
                  <div className="flex flex-col gap-2 min-w-[220px]">
                    {shoesDropdown.categories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="font-semibold hover:underline text-black text-xs py-0.5"
                        onClick={() => setHovered(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold text-xs mb-2">TOP DESIGNERS</div>
                    {shoesDropdown.topDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold text-xs mb-2">NEW DESIGNERS</div>
                    {shoesDropdown.newDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-center min-w-[220px]">
                    <Image
                      src={shoesDropdown.image.src}
                      alt={shoesDropdown.image.alt}
                      width={220}
                      height={220}
                      className="object-cover rounded mb-2"
                      style={{ width: 220, height: 220 }}
                      priority
                    />
                    <div className="text-center font-semibold text-xs mt-2">
                      {shoesDropdown.image.caption}
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-4">
                  <Link
                    href="/shoes"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    ALL SHOES
                  </Link>
                </div>
              </div>
            )}
            {/* SALE Dropdown */}
            {item.label === "SALE" && hovered === "SALE" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[400px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                <div className="flex flex-col gap-2 min-w-[220px]">
                  <div className="font-bold mb-2">SALE</div>
                  {saleDropdown.categories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      className="hover:underline text-black text-xs py-0.5"
                      onClick={() => setHovered(null)}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
                <div className="w-full flex mt-4">
                  <Link
                    href="/sale"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    ALL SALES
                  </Link>
                </div>
              </div>
            )}
            {item.label === "SUNGLASSES" && hovered === "SUNGLASSES" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[700px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                <div className="flex flex-row gap-12 w-full">
                  <div className="flex flex-col gap-2 min-w-[220px]">
                    <div className="font-bold mb-2">TOP DESIGNERS</div>
                    {sunglassesDropdown.topDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-center min-w-[220px]">
                    <Image
                      src={sunglassesDropdown.image.src}
                      alt={sunglassesDropdown.image.alt}
                      width={220}
                      height={220}
                      className="object-cover rounded mb-2"
                      style={{ width: 220, height: 220 }}
                      priority
                    />
                    <div className="text-center font-semibold text-xs mt-2">
                      {sunglassesDropdown.image.caption}
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-4">
                  <Link
                    href="/sunglasses"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    ALL SUNGLASSES
                  </Link>
                </div>
              </div>
            )}
            {item.label === "ACCESSORIES" && hovered === "ACCESSORIES" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[1100px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                <div className="flex flex-row gap-12 w-full">
                  <div className="flex flex-col gap-2 min-w-[220px]">
                    <div className="font-bold mb-2">ACCESSORIES</div>
                    {accessoriesDropdown.categories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="hover:underline text-black text-xs py-0.5"
                        onClick={() => setHovered(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold mb-2">TOP DESIGNERS</div>
                    {accessoriesDropdown.topDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold mb-2">NEW DESIGNERS</div>
                    {accessoriesDropdown.newDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-center min-w-[220px]">
                    <Image
                      src={accessoriesDropdown.image.src}
                      alt={accessoriesDropdown.image.alt}
                      width={220}
                      height={220}
                      className="object-cover rounded mb-2"
                      style={{ width: 220, height: 220 }}
                      priority
                    />
                    <div className="text-center font-semibold text-xs mt-2">
                      {accessoriesDropdown.image.caption}
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-4">
                  <Link
                    href="/accessories"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    ALL ACCESSORIES
                  </Link>
                </div>
              </div>
            )}
            {item.label === "JEWELLERY & WATCHES" &&
              hovered === "JEWELLERY & WATCHES" && (
                <div
                  ref={dropdownRef}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[700px] flex flex-col gap-6 animate-fade-in z-40 border"
                >
                  <div className="flex flex-row gap-12 w-full">
                    <div className="flex flex-col gap-2 min-w-[220px]">
                      <div className="font-bold mb-2">JEWELLERY & WATCHES</div>
                      {jewelleryDropdown.categories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          className="hover:underline text-black text-xs py-0.5"
                          onClick={() => setHovered(null)}
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 min-w-[180px]">
                      <div className="font-bold mb-2">NEW DESIGNERS</div>
                      {jewelleryDropdown.newDesigners.map((designer) => (
                        <span
                          key={designer}
                          className="text-black text-xs py-0.5"
                        >
                          {designer}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex mt-4">
                    <Link
                      href="/jewellery-watches"
                      className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                      onClick={() => setHovered(null)}
                    >
                      ALL JEWELLERY & WATCHES
                    </Link>
                  </div>
                </div>
              )}
            {item.label === "NEW" && hovered === "NEW" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-6 min-w-[420px] flex flex-row gap-6 animate-fade-in z-40 border"
              >
                {/* Left: List */}
                <div className="flex flex-col gap-2 min-w-[160px]">
                  <div className="font-bold mb-2">NEW</div>
                  {newDropdown.items.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      className="hover:underline text-black text-xs py-0.5"
                      onClick={() => setHovered(null)}
                    >
                      {cat.label}
                    </Link>
                  ))}
                  <Link
                    href="/new"
                    className="mt-4 bg-black text-white text-center py-2 rounded w-full text-sm font-medium"
                    onClick={() => setHovered(null)}
                  >
                    ALL NEW PRODUCTS
                  </Link>
                </div>
                {/* Right: Image */}
                <div className="flex flex-col items-center min-w-[220px]">
                  <Image
                    src="https://images.ctfassets.net/cesi7lh7rfv6/4hKcxgxfyYr7Q4cG5GIKZ0/355c49f355c9331098891c585eda68c3/A0483024-Gucci-bag-8x9.jpg?w=500&fm=webp"
                    alt="Basket Bag"
                    width={220}
                    height={220}
                    className="object-cover rounded mb-2"
                    style={{ width: 220, height: 220 }}
                    priority
                  />
                  <div className="text-center font-semibold text-xs mt-2">
                    Our latest luxury styles
                  </div>
                </div>
              </div>
            )}
            {item.label === "DESIGNERS" && hovered === "DESIGNERS" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-6 min-w-[260px] flex flex-col gap-2 animate-fade-in z-40 border"
              >
                <div className="font-bold mb-2">TOP DESIGNERS</div>
                <div className="grid grid-cols-1 gap-1 text-black text-xs">
                  {designersDropdown.map((designer) => (
                    <span key={designer}>{designer}</span>
                  ))}
                </div>
                <Link
                  href="/designers"
                  className="mt-4 bg-black text-white text-center py-2 rounded w-full text-sm font-medium"
                  onClick={() => setHovered(null)}
                >
                  TO ALL DESIGNERS
                </Link>
              </div>
            )}
            {item.label === "BAGS" && hovered === "BAGS" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[1100px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                {/* Multi-column dropdown */}
                <div className="flex flex-row gap-12 w-full">
                  {/* Categories */}
                  <div className="flex flex-col gap-2 min-w-[150px]">
                    <div className="font-bold mb-2">HANDBAGS</div>
                    {bagsDropdown.handbags.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="hover:underline text-black text-xs py-0.5"
                        onClick={() => setHovered(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[150px]">
                    <div className="font-bold mb-2">SHOULDER BAGS</div>
                    {bagsDropdown.shoulderBags.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="hover:underline text-black text-xs py-0.5"
                        onClick={() => setHovered(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold mb-2">BUSINESS & TRAVEL BAGS</div>
                    {bagsDropdown.businessTravel.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="hover:underline text-black text-xs py-0.5"
                        onClick={() => setHovered(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                  {/* Designers */}
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold mb-2">TOP DESIGNERS</div>
                    {bagsDropdown.topDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <div className="font-bold mb-2">NEW DESIGNERS</div>
                    {bagsDropdown.newDesigners.map((designer) => (
                      <span
                        key={designer}
                        className="text-black text-xs py-0.5"
                      >
                        {designer}
                      </span>
                    ))}
                  </div>
                  {/* Image */}
                  <div className="flex flex-col items-center min-w-[220px]">
                    <Image
                      src="https://images.ctfassets.net/cesi7lh7rfv6/3MpQ7olggvwR88tlBDU57w/0baf5f2ec6c3392f9a4043de0cf03c32/Vacation_SnippetBasketBags.jpg?w=500&fm=webp"
                      alt="Basket Bag"
                      width={220}
                      height={220}
                      className="object-cover rounded mb-2"
                      style={{ width: 220, height: 220 }}
                      priority
                    />
                    <div className="text-center font-semibold text-xs mt-2">
                      Summer must have: Basket Bags
                    </div>
                  </div>
                </div>
                {/* All Bags button below columns */}
                <div className="w-full flex mt-4">
                  <Link
                    href="/bags"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    ALL BAGS
                  </Link>
                </div>
              </div>
            )}
            {/* MEN Dropdown */}
            {item.label === "MEN" && hovered === "MEN" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[400px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                <div className="flex flex-col gap-2 min-w-[220px]">
                  <div className="font-bold mb-2">MEN</div>
                  {menDropdown.categories.map((cat) => (
                    <Link
                      key={cat.label}
                      href={cat.href}
                      className="hover:underline text-black text-xs py-0.5"
                      onClick={() => setHovered(null)}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
                <div className="w-full flex mt-4">
                  <Link
                    href="/mens"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    ALL FOR MEN
                  </Link>
                </div>
              </div>
            )}
            {/* INSPIRATION Dropdown */}
            {item.label === "INSPIRATION" && hovered === "INSPIRATION" && (
              <div
                ref={dropdownRef}
                onMouseLeave={() => setHovered(null)}
                className="absolute left-1/2 -translate-x-1/2 top-8 bg-white shadow-lg rounded p-8 min-w-[1100px] flex flex-col gap-6 animate-fade-in z-40 border"
              >
                <div className="flex flex-row gap-12 w-full">
                  <div className="flex flex-col gap-2 min-w-[320px]">
                    <div className="font-bold mb-2">INSPIRATION</div>
                    {inspirationDropdown.categories.map((cat) => (
                      <Link
                        key={cat.label}
                        href={cat.href}
                        className="hover:underline text-black text-xs py-0.5"
                        onClick={() => setHovered(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-center min-w-[320px]">
                    <Image
                      src={inspirationDropdown.image.src}
                      alt={inspirationDropdown.image.alt}
                      width={320}
                      height={400}
                      className="object-cover rounded mb-2"
                      style={{ width: 320, height: 400 }}
                      priority
                    />
                    <div className="text-center font-semibold text-xs mt-2">
                      {inspirationDropdown.image.caption}
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-4">
                  <Link
                    href="/inspiration"
                    className="bg-black text-white text-center py-2 px-8 rounded text-xs font-medium mx-auto"
                    onClick={() => setHovered(null)}
                  >
                    INSPIRATION
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
