import HeroCarousel from "@/components/HeroCarosel";
import Menu from "@/components/categories";
import DesignerLabels from "@/components/DesignerLabels";

// Home page matching the header/footer theme – clean, bold, image‑led
// App Router page: place this file at app/page.tsx

export default async function Home() {
  return (
    <main className="bg-white">
      <HeroCarousel />
      <Menu />
      <DesignerLabels />
    </main>
  );
}
