import dscOrange from "@/assets/products/dsc-lava-orange.jpg.asset.json";
import dscRed from "@/assets/products/dsc-lava-red.jpg.asset.json";
import bull1 from "@/assets/products/bull-beast-power-1.jpg.asset.json";
import bull2 from "@/assets/products/bull-beast-power-2.jpg.asset.json";
import ssGreen from "@/assets/products/ss-kashmir-green.jpg.asset.json";
import ssYellow from "@/assets/products/ss-kashmir-yellow.jpg.asset.json";
import novax from "@/assets/products/novax-bahubali.jpg.asset.json";
import maspro from "@/assets/products/maspro-tennis.jpg.asset.json";
import turbo from "@/assets/products/turbo-tennis.jpg.asset.json";
import stumps from "@/assets/products/cricket-stumps.jpg.asset.json";

export type Product = {
  slug: string;
  name: string;
  category: "cricket";
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  images: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "dsc-lava-cricket-bat",
    name: "DSC Lava Cricket Bat",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Explosive power with a striking finish.",
    description:
      "The DSC Lava is built for aggressive stroke-makers who want a bold look and reliable pickup. Premium willow, thick edges and a comfortable grip make it a favourite for club and tournament players.",
    highlights: [
      "Premium grade willow",
      "Thick edges & full profile",
      "Comfortable cushion grip",
      "Ideal for tournament & club play",
    ],
    images: [dscOrange.url, dscRed.url],
  },
  {
    slug: "bull-sports-beast-power",
    name: "Bull Sports Player Edition — Beast Power",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Player edition performance for serious batters.",
    description:
      "The Bull Sports Beast Power Player Edition is crafted for players who demand a big hitting bat with pro-level balance. Premium willow, refined sweet spot and a hand-finished handle for elite performance.",
    highlights: [
      "Player Edition — hand finished",
      "Big sweet spot for power hitting",
      "Premium cane handle",
      "Tournament ready",
    ],
    images: [bull1.url, bull2.url],
  },
  {
    slug: "ss-kashmir-willow-green",
    name: "SS Kashmir Willow Cricket Bat",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Trusted Kashmir willow, everyday performance.",
    description:
      "The SS Kashmir Willow bat delivers dependable feel and pickup — perfect for practice sessions and weekend matches. Balanced weight and comfortable grip for players of all levels.",
    highlights: [
      "Genuine Kashmir willow",
      "Balanced pickup",
      "All-round profile",
      "Great value for regular play",
    ],
    images: [ssGreen.url],
  },
  {
    slug: "ss-kashmir-willow-yellow",
    name: "SS Kashmir Willow — Player Series",
    category: "cricket",
    categoryLabel: "Cricket Bats",
    tagline: "Bold graphics, clean strokes.",
    description:
      "A Kashmir willow bat from SS with a striking Player Series finish. Balanced middle and traditional profile — reliable for match play and net sessions alike.",
    highlights: [
      "Kashmir willow construction",
      "Traditional profile",
      "Comfortable premium grip",
      "Match & practice ready",
    ],
    images: [ssYellow.url],
  },
  {
    slug: "novax-bahubali-tennis-bat",
    name: "Novax Bahubali Prince Tennis Bat",
    category: "cricket",
    categoryLabel: "Tennis Bats",
    tagline: "Built for tennis-ball cricket dominance.",
    description:
      "The Novax Bahubali Prince is designed for tennis-ball cricket with a scooped back for maximum power and lightweight pickup. Ideal for gully, street and turf tennis-ball matches.",
    highlights: [
      "Scooped back for power",
      "Lightweight pickup",
      "Bold Bahubali graphics",
      "Perfect for tennis-ball cricket",
    ],
    images: [novax.url],
  },
  {
    slug: "maspro-tennis-bats",
    name: "Maspro Tennis Cricket Bats",
    category: "cricket",
    categoryLabel: "Tennis Bats",
    tagline: "Colourful, durable, ready to play.",
    description:
      "Maspro tennis-ball cricket bats in vibrant colours. Durable construction and comfortable grips — a top pick for casual play, gully cricket and quick weekend games.",
    highlights: [
      "Multiple colour options",
      "Durable build",
      "Cushioned grip",
      "Great for all ages",
    ],
    images: [maspro.url],
  },
  {
    slug: "turbo-mse-tennis-bats",
    name: "Turbo, MSE & NRI Tennis Bat Collection",
    category: "cricket",
    categoryLabel: "Tennis Bats",
    tagline: "A full range of tennis-ball bats in one place.",
    description:
      "A curated collection of Turbo, MSE and NRI tennis-ball cricket bats. Multiple models, weights and finishes — visit the store to pick the one that suits your game.",
    highlights: [
      "Multiple trusted brands",
      "Range of weights & profiles",
      "Season & tennis-ball ready",
      "In-store selection available",
    ],
    images: [turbo.url],
  },
  {
    slug: "cricket-stumps",
    name: "Cricket Stumps Set",
    category: "cricket",
    categoryLabel: "Wickets & Stumps",
    tagline: "Ground-ready stumps for match and practice.",
    description:
      "Strong, straight cricket stumps ideal for nets, practice pitches and matches. Available in singles and full sets with bails.",
    highlights: [
      "Durable seasoned wood",
      "Standard match dimensions",
      "Available with bails",
      "Practice & match use",
    ],
    images: [stumps.url],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const productsByCategory = (category: Product["category"]) =>
  PRODUCTS.filter((p) => p.category === category);
