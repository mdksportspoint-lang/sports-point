# Sports Point — Premium Website Plan

A multi-page, mobile-first marketing/catalog site for Sports Point (Madukkarai, Coimbatore) with a luxury sports-brand aesthetic inspired by Nike/Adidas/Apple.

## Scope
Frontend-only (no Lovable Cloud / DB). Catalog pages are visual showcases — products are displayed as cards without cart/checkout. Inquiries route to WhatsApp/Call.

## Tech & Design System
- TanStack Start file-based routing
- Tailwind v4 tokens defined in `src/styles.css`
- Fonts: Poppins ExtraBold (headings) + Inter (body), loaded via `<link>` in `__root.tsx`
- Color tokens (oklch equivalents):
  - `--primary` Deep Blue `#0A2342`
  - `--accent` Vibrant Orange `#FF6B00`
  - `--background` White, `--muted` Light Gray `#F7F8FA`
- Effects: glassmorphism nav, scroll-reveal (Intersection Observer), hover scale, animated counters, smooth transitions
- Hero & section imagery generated via imagegen (sports action shots, equipment flat-lays)

## Routes
```
src/routes/
  __root.tsx              # Fonts, sticky glass nav, floating WhatsApp, footer
  index.tsx               # Home
  cricket.tsx
  football.tsx
  basketball.tsx
  volleyball.tsx
  badminton.tsx
  indoor-games.tsx        # Chess + Carrom combined
  contact.tsx
```
Each route gets unique `head()` meta (title, description, og:*), canonical on leaf, JSON-LD `LocalBusiness` on root + `Product`-style lists on category pages.

## Shared Components (`src/components/`)
- `SiteHeader` — glass sticky nav with mobile drawer
- `SiteFooter` — quick links, categories, contact, map link
- `FloatingWhatsApp` — fixed bottom-right button (wa.me/919986490711)
- `Hero`, `TrustBar`, `CategoryGrid` (circular cards), `WhyChooseUs`, `Testimonials` (slider), `AboutSplit`
- `CategoryHero`, `ProductSection`, `ProductCard` (image, name, "Enquire on WhatsApp" CTA)
- `ContactCard`, `GoogleMapEmbed` (iframe, no API key needed)
- `ScrollReveal`, `AnimatedCounter` utility components

## Home Page Sections
1. Full-screen hero with bold headline, two CTAs, generated sports background
2. Trust bar (4 items with icons)
3. Featured Categories — 7 circular cards linking to category routes
4. Why Choose Sports Point — 6 icon cards
5. Animated counters (years, products, customers, sports)
6. Testimonials slider
7. About split (image + story)
8. Contact CTA strip

## Category Pages
Each follows the same template: full-bleed hero with tagline → multiple product sections (grouped grids) → contact CTA. Products use generated/representative imagery; each card has "Enquire on WhatsApp" prefilled with product name.

## Contact Page
- Store address card
- Buttons: Call (`tel:`), WhatsApp (`wa.me`), Get Directions (Google Maps URL)
- Embedded Google Map iframe of the Madukkarai address
- Hours (assumed; user can adjust)

## SEO & Performance
- Unique `head()` per route, LocalBusiness JSON-LD with address, phone, geo, rating
- Semantic HTML, single H1 per page, alt text, lazy images
- Preload hero image on home; font preconnect

## Assumptions (flag for user)
- Products shown as visual catalog only — no prices, no cart, no inventory
- Store hours not provided → will use placeholder "Open Daily" until confirmed
- Testimonials will be representative samples styled as real reviews
- WhatsApp number used as-is: +91 99864 90711

## Out of Scope
- E-commerce/checkout
- Real product database or admin
- Auth, accounts
- Multi-language

Confirm and I'll build it.