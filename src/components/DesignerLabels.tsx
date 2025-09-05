import Image from "next/image";

const designers = [
  {
    name: "MCM",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/64FN72QokbspogpVYZ7GmI/210daf8b3aefc54436284738d5a8d6f5/MCM_Logo_new23.svg",
  },
  {
    name: "PRADA",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/4GRXSoffhKZD2yRJbhGCcI/2ae20a0466fe515e4f1a627c792d3c8a/brand-prada.svg",
  },
  {
    name: "Chloé",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/3AHWx0W9GoYnfjGIcc5h8U/e63dc218aaed2eb77841c7435f52646f/brand-chloe.svg",
  },
  {
    name: "GUCCI",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/47tmwNa4tD31NppFkcO2zr/96cbbd01dac9f3ca1539728e3001886e/brand-guccy.svg",
  },
  {
    name: "SAINT LAURENT",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/2VoyM7KEmLDvPc2CN1WdRv/4a1a36f19a1e8f3ca77877db32314bba/brand-saint-laurent.svg",
  },
  {
    name: "FURLA",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/2kGxoQm48mSP8uFgwk543u/b55f7c3ae2de6387c5b375ba8c8cb62d/brand-furla.svg",
  },
  {
    name: "LAUREN RALPH LAUREN",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/25fFHSYCeEivxUlsRtPR74/ac6d26b5c75f95e9b66934dbc1de32ab/brand-lauren.svg",
  },
  {
    name: "COACH",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/BdHkPAyfjopyYAvLhngoP/c88be9c21e2234a57aa257dc588cf9e5/Coach_2.png",
  },
  {
    name: "AIGNER",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/69YPLKZanFHMVAJUbQIuvf/b8765bfa20c9e9f0a8723fd08247f385/brand-aigner.svg",
  },
  {
    name: "VALENTINO GARAVANI",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/1x5HRJr3PR8tTqeU8cAKju/273375779f4974a94fd0988dc6d3deb0/brand-valentino-garavani.svg",
  },
  {
    name: "MIU MIU",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/lhERFgQQlLEgqZVtGmNta/178c4a144d7ecad35288aea74ecd675e/brand-miu-miu.svg",
  },
  {
    name: "COCCINELLE",
    logo: "https://images.ctfassets.net/zmbbfrp5qt5b/2bb0zgCZj1uojYSCKg4I0O/2a152052e39593684e9dfa22b00781a3/coccinelle-logo.svg",
  },
];

export default function DesignerLabels() {
  return (
    <section className="w-full flex flex-col items-center py-12">
      <div className="grid grid-cols-6 gap-x-12 gap-y-8 max-w-6xl w-full mb-10">
        {designers.map((d) => (
          <div key={d.name} className="flex items-center justify-center h-20">
            <Image
              src={d.logo}
              alt={d.name}
              width={180}
              height={80}
              className="object-contain h-full w-auto"
              priority
            />
          </div>
        ))}
      </div>
      <button className="border border-black px-8 py-3 text-lg font-medium tracking-wide hover:bg-black hover:text-white transition-colors">
        TO ALL DESIGNERS
      </button>
    </section>
  );
}
