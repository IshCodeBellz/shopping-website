"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Next.js + Tailwind CSS Mega Header
 * - Hover a top-level item to reveal a mega menu, similar to Secret Sales.
 * - Click on mobile to expand accordions.
 * - Keyboard accessible (Tab/Shift+Tab, Escape to close, Arrow Left/Right to move between items).
 *
 * Usage: place <Header /> at the top of your layout.
 */

// ----- Example data model ----------------------------------------------------

type MegaColumn = {
  title?: string;
  links: { label: string; href: string }[];
};

type MegaCard = {
  title: string;
  href: string;
  image: string; // URL or /public path
};

type NavItem = {
  label: string;
  href?: string;
  columns?: MegaColumn[]; // left side
  cards?: MegaCard[]; // right side visuals
};

const NAV: NavItem[] = [
  {
    label: "Womens",
    href: "/womens",
    columns: [
      {
        title: "Shop by Product",
        links: [
          { label: "Shop All Clothing", href: "/womens/clothing" },
          { label: "New In Clothing", href: "/womens/new" },
          { label: "Activewear", href: "/womens/activewear" },
          { label: "Coats & Jackets", href: "/womens/coats" },
          { label: "Dresses", href: "/womens/dresses" },
          { label: "Hoodies & Sweatshirts", href: "/womens/hoodies" },
          { label: "Jeans", href: "/womens/jeans" },
          { label: "Jumpers & Cardigans", href: "/womens/knitwear" },
          { label: "Jumpsuits & Playsuits", href: "/womens/jumpsuits" },
          { label: "Lingerie", href: "/womens/lingerie" },
        ],
      },
      {
        links: [
          { label: "Nightwear & Loungewear", href: "/womens/nightwear" },
          { label: "Shirts & Blouses", href: "/womens/shirts" },
          { label: "Shorts", href: "/womens/shorts" },
          { label: "Skirts", href: "/womens/skirts" },
          { label: "Skiwear", href: "/womens/ski" },
          { label: "Socks & Hosiery", href: "/womens/socks" },
          { label: "Swimwear", href: "/womens/swim" },
          { label: "Tops & T-Shirts", href: "/womens/tops" },
          { label: "Tracksuits", href: "/womens/tracksuits" },
          { label: "Trousers & Leggings", href: "/womens/trousers" },
        ],
      },
    ],
    cards: [
      {
        title: "River Island",
        href: "/brands/river-island",
        image:
          "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800",
      },
      {
        title: "Holiday Shop",
        href: "/edits/holiday",
        image:
          "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=800",
      },
      {
        title: "New Brand: Karen Millen",
        href: "/brands/karen-millen",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
      },
      {
        title: "The Wedding Shop",
        href: "/edits/wedding",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      },
    ],
  },
  {
    label: "Mens",
    href: "/mens",
    columns: [
      {
        title: "Shop by Product",
        links: [
          { label: "Shop All Clothing", href: "/mens/clothing" },
          { label: "New In Clothing", href: "/mens/new" },
          { label: "Activewear", href: "/mens/activewear" },
          { label: "Coats & Jackets", href: "/mens/coats" },
          { label: "Hoodies & Sweatshirts", href: "/mens/hoodies" },
          { label: "Jeans", href: "/mens/jeans" },
          { label: "Knitwear", href: "/mens/knitwear" },
          { label: "Loungewear", href: "/mens/loungewear" },
        ],
      },
      {
        links: [
          { label: "Shirts", href: "/mens/shirts" },
          { label: "Shorts", href: "/mens/shorts" },
          { label: "Suits", href: "/mens/suits" },
          { label: "Swimwear", href: "/mens/swim" },
          { label: "Tops & T-Shirts", href: "/mens/tops" },
          { label: "Tracksuits", href: "/mens/tracksuits" },
          { label: "Trousers & Chinos", href: "/mens/trousers" },
          { label: "Underwear & Socks", href: "/mens/underwear" },
        ],
      },
    ],
    cards: [
      {
        title: "Mens Holiday Shop",
        href: "/mens/holiday",
        image:
          "https://images.unsplash.com/photo-1520975922203-bf7f29f54448?q=80&w=800",
      },
      {
        title: "Suiting",
        href: "/mens/suits",
        image:
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800",
      },
      {
        title: "New Season Trainers",
        href: "/mens/trainers",
        image:
          "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=800",
      },
      {
        title: "River Island Men",
        href: "/brands/river-island-men",
        image:
          "https://images.unsplash.com/photo-1505904267569-8f3b7a44e0a7?q=80&w=800",
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    columns: [
      {
        title: "Shop by Product",
        links: [
          { label: "Shop All Kids", href: "/kids/clothing" },
          { label: "Baby (0-24m)", href: "/kids/baby" },
          { label: "Girls", href: "/kids/girls" },
          { label: "Boys", href: "/kids/boys" },
          { label: "Shoes", href: "/kids/shoes" },
          { label: "Accessories", href: "/kids/accessories" },
          { label: "Swimwear", href: "/kids/swim" },
          { label: "Nightwear", href: "/kids/nightwear" },
        ],
      },
      {
        links: [
          { label: "School Uniform", href: "/kids/school" },
          { label: "Tops", href: "/kids/tops" },
          { label: "Bottoms", href: "/kids/bottoms" },
          { label: "Dresses & Skirts", href: "/kids/dresses" },
          { label: "Hoodies & Sweatshirts", href: "/kids/hoodies" },
          { label: "Coats & Jackets", href: "/kids/coats" },
          { label: "Sportswear", href: "/kids/sportswear" },
          { label: "Multipacks & Sets", href: "/kids/sets" },
        ],
      },
    ],
    cards: [
      {
        title: "Back to School",
        href: "/kids/school",
        image:
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800",
      },
      {
        title: "Mini Brands",
        href: "/kids/mini-brands",
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
      },
      {
        title: "Kids Holiday Shop",
        href: "/kids/holiday",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      },
      {
        title: "Baby Essentials",
        href: "/kids/baby-essentials",
        image:
          "https://images.unsplash.com/photo-1503457574465-9ba4e1d5f043?q=80&w=800",
      },
    ],
  },
  {
    label: "Brands",
    href: "/brands",
    columns: [
      {
        title: "Top Brands",
        links: [
          { label: "adidas", href: "/brands/adidas" },
          { label: "Nike", href: "/brands/nike" },
          { label: "River Island", href: "/brands/river-island" },
          { label: "Levi's", href: "/brands/levis" },
          { label: "The North Face", href: "/brands/the-north-face" },
          { label: "Calvin Klein", href: "/brands/calvin-klein" },
          { label: "Tommy Hilfiger", href: "/brands/tommy-hilfiger" },
          { label: "UGG", href: "/brands/ugg" },
        ],
      },
      {
        title: "Shop by Category",
        links: [
          { label: "All Brands A–Z", href: "/brands/a-z" },
          { label: "Designer", href: "/brands/designer" },
          { label: "High Street", href: "/brands/high-street" },
          { label: "Sportswear", href: "/brands/sportswear" },
          { label: "Footwear", href: "/brands/footwear" },
          { label: "Beauty Brands", href: "/brands/beauty" },
          { label: "Sustainable", href: "/brands/sustainable" },
          { label: "New In Brands", href: "/brands/new" },
        ],
      },
    ],
    cards: [
      {
        title: "Brand Spotlight",
        href: "/brands/spotlight",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800",
      },
      {
        title: "Trending Now",
        href: "/brands/trending",
        image:
          "https://images.unsplash.com/photo-1520975823551-85d724b3bf22?q=80&w=800",
      },
      {
        title: "Designer Outlet",
        href: "/brands/designer-outlet",
        image:
          "https://images.unsplash.com/photo-1520975940276-7d1adf4b50f5?q=80&w=800",
      },
      {
        title: "Sportswear Edit",
        href: "/brands/sportswear",
        image:
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800",
      },
    ],
  },
  {
    label: "Beauty",
    href: "/beauty",
    columns: [
      {
        title: "Shop by Category",
        links: [
          { label: "Makeup", href: "/beauty/makeup" },
          { label: "Skincare", href: "/beauty/skincare" },
          { label: "Haircare", href: "/beauty/haircare" },
          { label: "Fragrance", href: "/beauty/fragrance" },
          { label: "Bath & Body", href: "/beauty/bath-body" },
          { label: "Tools & Brushes", href: "/beauty/tools" },
          { label: "Men's Grooming", href: "/beauty/mens" },
          { label: "Gift Sets", href: "/beauty/gift-sets" },
        ],
      },
      {
        links: [
          { label: "New In Beauty", href: "/beauty/new" },
          { label: "Bestsellers", href: "/beauty/bestsellers" },
          { label: "Vegan & Cruelty-Free", href: "/beauty/vegan" },
          { label: "SPF & Suncare", href: "/beauty/spf" },
          { label: "Wellness", href: "/beauty/wellness" },
          { label: "Beauty Under £20", href: "/beauty/under-20" },
          { label: "Travel Minis", href: "/beauty/minis" },
          { label: "Clearance", href: "/beauty/outlet" },
        ],
      },
    ],
    cards: [
      {
        title: "New Season Skincare",
        href: "/beauty/skincare",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800",
      },
      {
        title: "Fragrance Offers",
        href: "/beauty/fragrance",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
      },
      {
        title: "Haircare Heroes",
        href: "/beauty/haircare",
        image:
          "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800",
      },
      {
        title: "Makeup Must-Haves",
        href: "/beauty/makeup",
        image:
          "https://images.unsplash.com/photo-1512203492609-8f0f97da6fe0?q=80&w=800",
      },
    ],
  },
];

// ----- Header component ------------------------------------------------------

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const leaveTimer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const open = (i: number) => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    setOpenIndex(i);
  };

  const closeSoon = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
  };

  const onKeyDownTop = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setOpenIndex((i + 1) % NAV.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setOpenIndex((i - 1 + NAV.length) % NAV.length);
    } else if (e.key === "Escape") {
      setOpenIndex(null);
    } else if (e.key === "Enter" || e.key === " ") {
      setOpenIndex(openIndex === i ? null : i);
    }
  };

  return (
    <div
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b"
      ref={containerRef}
    >
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-wide">
            {/* SECRET <span className="font-black">SALES</span> */}{" "}
            <Image
              src="/profile.png"
              width={50}
              height={50}
              alt="Picture of logo"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex h-16 items-center gap-8">
            {NAV.map((item, i) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.columns ? open(i) : setOpenIndex(null)
                }
                onMouseLeave={closeSoon}
              >
                <button
                  onFocus={() => (item.columns ? open(i) : setOpenIndex(null))}
                  onKeyDown={(e) => onKeyDownTop(e, i)}
                  className={
                    "inline-flex items-center gap-1 px-2 text-sm font-medium leading-none transition-colors " +
                    (openIndex === i
                      ? "text-black"
                      : "text-gray-700 hover:text-black")
                  }
                  aria-expanded={openIndex === i}
                  aria-haspopup={!!item.columns}
                >
                  {item.label}
                  {item.columns && (
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                    </svg>
                  )}
                </button>

                {/* Mega panel */}
                {item.columns && openIndex === i && (
                  <div
                    className="absolute left-0 top-full w-screen max-w-6xl -translate-x-1/2 ml-1/2" // center under header
                    onMouseEnter={() => open(i)}
                    onMouseLeave={closeSoon}
                  >
                    <div className="mt-2 rounded-2xl border bg-white shadow-xl">
                      <div className="grid grid-cols-12 gap-6 p-6">
                        {/* Columns */}
                        <div className="col-span-7 grid grid-cols-2 gap-6">
                          {item.columns.map((col, idx) => (
                            <div key={idx}>
                              {col.title && (
                                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                  {col.title}
                                </p>
                              )}
                              <ul className="space-y-2">
                                {col.links.map((l) => (
                                  <li key={l.label}>
                                    <Link
                                      href={l.href}
                                      className="text-sm text-gray-800 hover:text-black"
                                    >
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Visual cards */}
                        {item.cards && (
                          <div className="col-span-5 grid grid-cols-2 gap-4">
                            {item.cards.slice(0, 4).map((card) => (
                              <Link
                                key={card.title}
                                href={card.href}
                                className="group overflow-hidden rounded-xl border focus:outline-none focus:ring-2 focus:ring-black/10"
                              >
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                                <div className="flex items-center justify-between px-3 py-2 text-sm font-medium">
                                  <span>{card.title}</span>
                                  <span
                                    aria-hidden
                                    className="translate-x-0 transition-transform group-hover:translate-x-0.5"
                                  >
                                    →
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons placeholder */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="hidden md:inline-flex p-2" aria-label="Search">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button className="hidden md:inline-flex p-2" aria-label="Account">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
                <path d="M20 22a8 8 0 10-16 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden border-t ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3">
          {NAV.map((item, i) => (
            <details
              key={item.label}
              className="group border-b py-2 last:border-0"
            >
              <summary className="flex list-none cursor-pointer items-center justify-between py-2 text-base font-medium">
                {item.label}
                {item.columns && (
                  <svg
                    className="h-5 w-5 transition group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                )}
              </summary>

              {item.columns ? (
                <div className="grid grid-cols-1 gap-6 pb-4 pl-1">
                  {item.columns.map((col, idx) => (
                    <div key={idx}>
                      {col.title && (
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {col.title}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <Link
                              href={l.href}
                              className="text-sm text-gray-800"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {item.cards && (
                    <div className="grid grid-cols-2 gap-3">
                      {item.cards.slice(0, 2).map((card) => (
                        <Link
                          key={card.title}
                          href={card.href}
                          className="overflow-hidden rounded-xl border"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={card.image}
                            alt={card.title}
                            className="h-28 w-full object-cover"
                          />
                          <div className="px-3 py-2 text-sm font-medium">
                            {card.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="pb-4 pl-1">
                  <Link
                    href={item.href ?? "#"}
                    className="text-sm text-gray-800"
                  >
                    Shop {item.label}
                  </Link>
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Tailwind config notes
 * Make sure you have Tailwind set up in Next.js. No extra plugins are required.
 * The component uses arbitrary variants like `group-open:` which need Tailwind v3.2+.
 */
