"use client";

import React from "react";
import Link from "next/link";

export default function Footer({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  return (
    <footer className="mt-16">
      {variant === "full" && <PaymentAndTrustStrip />}
      {variant === "full" && <NewsletterCTA />}
      <BottomFooter />
      <BackToTop />
    </footer>
  );
}

function PaymentAndTrustStrip() {
  const payments = [
    "Visa",
    "Mastercard",
    "Amex",
    "Apple Pay",
    "Google Pay",
    "PayPal",
    "Klarna",
  ];
  return (
    <div className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
          {payments.map((p) => (
            <li
              key={p}
              className="rounded-md border px-2.5 py-1 text-xs sm:text-[13px] font-medium text-gray-700"
            >
              {p}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span className="hidden sm:inline">Great</span>
          <span
            aria-label="Trustpilot rating"
            className="flex items-center gap-1"
          >
            <span className="inline-flex gap-0.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  className="h-4 w-4 fill-green-500"
                >
                  <path d="M10 .9l2.6 5.3 5.8.9-4.2 4.1 1 5.8L10 14.8 4.8 17l1-5.8L1.6 7.1l5.8-.9L10 .9z" />
                </svg>
              ))}
              <svg viewBox="0 0 20 20" className="h-4 w-4 fill-gray-300">
                <path d="M10 .9l2.6 5.3 5.8.9-4.2 4.1 1 5.8L10 14.8 4.8 17l1-5.8L1.6 7.1l5.8-.9L10 .9z" />
              </svg>
            </span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Trustpilot
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function NewsletterCTA() {
  const [dept, setDept] = React.useState<"womens" | "mens">("womens");
  const [consent, setConsent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | {
    ok: boolean;
    msg: string;
  }>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      setSubmitting(true);
      setStatus(null);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, dept, consent }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({
          ok: true,
          msg: data?.message || "Thanks! Please check your inbox.",
        });
        setEmail("");
      } else {
        setStatus({
          ok: false,
          msg: data?.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight">JOIN DY OFFICIAL</h2>
        <p className="mt-2 text-sm text-gray-600">
          For exclusive access to top sales straight to your inbox.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-6 space-y-6"
          aria-labelledby="newsletter-heading"
        >
          <fieldset className="flex items-center justify-center gap-6">
            <legend className="sr-only">Preferred department</legend>
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="dept"
                checked={dept === "womens"}
                onChange={() => setDept("womens")}
                className="h-4 w-4 border-gray-300"
              />
              Womenswear
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="dept"
                checked={dept === "mens"}
                onChange={() => setDept("mens")}
                className="h-4 w-4 border-gray-300"
              />
              Menswear
            </label>
          </fieldset>

          <label className="mx-auto flex max-w-xl items-start justify-center gap-2 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 border-gray-300"
            />
            Allow brands I purchase to email me future offers and discounts
          </label>

          <div className="mx-auto flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <input
              aria-label="Email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Start typing your email address here..."
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-60"
            >
              {submitting ? "SIGNING UP..." : "SIGN UP"}
            </button>
          </div>

          {status && (
            <p
              className={`text-sm ${
                status.ok ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.msg}
            </p>
          )}

          <p className="text-xs text-gray-500">
            By signing up you agree to our{" "}
            <Link className="underline hover:text-gray-700" href="/privacy">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function BottomFooter() {
  return (
    <div className="bg-neutral-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide">
              ABOUT DY OFFICIAL SALES
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Student &amp; Grad Discount
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Disabled Discount
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  NHS &amp; Key Worker Discount
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Brands A–Z
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <button className="mt-4 inline-flex items-center rounded-md border border-gray-600 px-3 py-1.5 text-xs text-gray-200 hover:border-gray-400">
              Cookie Preferences
            </button>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide">
              HELP
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide">
              FOLLOW US
            </h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-gray-600 p-2 hover:border-gray-400"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-gray-600 p-2 hover:border-gray-400"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M13 22v-8h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H6v4h3v8h4z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="rounded-full border border-gray-600 p-2 hover:border-gray-400"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2a10 10 0 00-3.5 19.4c-.1-.8-.2-2.1 0-3 .2-.8 1.3-5.3 1.3-5.3s-.3-.7-.3-1.7c0-1.6.9-2.8 2-2.8.9 0 1.3.7 1.3 1.5 0 1-.7 2.6-1 4-.3 1.2.6 2.1 1.8 2.1 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-4.9-5.1-4.9a5.3 5.3 0 00-5.6 5.3c0 1 .4 2.1 1 2.7.1.1.1.1.1 0l.4-1.5c0-.1 0-.2-.1-.3-.2-.5-.3-1.2-.3-1.9 0-1.8 1.3-3.6 3.7-3.6 2 0 3.4 1.3 3.4 3.2 0 2.1-1 5.5-2.6 5.5-.8 0-1.4-.6-1.2-1.4.2-.9.5-1.9.8-3 .3-1.2.6-2.4.6-3.2 0-.7-.4-1.3-1.2-1.3-1 0-1.8 1.2-1.8 2.7 0 1 .3 1.6.3 1.6l-1.2 5.1c-.2.9 0 2 0 2.8A10 10 0 1012 2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="rounded-full border border-gray-600 p-2 hover:border-gray-400"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18 2l-5.7 7.9L19 22h-3l-4.3-7L6 22H3l6.7-9.3L5 2h3l4 6.5L16 2h2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} DY Official Sales. All rights reserved.
        </div>
      </div>
    </div>
  );
}

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white shadow-lg ring-1 ring-white/10 hover:bg-neutral-700"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12z"
        />
      </svg>
    </button>
  );
}
