import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { ProductSection } from "@/components/ProductSection";
import { ProductGallery } from "@/components/ProductGallery";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/football.jpg";
import ball1 from "@/assets/products/football-nivia-green.jpg.asset.json";
import ball2 from "@/assets/products/football-nivia-yellow.jpg.asset.json";
import ball3 from "@/assets/products/football-nivia-blue.jpg.asset.json";

export const Route = createFileRoute("/football")({
  head: () => ({
    meta: [
      { title: "Football Equipment — Balls, Studs, Gloves | Sports Point" },
      {
        name: "description",
        content:
          "Footballs, studs, shin guards, goalkeeper gloves, training cones, jerseys and nets at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Football Collection — Sports Point" },
      { property: "og:description", content: "Play like champions with premium football gear." },
      { property: "og:url", content: "/football" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/football" }],
  }),
  component: Football,
});

function Football() {
  return (
    <>
      <CategoryHero
        eyebrow="Football"
        title="Play Like Champions"
        subtitle="Match-ready footballs, training gear and goalkeeper essentials for every player on the pitch."
        image={img}
      />
      <ProductGallery
        title="Featured Footballs In Store"
        description="Genuine Nivia footballs currently stocked at Sports Point. Walk in or WhatsApp us for sizes and pricing."
        items={[
          { name: "Nivia Classic Vision Size 5", image: ball1.url },
          { name: "Nivia Super Synthetic Size 5", image: ball2.url },
          { name: "Nivia Storm Size 5", image: ball3.url },
        ]}
      />
      <ProductSection title="Footballs" products={["Match Footballs", "Training Footballs", "Futsal Balls", "Junior Footballs"]} />
      <ProductSection title="Footwear" products={["Football Studs", "Turf Shoes", "Indoor Shoes", "Junior Studs"]} />
      <ProductSection title="Protection" products={["Shin Guards", "Goalkeeper Gloves", "Ankle Supports", "Knee Pads"]} />
      <ProductSection title="Training & Team" products={["Training Cones", "Jerseys", "Nets", "Accessories"]} />
      <ContactStrip />
    </>
  );
}
