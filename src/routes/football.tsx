import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { ProductSection } from "@/components/ProductSection";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/football.jpg";

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
      <ProductSection title="Footballs" products={["Match Footballs", "Training Footballs", "Futsal Balls", "Junior Footballs"]} />
      <ProductSection title="Footwear" products={["Football Studs", "Turf Shoes", "Indoor Shoes", "Junior Studs"]} />
      <ProductSection title="Protection" products={["Shin Guards", "Goalkeeper Gloves", "Ankle Supports", "Knee Pads"]} />
      <ProductSection title="Training & Team" products={["Training Cones", "Jerseys", "Nets", "Accessories"]} />
      <ContactStrip />
    </>
  );
}
