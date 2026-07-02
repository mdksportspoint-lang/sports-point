import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "@/components/CategoryHero";
import { ProductSection } from "@/components/ProductSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ContactStrip } from "@/components/ContactStrip";
import { productsByCategory } from "@/lib/products";
import img from "@/assets/cricket.jpg";

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket Equipment — Bats, Balls, Pads & Kits | Sports Point" },
      {
        name: "description",
        content:
          "Complete cricket collection at Sports Point Madukkarai — cricket bats, tennis bats, balls, pads, gloves, helmets, shoes and kit bags.",
      },
      { property: "og:title", content: "Cricket Collection — Sports Point" },
      { property: "og:description", content: "Bats, balls, pads, gloves, helmets and more." },
      { property: "og:url", content: "/cricket" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/cricket" }],
  }),
  component: Cricket,
});

function Cricket() {
  return (
    <>
      <CategoryHero
        eyebrow="Cricket"
        title="Complete Cricket Collection"
        subtitle="From the local maidan to club tournaments — premium cricket gear for every level of the game."
        image={img}
      />
      <FeaturedProducts
        title="Featured Cricket Products"
        description="Real bats and gear currently available at our Madukkarai store. Tap any product for full photos, details and WhatsApp enquiry."
        products={productsByCategory("cricket")}
      />
      <ProductSection
        title="Bats"
        description="Willow that responds to every shot."
        products={["Cricket Bats", "Tennis Bats", "Practice Bats", "Junior Bats"]}
      />
      <ProductSection
        title="Balls & Wickets"
        products={["Cricket Balls", "Tennis Balls", "Season Balls", "Wickets"]}
      />
      <ProductSection
        title="Protective Gear"
        products={["Batting Gloves", "Batting Pads", "Helmets", "Thigh Guards"]}
      />
      <ProductSection
        title="Footwear & Bags"
        products={["Cricket Shoes", "Spike Shoes", "Kit Bags", "Wheel Bags"]}
      />
      <ProductSection
        title="Training & Accessories"
        products={["Practice Equipment", "Stumps & Bails", "Grips & Tapes", "Accessories"]}
      />
      <ContactStrip />
    </>
  );
}
