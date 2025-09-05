"use client";

import Link from "next/link";

const NAV = [
  { label: "NEW", href: "/new" },
  { label: "DESIGNERS", href: "/designers" },
  { label: "BAGS", href: "/bags" },
  { label: "SHOES", href: "/shoes" },
  { label: "SUNGLASSES", href: "/sunglasses" },
  { label: "ACCESSORIES", href: "/accessories" },
  { label: "JEWELLERY & WATCHES", href: "/jewellery-watches" },
  { label: "MEN", href: "/men" },
  { label: "SALE", href: "/sale", className: "text-red-600 font-semibold" },
  { label: "INSPIRATION", href: "/inspiration" },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      {/* Top info bar */}
      <div className="w-full bg-gray-100 text-center text-sm py-2 text-gray-700">
        NEW: Pay later with Paypal - interest-free payments in up to 3 monthly
        installments
      </div>

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
            fashionette
          </span>
        </Link>

        {/* Right: Search, Wishlist, Cart */}
        <div className="flex items-center gap-6">
          <Link href="/search" aria-label="Search">
            <svg width={24} height={24} stroke="currentColor" fill="none">
              <circle cx="11" cy="11" r="7" strokeWidth={1.5} />
              <path d="M20 20l-3.5-3.5" strokeWidth={1.5} />
            </svg>
          </Link>
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
      <nav className="flex justify-center gap-8 py-2 text-base font-medium">
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={
              item.className ? item.className : "text-black hover:text-gray-700"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
