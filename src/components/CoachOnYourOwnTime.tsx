"use client";
import Image from "next/image";

export default function CoachOnYourOwnTime() {
  return (
    <div className="grid grid-cols-2 gap-2 mx-56 mt-[32px]">
      <div className="col-span-1">
        {" "}
        <div style={{ flex: 1, position: "relative" }}>
          <Image
            src="https://images.ctfassets.net/cesi7lh7rfv6/39d6Ue7DVFuji5jgOoazox/4316440d313e11361d4e70a7389ed9e7/HP_Banner_Coach_June.jpg?fm=webp"
            alt="Coach campaign"
            width={600}
            height={700}
            style={{
              width: "100%",
              height: 700,
              objectFit: "cover",
              borderRadius: 8,
            }}
            priority
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-flow-col grid-rows-2 gap-2">
          <div className="col-span-2">
            {" "}
            <Image
              src="https://images.ctfassets.net/cesi7lh7rfv6/5NIgvyTQI4rpN0VXhiqSml/792b016d34e6add31fb323e28403ad38/Flyout_Banner_Coach_June.jpg?fm=webp"
              alt="Coach campaign"
              width={400}
              height={346}
              //   className="absolute inset-0 w-full h-full object-cover"
              style={{
                width: "100%",
                height: 346,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </div>
          <div className="col-span-2">
            {" "}
            <Image
              src="https://images.ctfassets.net/cesi7lh7rfv6/3Dxi0U4ncQ2S6outjWb6k8/056acaef7008e88bc3cf996dd9004a68/Bags_Banner_Coach_June.jpg?fm=webp"
              alt="Coach campaign"
              width={400}
              height={346}
              //   className="absolute inset-0 w-full h-full object-cover"
              style={{
                width: "100%",
                height: 346,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </div>
          <div className="row-span-3 flex flex-col justify-center h-full">
            {/* Right: Text */}
            <h5
              style={{
                fontSize: 22,
                fontWeight: 500,
                margin: 0,
                marginBottom: 16,
                letterSpacing: "-0.02em",
                color: "#111",
              }}
            >
              COACH - ON YOUR OWN TIME
            </h5>
            <p
              style={{
                fontSize: 14,
                color: "#222",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              With their new campaign ON YOUR OWN TIME, Coach invites everyone
              to find their own pace - far from societal expectations and the
              constant drive for self-optimization. Inspired by the spirit of
              New York, the campaign encourages people to take a moment amidst
              the chaos, to listen to themselves, and to have the courage to be
              authentic. The collection celebrates personal freedom, individual
              expression, and the many facets of one’s identity. As the Original
              American House of Leather, Coach has stood for craftsmanship and a
              strong identity since 1941. As a brand, a community, and a
              platform, Coach is a place for everyone who wants to write their
              own story - in their own time and in their own way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
/* 
    To ensure mobile responsiveness, update the main container and image/text layouts
    to use responsive Tailwind classes and relative units. 
    Also, use flex and grid adjustments for smaller screens.
*/

<style jsx>{`
  @media (max-width: 1024px) {
    .coach-container {
      margin-left: 2rem !important;
      margin-right: 2rem !important;
    }
  }
  @media (max-width: 768px) {
    .coach-container {
      grid-template-columns: 1fr !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .coach-image-large,
    .coach-image-small {
      height: 220px !important;
    }
    .coach-text {
      padding: 1rem 0.5rem !important;
    }
  }
`}</style>;
