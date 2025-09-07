"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type CategoryTile = {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt?: string;
};

export function CategoryTiles({ tiles }: { tiles: CategoryTile[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-[70px] mb-[35px]">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {tiles.map((t, i) => (
          <motion.article
            key={t.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative isolate"
          >
            <Link
              href={t.href}
              className="block overflow-hidden bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
            >
              {/* Title */}
              <div className="px-2 pt-6 text-center sm:pt-8">
                <h3 className="tracking-wide text-[22px] font-medium uppercase text-black">
                  {t.title}
                </h3>
              </div>

              {/* Image wrapper */}
              <div
                className="relative mt-3 w-full"
                style={{
                  height: "457.49px",
                  maxWidth: "406.66px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Image
                  src={t.imgSrc}
                  alt={t.imgAlt ?? t.title}
                  width={406.66}
                  height={457.49}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03]"
                  priority={i === 0}
                />
              </div>

              {/* CTA */}
              <div className="px-6 pb-8 pt-6">
                <div className="mx-auto w-full max-w-sm">
                  <span
                    className="inline-flex w-full items-center justify-center rounded-md border border-black px-6 py-3 text-black text-sm font-medium tracking-wide uppercase transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-black group-hover:text-white group-focus:-translate-y-0.5 group-focus:bg-black group-focus:text-white"
                    aria-hidden
                  >
                    Discover Now
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
