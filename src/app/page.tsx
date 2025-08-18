import Link from "next/link";

// Home page matching the header/footer theme – clean, bold, image‑led
// App Router page: place this file at app/page.tsx

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryTiles />
      <PromoBanner />
      <TrendingGrid />
      <BrandStrip />
      <EditorialSplit />
    </main>
  );
}

// ---- Sections ---------------------------------------------------------------

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Designer brands. Outlet prices.
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl">
            Shop womens, mens, kids and beauty. New drops every day — grab the
            best labels with up to 70% off.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/womens"
              className="rounded-md bg-black px-5 py-3 text-white text-sm font-semibold hover:bg-gray-900"
            >
              Shop Womens
            </Link>
            <Link
              href="/mens"
              className="rounded-md border px-5 py-3 text-sm font-semibold hover:bg-gray-100"
            >
              Shop Mens
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-2xl shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1520975592480-8b456906c813?q=80&w=1400"
              alt="Seasonal campaign"
              className="h-72 w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

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

function TrendingGrid() {
  const items: Product[] = [
    {
      id: 1,
      brand: "Nike",
      name: "Air Max 90",
      price: 89,
      rrp: 129,
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200",
    },
    {
      id: 2,
      brand: "Levi's",
      name: "501® Original",
      price: 59,
      rrp: 95,
      image:
        "https://images.unsplash.com/photo-1520975922203-bf7f29f54448?q=80&w=1200",
    },
    {
      id: 3,
      brand: "River Island",
      name: "Blazer",
      price: 49,
      rrp: 89,
      image:
        "https://images.unsplash.com/photo-1520974735194-67d7a59bcded?q=80&w=1200",
    },
    {
      id: 4,
      brand: "Calvin Klein",
      name: "Logo Tee",
      price: 29,
      rrp: 45,
      image:
        "https://images.unsplash.com/photo-1520975401790-5f5d3f0f0a83?q=80&w=1200",
    },
    {
      id: 5,
      brand: "adidas",
      name: "Forum Low",
      price: 69,
      rrp: 100,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
    },
    {
      id: 6,
      brand: "Tommy Hilfiger",
      name: "Polo",
      price: 39,
      rrp: 75,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200",
    },
    {
      id: 7,
      brand: "UGG",
      name: "Classic Mini",
      price: 99,
      rrp: 145,
      image:
        "https://images.unsplash.com/photo-1551107696-2d7b2a6c8a59?q=80&w=1200",
    },
    {
      id: 8,
      brand: "The North Face",
      name: "Nuptse Vest",
      price: 119,
      rrp: 170,
      image:
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200",
    },
  ];

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

type Product = {
  id: number;
  brand: string;
  name: string;
  price: number;
  rrp: number;
  image: string;
};

function ProductCard({ product }: { product: Product }) {
  const saving = Math.round(
    ((product.rrp - product.price) / product.rrp) * 100
  );

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
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-500">{product.brand}</p>
        <p className="mt-1 text-sm font-medium">{product.name}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-sm font-semibold">£{product.price}</span>
          <span className="text-xs text-gray-400 line-through">
            £{product.rrp}
          </span>
        </div>
      </div>
    </Link>
  );
}
