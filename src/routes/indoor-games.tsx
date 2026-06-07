import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { ProductSection } from "@/components/ProductSection";
import { ContactStrip } from "@/components/ContactStrip";
import img from "@/assets/indoor.jpg";

export const Route = createFileRoute("/indoor-games")({
  head: () => ({
    meta: [
      { title: "Indoor Games — Chess & Carrom Boards | Sports Point" },
      {
        name: "description",
        content:
          "Premium chess boards, tournament sets, carrom boards, coins and strikers at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Indoor Games — Chess & Carrom" },
      { property: "og:description", content: "Timeless games. Premium boards. Crafted for serious play." },
      { property: "og:url", content: "/indoor-games" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/indoor-games" }],
  }),
  component: Indoor,
});

function Indoor() {
  return (
    <>
      <CategoryHero
        eyebrow="Chess · Carrom"
        title="Indoor Games, Premium Boards"
        subtitle="Timeless games crafted with care — tournament chess sets and championship carrom boards for every home and club."
        image={img}
      />
      <ProductSection
        title="Chess"
        description="From wooden classics to tournament tournament-grade sets."
        products={["Chess Boards", "Tournament Sets", "Wooden Sets", "Chess Clocks"]}
      />
      <ProductSection
        title="Carrom"
        description="Smooth surfaces, perfect coins, championship feel."
        products={["Carrom Boards", "Tournament Boards", "Coins", "Strikers", "Carrom Powder", "Accessories"]}
      />
      <ContactStrip />
    </>
  );
}
