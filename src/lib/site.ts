export const SITE = {
  name: "Sports Point",
  tagline: "Premium sports equipment in Madukkarai, Coimbatore",
  phone: "+91 99864 90711",
  phoneRaw: "+919986490711",
  whatsapp: "919986490711",
  rating: 4.7,
  address: {
    line1: "Market, Anbu Nagar",
    line2: "Madukkarai",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641105",
    country: "India",
  },
  mapsQuery: "Sports Point, Market, Anbu Nagar, Madukkarai, Coimbatore, Tamil Nadu 641105",
};

export const waLink = (msg = "Hi Sports Point, I'd like to enquire about your products.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;

export const mapsEmbed = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

export const CATEGORIES = [
  { slug: "cricket", name: "Cricket", emoji: "🏏", to: "/cricket" },
  { slug: "football", name: "Football", emoji: "⚽", to: "/football" },
  { slug: "basketball", name: "Basketball", emoji: "🏀", to: "/basketball" },
  { slug: "volleyball", name: "Volleyball", emoji: "🏐", to: "/volleyball" },
  { slug: "badminton", name: "Badminton", emoji: "🏸", to: "/badminton" },
  { slug: "chess", name: "Chess", emoji: "♟️", to: "/indoor-games" },
  { slug: "carrom", name: "Carrom", emoji: "🎯", to: "/indoor-games" },
] as const;
