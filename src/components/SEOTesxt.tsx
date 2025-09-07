"use client";

import React from "react";
import { useState } from "react";

export function SEOText({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto my-20 max-w-[1100px] px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div
          className={
            open ? "max-h-none" : "max-h-[520px] sm:max-h-none overflow-hidden"
          }
        >
          <div className="prose prose-neutral max-w-none prose-a:underline">
            {children}
          </div>
        </div>
        {/* Fade overlay only on mobile when collapsed */}
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent sm:hidden" />
        )}
      </div>
      <div className="mt-6 flex justify-center sm:hidden">
        <button
          onClick={() => setOpen((v: unknown) => !v)}
          className="rounded-md border border-black px-5 py-2 text-sm font-semibold uppercase tracking-wide"
          aria-expanded={open}
        >
          {open ? "Show less" : "Read more"}
        </button>
      </div>
    </section>
  );
}
