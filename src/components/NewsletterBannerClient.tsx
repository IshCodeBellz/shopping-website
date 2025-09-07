"use client";
import { NewsletterBanner } from "./NewsLetter";

export default function NewsletterBannerClient({ imgSrc }: { imgSrc: string }) {
  return (
    <NewsletterBanner
      imgSrc={imgSrc}
      onSubmit={async (email) => {
        // TODO: wire to your API route /subscribe
        console.log("subscribed:", email);
      }}
    />
  );
}
