import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryProducts } from "@/components/CategoryProducts";
import { ContactStrip } from "@/components/ContactStrip";
import chessHero from "@/assets/products/chess-magnetic-foldable.jpg.asset.json";

export const Route = createFileRoute("/chess")({
  head: () => ({
    meta: [
      { title: "Chess — Boards, Pieces & Clocks | Sports Point" },
      {
        name: "description",
        content:
          "Premium chess boards, tournament Staunton pieces, DGT digital clocks and carry bags at Sports Point Madukkarai.",
      },
      { property: "og:title", content: "Chess — Boards, Pieces & Clocks" },
      { property: "og:description", content: "Tournament-grade chess boards, pieces, clocks and accessories." },
      { property: "og:url", content: "/chess" },
      { property: "og:image", content: chessHero.url },
    ],
    links: [{ rel: "canonical", href: "/chess" }],
  }),
  component: ChessPage,
});

function ChessPage() {
  return (
    <>
      <CategoryHero
        eyebrow="Chess"
        title="Play the Grandmaster's Game"
        subtitle="Tournament-grade chess boards, weighted Staunton pieces, FIDE-approved clocks and travel accessories — everything a serious player needs."
        image={chessHero.url}
      />
      <CategoryProducts category="chess" title="Featured Chess Products" />
      <ContactStrip />
    </>
  );
}
