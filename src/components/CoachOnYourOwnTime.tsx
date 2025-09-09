"use client";
// import { vw } from "framer-motion";
import Image from "next/image";

export default function CoachOnYourOwnTime() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      {/* Grid: mobile single column (hero -> text -> two images), desktop 3-column visual */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Large hero image - appears first on mobile, left on desktop spanning 2 cols */}
        <div className="order-1 md:order-1 md:col-span-2">
          <Image
            src="https://images.ctfassets.net/cesi7lh7rfv6/39d6Ue7DVFuji5jgOoazox/4316440d313e11361d4e70a7389ed9e7/HP_Banner_Coach_June.jpg?fm=webp"
            alt="Coach campaign"
            width={1600}
            height={1200}
            className="w-full object-contain rounded"
            priority
          />
        </div>

        {/* Text block - appears second on mobile, right column on desktop */}
        <div className="order-2 md:order-3 md:col-span-1">
          <h5 className="text-xl md:text-2xl font-medium mb-4 md:mt-18">
            COACH - ON YOUR OWN TIME
          </h5>
          <p className="text-sm text-gray-800 leading-7">
            With their new campaign ON YOUR OWN TIME, Coach invites everyone to
            find their own pace - far from societal expectations and the
            constant drive for self-optimization. Inspired by the spirit of New
            York, the campaign encourages people to take a moment amidst the
            chaos, to listen to themselves, and to have the courage to be
            authentic. The collection celebrates personal freedom, individual
            expression, and the many facets of one’s identity. As the Original
            American House of Leather, Coach has stood for craftsmanship and a
            strong identity since 1941. As a brand, a community, and a platform,
            Coach is a place for everyone who wants to write their own story -
            in their own time and in their own way.
          </p>
        </div>

        {/* Two stacked images - appear last on mobile as a side-by-side pair, middle column on desktop */}
        <div className="order-3 md:order-2 md:col-span-1 grid grid-rows-2 gap-6 max-sm:hidden">
          <div className="overflow-hidden rounded">
            <Image
              src="https://images.ctfassets.net/cesi7lh7rfv6/5NIgvyTQI4rpN0VXhiqSml/792b016d34e6add31fb323e28403ad38/Flyout_Banner_Coach_June.jpg?fm=webp"
              alt="Coach campaign small 1"
              width={800}
              height={800}
              className="w-full object-contain rounded"
              priority
            />
          </div>

          <div className="overflow-hidden rounded">
            <Image
              src="https://images.ctfassets.net/cesi7lh7rfv6/3Dxi0U4ncQ2S6outjWb6k8/056acaef7008e88bc3cf996dd9004a68/Bags_Banner_Coach_June.jpg?fm=webp"
              alt="Coach campaign small 2"
              width={400}
              height={400}
              className="w-full object-contain rounded"
              priority
            />
          </div>
        </div>
      </div>
      {/* Mobile two images side-by-side below text */}
      <div className="sm:hidden grid grid-cols-2 gap-2 h-[325px] w-full mx-auto mt-4 mb-2">
        <div className="overflow-hidden col-span-1 rounded h-56">
          <Image
            src="https://images.ctfassets.net/cesi7lh7rfv6/5NIgvyTQI4rpN0VXhiqSml/792b016d34e6add31fb323e28403ad38/Flyout_Banner_Coach_June.jpg?fm=webp"
            alt="Coach campaign small 1"
            width={200}
            height={200}
            className="w-full object-contain rounded"
            priority
          />
        </div>
        <div className="overflow-hidden col-span-1 rounded h-56">
          <Image
            src="https://images.ctfassets.net/cesi7lh7rfv6/3Dxi0U4ncQ2S6outjWb6k8/056acaef7008e88bc3cf996dd9004a68/Bags_Banner_Coach_June.jpg?fm=webp"
            alt="Coach campaign small 2"
            width={200}
            height={200}
            className="w-full object-contain rounded"
            priority
          />
        </div>
      </div>
    </div>
  );
}
