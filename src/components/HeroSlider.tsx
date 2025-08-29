"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

export type Slide = {
  id: string;
  headline: string;
  copy: string;
  image: string;
  ctas: { label: string; href: string; primary?: boolean }[];
};

export default function HeroSlider({
  slides: slidesProp,
}: {
  slides?: Slide[];
}) {
  const slides: Slide[] = useMemo(
    () =>
      slidesProp ?? [
        {
          id: "slide-1",
          headline: "Designer brands. Outlet prices.",
          copy: "Shop womens, mens, kids and beauty. New drops every day — grab the best labels with up to 70% off.",
          ctas: [
            { label: "Shop Womens", href: "/womens", primary: true },
            { label: "Shop Mens", href: "/mens" },
          ],
          image:
            "https://images.unsplash.com/photo-1520975592480-8b456906c813?q=80&w=1400",
        },
        {
          id: "slide-2",
          headline: "New season just landed",
          copy: "Fresh drops from your favourite brands — limited stock moves fast.",
          ctas: [
            { label: "Shop New In", href: "/new", primary: true },
            { label: "View Brands", href: "/brands" },
          ],
          image:
            "https://images.unsplash.com/photo-1520974735194-67d7a59bcded?q=80&w=1400",
        },
      ],
    [slidesProp]
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Keep index in sync while user scrolls/swipes
  useEffect(() => {
    // handler reads the ref each time (so TS knows we null-check at call time)
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const i = Math.round(el.scrollLeft / Math.max(1, w));
      setIndex(Math.min(slides.length - 1, Math.max(0, i)));
    };

    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [slides.length]);

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setIndex(i);
  };

  const prev = () => scrollTo((index - 1 + slides.length) % slides.length);
  const next = () => scrollTo((index + 1) % slides.length);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Slider track */}
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
          >
            {slides.map((s) => (
              <div key={s.id} className="relative min-w-full snap-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.headline}
                  className="h-[360px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-xl text-white">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow">
                    {s.headline}
                  </h1>
                  <p className="mt-3 text-sm sm:text-base text-white/90 drop-shadow">
                    {s.copy}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {s.ctas.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className={
                          c.primary
                            ? "rounded-md bg-black px-5 py-3 text-white text-sm font-semibold hover:bg-gray-900"
                            : "rounded-md border px-5 py-3 text-sm font-semibold hover:bg-white/90 bg-white/80 backdrop-blur text-gray-900"
                        }
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next buttons (no hash changes, no vertical jump) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
            <button
              type="button"
              onClick={prev}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to ${s.headline}`}
                aria-current={i === index}
                onClick={() => scrollTo(i)}
                className={
                  i === index
                    ? "h-2.5 w-2.5 rounded-full bg-white"
                    : "h-2.5 w-2.5 rounded-full bg-white/60 hover:bg-white"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
