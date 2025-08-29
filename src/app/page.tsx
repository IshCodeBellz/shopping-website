import Link from "next/link";
import productsData from "@/data/clothing_products.json";
import HeroSlider from "@/components/heroslider";

// Home page matching the header/footer theme – clean, bold, image‑led
// App Router page: place this file at app/page.tsx

export default async function Home() {
  const trendingProducts = await getTrendingProducts();
  return (
    <main>
      <HeroSlider />
      <CategoryTiles />
      <PromoBanner />
      <TrendingGrid items={trendingProducts} />
      <BrandStrip />
      <EditorialSplit />
    </main>
  );
}

// ---- Sections ---------------------------------------------------------------

// function HeroSlider() {
//   const slides = [
//     {
//       id: "slide-1",
//       headline: "Designer brands. Outlet prices.",
//       copy: "Shop womens, mens, kids and beauty. New drops every day — grab the best labels with up to 70% off.",
//       ctas: [
//         { label: "Shop Womens", href: "/womens", primary: true },
//         { label: "Shop Mens", href: "/mens", primary: false },
//       ],
//       image:
//         "https://images.unsplash.com/photo-1520975592480-8b456906c813?q=80&w=1400",
//     },
//     {
//       id: "slide-2",
//       headline: "New season just landed",
//       copy: "Fresh drops from your favourite brands — limited stock moves fast.",
//       ctas: [
//         { label: "Shop New In", href: "/new", primary: true },
//         { label: "View Brands", href: "/brands", primary: false },
//       ],
//       image:
//         "https://images.unsplash.com/photo-1520974735194-67d7a59bcded?q=80&w=1400",
//     },
//   ];

//   return (
//     <section className="bg-gray-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
//         <div className="relative overflow-hidden rounded-2xl">
//           {/* Slider track */}
//           <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar">
//             {slides.map((s, idx) => (
//               <div
//                 key={s.id}
//                 id={s.id}
//                 className="relative min-w-full snap-start"
//               >
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={s.image}
//                   alt={s.headline}
//                   className="h-[360px] w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
//                 <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-xl text-white">
//                   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow">
//                     {s.headline}
//                   </h1>
//                   <p className="mt-3 text-sm sm:text-base text-white/90 drop-shadow">
//                     {s.copy}
//                   </p>
//                   <div className="mt-6 flex flex-wrap gap-3">
//                     {s.ctas.map((c) => (
//                       <Link
//                         key={c.label}
//                         href={c.href}
//                         className={
//                           c.primary
//                             ? "rounded-md bg-black px-5 py-3 text-white text-sm font-semibold hover:bg-gray-900"
//                             : "rounded-md border px-5 py-3 text-sm font-semibold hover:bg-white/90 bg-white/80 backdrop-blur text-gray-900"
//                         }
//                       >
//                         {c.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Prev/Next anchors */}
//                 <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
//                   <a
//                     className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
//                     href={`#${
//                       slides[(idx - 1 + slides.length) % slides.length].id
//                     }`}
//                     aria-label="Previous"
//                   >
//                     ‹
//                   </a>
//                   <a
//                     className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
//                     href={`#${slides[(idx + 1) % slides.length].id}`}
//                     aria-label="Next"
//                   >
//                     ›
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dots */}
//           <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
//             {slides.map((s) => (
//               <a
//                 key={s.id}
//                 href={`#${s.id}`}
//                 className="h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white"
//                 aria-label={`Go to ${s.headline}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function CategoryTiles() {
  const cats = [
    {
      label: "Womens",
      href: "/womens",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200",
    },
    {
      label: "Mens",
      href: "/mens",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200",
    },
    {
      label: "Kids",
      href: "/kids",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200",
    },
    {
      label: "Brands",
      href: "/brands",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200",
    },
    {
      label: "Beauty",
      href: "/beauty",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeader title="Shop by department" href="/brands" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cats.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group overflow-hidden rounded-2xl border"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.label}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold">
                <span>{c.label}</span>
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
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left text-sm">
          ✨ New drops daily · Free returns · Up to{" "}
          <span className="font-semibold">70% off</span>
        </p>
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-md bg-white/10 px-3 py-1">
            Trustpilot ★★★★☆
          </span>
          <span className="rounded-md bg-white/10 px-3 py-1">
            Secure checkout
          </span>
        </div>
      </div>
    </section>
  );
}

