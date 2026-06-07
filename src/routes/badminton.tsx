import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { ProductSection } from "@/components/ProductSection";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/badminton.jpg";

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
      <ProductSection title="Rackets" products={["Pro Rackets", "Intermediate Rackets", "Beginner Rackets", "Junior Rackets"]} />
      <ProductSection title="Shuttlecocks" products={["Feather Shuttlecocks", "Nylon Shuttlecocks", "Training Shuttlecocks", "Tournament Shuttles"]} />
      <ProductSection title="Footwear & Bags" products={["Badminton Shoes", "Court Shoes", "Racket Bags", "Backpacks"]} />
      <ProductSection title="Accessories" products={["Grip Tapes", "String Reels", "Wristbands", "Accessories"]} />
      <ContactStrip />
    </>
  );
}
