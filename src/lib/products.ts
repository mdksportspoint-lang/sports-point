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
import coscoB18 from "@/assets/products/cosco-b18.jpg.asset.json";
import coscoBerlin from "@/assets/products/cosco-berlin.jpg.asset.json";
import coscoMilano from "@/assets/products/cosco-milano.jpg.asset.json";
import shiningStar from "@/assets/products/shining-star.jpg.asset.json";
import niviaTrainer from "@/assets/products/nivia-trainer.jpg.asset.json";
import niviaSuperSynthetic from "@/assets/products/nivia-super-synthetic.jpg.asset.json";
import niviaBlueYellow from "@/assets/products/nivia-blue-yellow.jpg.asset.json";
import niviaClassicVision from "@/assets/products/nivia-classic-vision.jpg.asset.json";

export type ProductCategory =
  | "cricket"
  | "football"
  | "basketball"
  | "volleyball"
  | "badminton"
  | "indoor-games";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
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
  {
    slug: "cosco-b18-football-pump",
    name: "Cosco B-18 Football with Pump",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Classic black & white match football with pump.",
    description:
      "The Cosco B-18 is a classic hand-stitched football in the iconic black-and-white panel design. Made in India, durable synthetic construction — comes bundled with a Cosco hand pump for on-the-go inflation.",
    highlights: [
      "Hand-stitched panels",
      "Comes with Cosco hand pump",
      "Match & practice ready",
      "Made in India",
    ],
    images: [coscoB18.url],
  },
  {
    slug: "cosco-berlin-football",
    name: "Cosco Berlin Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Vibrant yellow match ball with striking graphics.",
    description:
      "The Cosco Berlin (C-16) is a bright yellow football with bold red, green and black accents. Built for club matches, school teams and enthusiastic weekend players.",
    highlights: [
      "Eye-catching Berlin design",
      "Durable synthetic cover",
      "Great grip in all weather",
      "Size 5 match ball",
    ],
    images: [coscoBerlin.url],
  },
  {
    slug: "cosco-milano-football",
    name: "Cosco Milano Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Bold blue Milano — premium look, tournament feel.",
    description:
      "The Cosco Milano combines a striking blue-and-white geometric design with a durable stitched build. A favourite for club players who want a football that looks as good as it plays.",
    highlights: [
      "Premium Milano graphics",
      "Machine-stitched durability",
      "Balanced flight & control",
      "Suits turf & ground play",
    ],
    images: [coscoMilano.url],
  },
  {
    slug: "shining-star-football",
    name: "Shining Star Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Pro-look football for club and turf matches.",
    description:
      "The Shining Star football features a modern orange, blue and white panel design with a durable synthetic surface — great grip and flight on turf and ground pitches.",
    highlights: [
      "Modern pro-style design",
      "Excellent surface grip",
      "Ideal for turf & ground",
      "Match-ready size",
    ],
    images: [shiningStar.url],
  },
  {
    slug: "nivia-trainer-football",
    name: "Nivia Trainer Football",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Trusted Nivia trainer for daily practice.",
    description:
      "The Nivia Trainer is built for regular training sessions and club practice. Reinforced stitching and a durable outer cover stand up to daily use on hard grounds.",
    highlights: [
      "Reinforced stitched panels",
      "Durable training cover",
      "Consistent shape retention",
      "Perfect for daily practice",
    ],
    images: [niviaTrainer.url],
  },
  {
    slug: "nivia-super-synthetic-fb272",
    name: "Nivia Super Synthetic Football (FB-272)",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Bright yellow Nivia — Size 5 match ball.",
    description:
      "The Nivia Super Synthetic (FB-272) is a Size 5 football with a bright yellow synthetic cover. Made by Freewill Sports — a reliable pick for schools, clubs and enthusiasts.",
    highlights: [
      "Size 5 official match ball",
      "Super synthetic cover",
      "Hand-stitched durability",
      "6-8 LBS inflation",
    ],
    images: [niviaSuperSynthetic.url],
  },
  {
    slug: "nivia-blue-yellow-football",
    name: "Nivia Football — Blue & Yellow",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Vibrant blue & yellow wave-pattern football.",
    description:
      "A striking Nivia football in a blue and yellow wave-pattern design. Bright, durable and built for practice sessions and casual matches.",
    highlights: [
      "Vibrant wave-pattern design",
      "Nivia trusted quality",
      "Durable stitched build",
      "Practice & casual match ready",
    ],
    images: [niviaBlueYellow.url],
  },
  {
    slug: "nivia-classic-vision-fb281",
    name: "Nivia Classic Vision 2014 (FB-281)",
    category: "football",
    categoryLabel: "Footballs",
    tagline: "Neon yellow & orange — Size 5 Classic Vision.",
    description:
      "The Nivia Classic Vision 2014 (FB-281) is a Size 5 football with a bright fluorescent yellow surface and bold orange accents. Excellent visibility, reliable stitching and true Nivia durability.",
    highlights: [
      "Fluorescent high-visibility yellow",
      "Size 5 — 6 to 8 LBS",
      "Hand-stitched Nivia build",
      "Great for evening & indoor play",
    ],
    images: [niviaClassicVision.url],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const productsByCategory = (category: Product["category"]) =>
  PRODUCTS.filter((p) => p.category === category);
