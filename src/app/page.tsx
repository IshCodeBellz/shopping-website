import HeroCarousel from "@/components/HeroCarosel";
import DesignerLabels from "@/components/DesignerLabels";
import Categories from "@/components/Categories";
import PopularRightNow from "@/components/PopularRightNow";

// Home page matching the header/footer theme – clean, bold, image‑led
// App Router page: place this file at app/page.tsx

export default async function Home() {
  return (
    <main className="bg-white">
      <HeroCarousel />
      <Categories />
      <DesignerLabels />
      <PopularRightNow />
    </main>
  );
}