async function getTrendingProducts(): Promise<Product[]> {
  // Load from local JSON (typed, no `any`).
  try {
    let list: RawProduct[] = [];
    const data = productsData as unknown as
      | { products?: RawProduct[] }
      | RawProduct[];

    if (Array.isArray(data)) {
      list = data as RawProduct[];
    } else if (data && "products" in (data as { products?: RawProduct[] })) {
      list = (data as { products?: RawProduct[] }).products ?? [];
    }

    if (list.length) return list.map(mapRawProduct);
  } catch {}

  // Fallback to /public file if provided
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || ""}/clothing_products.json`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = (await res.json()) as
        | { products?: RawProduct[] }
        | RawProduct[];
      const list = Array.isArray(data)
        ? (data as RawProduct[])
        : data.products ?? [];
      if (list.length) return list.map(mapRawProduct);
    }
  } catch {}

  // Hard fallback so page still renders
  return [
    {
      id: 1,
      brand: "Nike",
      name: "Air Max 90",
      price: 89,
      rrp: 129,
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200",
      inStock: true,
    },
    {
      id: 2,
      brand: "Levi's",
      name: "501® Original",
      price: 59,
      rrp: 95,
      image:
        "https://images.unsplash.com/photo-1520975922203-bf7f29f54448?q=80&w=1200",
      inStock: true,
    },
    {
      id: 3,
      brand: "River Island",
      name: "Blazer",
      price: 49,
      rrp: 89,
      image:
        "https://images.unsplash.com/photo-1520974735194-67d7a59bcded?q=80&w=1200",
      inStock: true,
    },
    {
      id: 4,
      brand: "Calvin Klein",
      name: "Logo Tee",
      price: 29,
      rrp: 45,
      image:
        "https://images.unsplash.com/photo-1520975401790-5f5d3f0f0a83?q=80&w=1200",
      inStock: true,
    },
  ];
}

function TrendingGrid({ items }: { items: Product[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeader title="Trending now" href="/trending" />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  const brands = [
    "adidas",
    "Nike",
    "River Island",
    "Levi's",
    "Calvin Klein",
    "Tommy Hilfiger",
    "UGG",
    "The North Face",
  ];
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <SectionHeader title="Popular brands" href="/brands" />
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none]">
          {brands.map((b) => (
            <span
              key={b}
              className="inline-flex shrink-0 items-center rounded-xl border bg-white px-4 py-2 text-sm font-medium text-gray-800"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialSplit() {
  const cards = [
    {
      title: "Holiday Shop",
      href: "/edits/holiday",
      image:
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1400",
    },
    {
      title: "Wedding Shop",
      href: "/edits/wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={c.title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 from-black/50 via-black/20 to-transparent bg-gradient-to-t" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <span
                  aria-hidden
                  className="translate-x-0 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ---- UI bits ----------------------------------------------------------------

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-lg font-semibold tracking-wide">
        {title.toUpperCase()}
      </h2>
      {href && (
        <Link href={href} className="text-sm font-semibold hover:underline">
          View all
        </Link>
      )}
    </div>
  );
}

type RawProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  inStock: boolean;
  sizes: (string | number)[];
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
};

type Product = {
  id: number;
  brand: string;
  name: string;
  price: number;
  rrp?: number;
  image: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  category?: string;
  currency?: string;
};

function mapRawProduct(p: RawProduct): Product {
  return {
    id: p.id,
    brand: p.brand,
    name: p.name,
    price: p.price,
    rrp: undefined, // no RRP in file; set if your data has it
    image: p.images?.[0] || "https://placehold.co/600x800/png",
    rating: p.rating,
    reviews: p.reviews,
    inStock: p.inStock,
    category: p.category,
    currency: p.currency,
  };
}

function formatPrice(value: number, currency = "GBP") {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
    }).format(value);
  } catch {
    const symbol = currency === "GBP" ? "£" : "";
    return symbol + value.toFixed(2);
  }
}

function ProductCard({ product }: { product: Product }) {
  const saving =
    product.rrp && product.rrp > product.price
      ? Math.round(((product.rrp - product.price) / product.rrp) * 100)
      : 0;

  return (
    <Link
      href="#"
      className="group overflow-hidden rounded-2xl border bg-white"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {saving > 0 && (
          <span className="absolute left-2 top-2 rounded-md bg-black/80 px-2 py-1 text-[11px] font-semibold text-white">
            SAVE {saving}%
          </span>
        )}
        {product.inStock === false && (
          <span className="absolute right-2 top-2 rounded-md bg-red-600 px-2 py-1 text-[11px] font-semibold text-white">
            SOLD OUT
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-500">{product.brand}</p>
        <p className="mt-1 text-sm font-medium">{product.name}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-sm font-semibold">
            {formatPrice(product.price, product.currency)}
          </span>
          {product.rrp && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.rrp, product.currency)}
            </span>
          )}
        </div>
        {(product.rating || product.reviews) && (
          <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
            <span className="inline-flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  className={
                    (product.rating ?? 0) > i + 0.5
                      ? "h-3.5 w-3.5 fill-amber-400"
                      : "h-3.5 w-3.5 fill-gray-200"
                  }
                >
                  <path d="M10 .9l2.6 5.3 5.8.9-4.2 4.1 1 5.8L10 14.8 4.8 17l1-5.8L1.6 7.1l5.8-.9L10 .9z" />
                </svg>
              ))}
            </span>
            <span>
              {(product.rating ?? 0).toFixed(1)} • {product.reviews ?? 0}{" "}
              reviews
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
