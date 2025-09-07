"use client";

import React from "react";
import Image from "next/image";
import { useState, useMemo } from "react";

export function NewsletterBanner({
  imgSrc,
  imgAlt = "Newsletter background",
  onSubmit,
}: {
  imgSrc: string;
  imgAlt?: string;
  onSubmit?: (email: string) => Promise<void> | void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isValid = useMemo(() => /\S+@\S+\.[A-Za-z]{2,}/.test(email), [email]);

  return (
    <section className="mx-auto my-20 max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden">
        <div className="relative h-[360px] w-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Content overlay */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4 text-center text-white">
          <p className="pointer-events-auto rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide backdrop-blur">
            10% Voucher*
          </p>
          <h3 className="pointer-events-auto text-2xl font-semibold tracking-wide">
            DY Official News: Never miss a thing
          </h3>

          {/* Form */}
          {submitted ? (
            <p className="pointer-events-auto text-base font-medium">
              Thanks! Check your inbox to confirm.
            </p>
          ) : (
            <form
              className="pointer-events-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!isValid) return;
                try {
                  await onSubmit?.(email);
                } finally {
                  setSubmitted(true);
                }
              }}
            >
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-white/40 bg-white/90 px-4 py-3 text-black placeholder-black/50 outline-none ring-0 focus:border-white focus:ring-2 focus:ring-white"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                disabled={!isValid}
                className="w-full rounded-md bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50 sm:w-56"
              >
                Sign Up Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
