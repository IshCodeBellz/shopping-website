"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function HeroCarousel() {
  // Example images and text, replace with your own as needed
  const slides = [
    {
      left: "https://images.ctfassets.net/cesi7lh7rfv6/2NpOJoLMrOO11aDO42j9F3/c2bb882cea79857273d5457a43e721f0/NewArrivals_Desktop_2.jpg?fm=avif",
      right:
        "https://images.ctfassets.net/cesi7lh7rfv6/2NpOJoLMrOO11aDO42j9F3/c2bb882cea79857273d5457a43e721f0/NewArrivals_Desktop_2.jpg?fm=avif",
      mobile:
        "https://images.ctfassets.net/cesi7lh7rfv6/13WymXWWitCqGxmeK466zW/cc0a60e2d4b3e3f240bf8150fe0dc6b8/NewArrivals_Mobile_2.jpg?fm=avif",
      headline: "",
    },
    {
      left: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      right:
        "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mobile:
        "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "",
    },
    {
      left: "https://images.unsplash.com/photo-1744722091333-0300067b0029?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      right:
        "https://images.unsplash.com/photo-1744722126362-6cf42ef07c4b?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mobile:
        "https://images.unsplash.com/photo-1744722126362-6cf42ef07c4b?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setPrev(current);
      setDirection(1);
      setCurrent((prevIdx) => (prevIdx + 1) % slides.length);
    }, 20000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [current, slides.length]);

  // For animation, show both prev and current slide, animate between them
  const slide = slides[current];
  const prevSlide = slides[prev];
  return (
    <section className="w-full relative overflow-hidden">
      {/* Mobile: slide effect */}
      <div className="block md:hidden w-full h-[70vw] max-h-[500px] min-h-[250px] relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Previous Slide (for transition) */}
          <Image
            src={prevSlide.mobile}
            alt="Mobile Slide Prev"
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              current !== prev
                ? direction === 1
                  ? "-translate-x-full"
                  : "translate-x-full"
                : "translate-x-0"
            } absolute top-0 left-0`}
            draggable={false}
            fill
            sizes="100vw"
            priority
            style={{ zIndex: 1 }}
          />
          {/* Current Slide */}
          <Image
            src={slide.mobile}
            alt="Mobile Slide"
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              current !== prev
                ? direction === 1
                  ? "translate-x-0"
                  : "translate-x-0"
                : "translate-x-0"
            } absolute top-0 left-0`}
            draggable={false}
            fill
            sizes="100vw"
            priority
            style={{ zIndex: 2 }}
          />
        </div>
        <div className="absolute bottom-6 left-0 w-full flex justify-center pointer-events-none z-10">
          <h1
            className="text-white text-3xl font-bold tracking-tight drop-shadow-lg"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
          >
            {slide.headline}
          </h1>
        </div>
      </div>
      {/* Desktop: slide effect for both images */}
      <div className="hidden md:flex w-full h-[60vw] max-h-[600px] min-h-[350px] relative overflow-hidden">
        {/* Previous Slide */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out ${
            current !== prev
              ? direction === 1
                ? "-translate-x-full"
                : "translate-x-full"
              : "translate-x-0"
          }`}
          style={{ zIndex: 1 }}
        >
          <div className="w-1/2 h-full">
            <Image
              src={prevSlide.left}
              alt="Left visual prev"
              className="w-full h-full object-cover"
              draggable={false}
              fill
              sizes="50vw"
              priority
            />
          </div>
          <div className="w-1/2 h-full">
            <Image
              src={prevSlide.right}
              alt="Right visual prev"
              className="w-full h-full object-cover"
              draggable={false}
              fill
              sizes="50vw"
              priority
            />
          </div>
        </div>
        {/* Current Slide */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out ${
            current !== prev
              ? direction === 1
                ? "translate-x-0"
                : "translate-x-0"
              : "translate-x-0"
          }`}
          style={{ zIndex: 2 }}
        >
          <div className="w-1/2 h-full">
            <Image
              src={slide.left}
              alt="Left visual"
              className="w-full h-full object-cover"
              draggable={false}
              fill
              sizes="50vw"
              priority
            />
          </div>
          <div className="w-1/2 h-full">
            <Image
              src={slide.right}
              alt="Right visual"
              className="w-full h-full object-cover"
              draggable={false}
              fill
              sizes="50vw"
              priority
            />
          </div>
        </div>
        {/* Overlay headline */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none z-10">
          <h1
            className="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
          >
            {slide.headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
