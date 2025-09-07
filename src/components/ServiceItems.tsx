import Image from "next/image";

export type ServiceItem = {
  icon: string; // image URL or import path
  title: string;
  description?: string;
};

export const defaultServiceItems: ServiceItem[] = [
  {
    icon: "/icons/free-shipping.svg",
    title: "Free Standard Shipping from 200 GBP",
  },
  {
    icon: "/icons/return-policy.svg",
    title: "30 days free-of-charge return policy",
  },
  {
    icon: "/icons/payment-options.svg",
    title: "Different payment options available",
  },
  {
    icon: "/icons/trusted-shops.svg",
    title: "Trusted Shops certified",
  },
  {
    icon: "/icons/paypal.svg",
    title: "Pay in 3 installments",
  },
];

export function ServiceSecurity({ items }: { items: ServiceItem[] }) {
  return (
    <section className="mx-auto my-16 max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <h3 className="mb-8 text-center text-2xl font-semibold tracking-wide">
        Service & Security
      </h3>
      <ul className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-5">
        {items.map((it, idx) => (
          <li
            key={idx}
            className="rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center">
              <Image src={it.icon} alt={it.title} width={48} height={48} />
            </div>
            <p className="text-sm font-medium">{it.title}</p>
            {it.description && (
              <p className="mt-1 text-xs text-neutral-600">{it.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
