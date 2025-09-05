import Image from "next/image";

export default function HeroCarousel() {
  // Example images and text, replace with your own as needed
  const slides = [
    {
      left: "https://images.ctfassets.net/cesi7lh7rfv6/2NpOJoLMrOO11aDO42j9F3/c2bb882cea79857273d5457a43e721f0/NewArrivals_Desktop_2.jpg?fm=avif",
      right:
        "https://images.ctfassets.net/cesi7lh7rfv6/2NpOJoLMrOO11aDO42j9F3/c2bb882cea79857273d5457a43e721f0/NewArrivals_Desktop_2.jpg?fm=avif",
      headline: "",
    },
    // Add more slides if you want a true carousel
  ];
  // For now, just show the first slide (static, but easy to extend)
  const slide = slides[0];
  return (
    <section className="w-full relative">
      <div className="flex w-full h-[60vw] max-h-[600px] min-h-[350px]">
        {/* Left image */}
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
        {/* Right image */}
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
        {/* Overlay headline */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none">
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
