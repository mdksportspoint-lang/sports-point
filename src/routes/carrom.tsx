import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryProducts } from "@/components/CategoryProducts";
import { ContactStrip } from "@/components/ContactStrip";
import carromHero from "@/assets/products/carrom-board-tournament.jpg.asset.json";

export const Route = createFileRoute("/carrom")({
  head: () => ({
    meta: [
      { title: "Carrom — Boards, Coins, Strikers & Powder | Sports Point" },
      {
        name: "description",
        content:
          "Tournament carrom boards, wooden coins, designer strikers and boric powder at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Carrom — Boards, Coins & Strikers" },
      { property: "og:description", content: "Full-size tournament carrom boards, coins, strikers and accessories." },
      { property: "og:url", content: "/carrom" },
      { property: "og:image", content: carromHero.url },
    ],
    links: [{ rel: "canonical", href: "/carrom" }],
  }),
  component: CarromPage,
});

function CarromPage() {
  return (
    <>
      <CategoryHero
        eyebrow="Carrom"
        title="The King of Indoor Games"
        subtitle="Full-size tournament carrom boards, hand-finished wooden coins, designer strikers and pro-grade board powder — everything for championship-level play."
        image={carromHero.url}
      />
      <CategoryProducts category="carrom" title="Featured Carrom Products" />
      <ContactStrip />
    </>
  );
}
