import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { ProductSection } from "@/components/ProductSection";
import { ProductGallery } from "@/components/ProductGallery";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/badminton.jpg";
import racket1 from "@/assets/products/racket-yellow.jpg.asset.json";
import racket2 from "@/assets/products/racket-red-blue.jpg.asset.json";
import racket3 from "@/assets/products/racket-red-black.jpg.asset.json";
import racket4 from "@/assets/products/racket-black-blue.jpg.asset.json";
import racket5 from "@/assets/products/racket-red-classic.jpg.asset.json";

export const Route = createFileRoute("/badminton")({
  head: () => ({
    meta: [
      { title: "Badminton Equipment — Rackets, Shuttlecocks, Shoes | Sports Point" },
      {
        name: "description",
        content:
          "Premium badminton rackets, shuttlecocks, shoes, grip tapes and kit bags at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Badminton Collection — Sports Point" },
      { property: "og:description", content: "Precision meets performance with premium badminton gear." },
      { property: "og:url", content: "/badminton" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/badminton" }],
  }),
  component: Badminton,
});

function Badminton() {
  return (
    <>
      <CategoryHero
        eyebrow="Badminton"
        title="Precision Meets Performance"
        subtitle="From recreational to tournament play — rackets and gear that match your level of intent."
        image={img}
      />
      <ProductGallery
        title="Featured Rackets In Store"
        description="A glimpse of the Yonex rackets currently stocked at Sports Point — visit us or message on WhatsApp for the full collection."
        items={[
          { name: "Yonex Nanoray Neo", image: racket1.url },
          { name: "Yonex ZR Series", image: racket2.url },
          { name: "Yonex Voltric Lite", image: racket3.url },
          { name: "Yonex Nanoray Light 18i", image: racket4.url },
          { name: "Yonex GR 303", image: racket5.url },
        ]}
      />
      <ProductSection title="Rackets" products={["Pro Rackets", "Intermediate Rackets", "Beginner Rackets", "Junior Rackets"]} />
      <ProductSection title="Shuttlecocks" products={["Feather Shuttlecocks", "Nylon Shuttlecocks", "Training Shuttlecocks", "Tournament Shuttles"]} />
      <ProductSection title="Footwear & Bags" products={["Badminton Shoes", "Court Shoes", "Racket Bags", "Backpacks"]} />
      <ProductSection title="Accessories" products={["Grip Tapes", "String Reels", "Wristbands", "Accessories"]} />
      <ContactStrip />
    </>
  );
}
