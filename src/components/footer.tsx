"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f5] text-black py-16 mt-5 relative">
      <div className="grid grid-cols-3 px-5 mx-24">
        {/* LEFT SECTION */}
        <div className="col-span-2 grid grid-rows-3">
          <div className="grid grid-cols-4 gap-4 mb-10 row-span-1">
            {/* HELP & CONTACT */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">HELP & CONTACT</h3>
              <ul className="space-y-2 text-[16px]">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">Service Guarantee</Link>
                </li>
                <li>
                  <Link href="#">Shipping & Delivery</Link>
                </li>
              </ul>
            </div>
            {/* PRODUCT AND CARE TIPS */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">
                PRODUCT AND CARE TIPS
              </h3>
              <ul className="space-y-2 text-[16px]">
                <li>
                  <Link href="#">Care Tips</Link>
                </li>
                <li>
                  <Link href="#">Jewellery Cleaning Tips</Link>
                </li>
                <li>
                  <Link href="#">Shoe Care Tips</Link>
                </li>
                <li>
                  <Link href="#">Sunglasses guide</Link>
                </li>
              </ul>
            </div>
            {/* ABOUT DY OFFICIAL */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">ABOUT DY OFFICIAL</h3>
              <ul className="space-y-2 text-[16px]">
                <li>
                  <Link href="#">Corporate</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
                <li>
                  <Link href="#">Affiliate Program</Link>
                </li>
                <li>
                  <Link href="#">Lexicon</Link>
                </li>
              </ul>
            </div>
            {/* LEGAL INFORMATION */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">LEGAL INFORMATION</h3>
              <ul className="space-y-2 text-[16px]">
                <li>
                  <Link href="#">Data Privacy</Link>
                </li>
                <li>
                  <Link href="#">Imprint</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Change cookie settings</Link>
                </li>
                <li>
                  <Link href="#">Eye-Able Assist</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Store Info and Copyright */}
          <div className="row-span-2">
            {/* Store Info */}
            <div>
              <div className="mb-2 font-semibold text-sm">
                YOUR CURRENT STORE
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🇬🇧</span>
                <span>United Kingdom</span>
                <button className="underline font-semibold text-black ml-2">
                  Change
                </button>
              </div>
              <div className="text-sm text-gray-700 mb-6">
                Please note that we only ship to United Kingdom (Northern
                Ireland excluded) from www.dyofficial.co.uk
              </div>
            </div>
            {/* Copyright & Info */}
            <div className="text-sm text-gray-700">
              <div className="mb-2">
                © {new Date().getFullYear()} – DY Official GmbH
              </div>
              <div className="mb-2"></div>
              *Voucher valid until 08/09/2025 and can be used multiple times on
              all items on the dyofficial.co.uk/special-offers website. The
              conditions set out in §9 of the Terms and Conditions apply.
              <div className="mt-2">
                Individual brands and items may be excluded.
              </div>
              <div>
                Credit provided, all prices incl. VAT. and without shipping
                costs.
              </div>
              <div>
                In the case of payment by installment, the number of
                installments and final rates may differ slightly. The
                celebrities named or presented have not endorsed, recommended or
                approved any of the items offered on site.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-span-1 ml-16">
          {/* Payment and Delivery & Service & Security */}
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-sm">
                PAYMENT AND DELIVERY
              </h3>
              <div className="grid grid-cols-8">
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/visa.svg"
                    alt="Visa"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/mastercard.svg"
                    alt="Mastercard"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/americanexpress.svg"
                    alt="American Express"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/paypal.svg"
                    alt="PayPal"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/discover.svg"
                    alt="Discover"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/diners-club.svg"
                    alt="Diners Club"
                    width={50}
                    height={50}
                  />
                </span>
                <span className="text-2xl px-2.5 pt-5">
                  <Image
                    src="/icons/ups.svg"
                    alt="Ups"
                    width={50}
                    height={50}
                  />
                </span>
              </div>
            </div>
            <h3 className="font-semibold mb-3 text-sm">SERVICE & SECURITY</h3>
            <div>
              {/* Top row: 3 columns */}
              <div className="grid grid-cols-3 gap-4 text-center mb-3">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="mb-2 pl-2.5">
                    <Image
                      src="/icons/free-shipping.svg"
                      alt="Free Shipping"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="text-xs">
                    Free Standard Shipping
                    <br />
                    from 200 GBP
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="mb-2">
                    <Image
                      src="/icons/return-policy.svg"
                      alt="Return Policy"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-xs">
                    30 days free-of-charge return policy
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <Image
                      src="/icons/payment-options.svg"
                      alt="Payment Options"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-xs">
                    Different payment
                    <br />
                    options available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust & PayPal */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src="/icons/trusted-shops.svg"
                  alt="Trusted Shops"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-xs text-center">Trusted Shops certified</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src="/icons/paypal.svg"
                  alt="PayPal"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-xs">Pay in 3 installments</div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="font-semibold text-sm">STAY IN CONTACT WITH US</div>
            <div className="grid grid-cols-8">
              <div className="px-2.5 pt-2.5">
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-2.5 pt-2.5">
                <Image
                  src="/icons/pinterest.png"
                  alt="Pinterest"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-2.5 pt-2.5">
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-2.5 pt-2.5">
                <Image
                  src="/icons/tiktok.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                />
              </div>
              <div className="px-2.5 pt-2.5">
                <Image
                  src="/icons/email.png"
                  alt="Email"
                  width={40}
                  height={40}
                />
              </div>
              <div className="col-span-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
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
    </footer>
  );
}
