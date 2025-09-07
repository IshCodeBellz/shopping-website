import HeroCarousel from "@/components/HeroCarosel";
import DesignerLabels from "@/components/DesignerLabels";
import Categories from "@/components/Categories";
import PopularRightNow from "@/components/PopularRightNow";
import CoachOnYourOwnTime from "@/components/CoachOnYourOwnTime";
import { CategoryTiles } from "@/components/CatTiles";
import NewsletterBannerClient from "@/components/NewsletterBannerClient";
import {
  defaultServiceItems,
  ServiceSecurity,
} from "@/components/ServiceItems";
import SEOTextPage from "@/components/SEOText";

// Home page matching the header/footer theme – clean, bold, image‑led
// App Router page: place this file at app/page.tsx

export default async function Home() {
  return (
    <main className="bg-white">
      <HeroCarousel />
      <Categories />
      <DesignerLabels />
      <PopularRightNow />
      <CoachOnYourOwnTime />
      {/* 1) Category Tiles */}
      <CategoryTiles
        tiles={[
          {
            title: "Cherry Red",
            href: "/collections/cherry-red",
            imgSrc:
              "https://images.ctfassets.net/cesi7lh7rfv6/cFExkjzRMj2it4nMH3XPC/c435945a2f3c9fb06e0f9d1ccd254084/snippet_cherry.jpg?fm=webp", // drop your screenshot here
          },
          {
            title: "Earthy Tones",
            href: "/collections/earthy-tones",
            imgSrc:
              "https://images.ctfassets.net/cesi7lh7rfv6/5DYMUJwrqEs6xdskbCdTDx/6e1ab0a8d2d80644370468b413fa0187/snippet_bag.jpg?fm=webp",
          },
          {
            title: "Signature Steps",
            href: "/collections/signature-steps",
            imgSrc:
              "https://images.ctfassets.net/cesi7lh7rfv6/38oVbkJOpxzlAmUh1jVr8x/87af3bb023e1ea1949b0cc90f22af2d7/snippet_schuh.jpg?fm=webp",
          },
        ]}
      />
      {/* 2) Newsletter Banner */}
      <NewsletterBannerClient imgSrc="https://images.ctfassets.net/zmbbfrp5qt5b/3XI7pWhrGaqcfPP5tpUHj/b519a9daedf19c89d13560cbd3da4935/NWL_Box_cityblossom_desktop.jpg" />
      {/* 3) Service & Security Items */}
      <ServiceSecurity items={defaultServiceItems} />
      <SEOTextPage />
    </main>
  );
}
