import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Check,
  Palette,
  Shirt,
  Zap,
  Users,
  Sparkles,
  Timer,
  Award,
  ArrowRight,
} from "lucide-react";
import { ContactStrip } from "@/components/ContactStrip";
import { ScrollReveal } from "@/components/ScrollReveal";
import { waLink } from "@/lib/site";
import hero from "@/assets/team-jerseys-hero.jpg.asset.json";
import j1 from "@/assets/jersey-sample-1.jpg.asset.json";
import j2 from "@/assets/jersey-sample-2.jpg.asset.json";
import j3 from "@/assets/jersey-sample-3.jpg.asset.json";

const QUOTE_MSG =
  "Hi Sports Point! I'd like a quote for custom team jerseys. Sport: , Quantity: , Design idea: ";

export const Route = createFileRoute("/team-jerseys")({
  head: () => ({
    meta: [
      {
        title: "Custom Team Jerseys — Sublimation Sports Uniforms | Sports Point",
      },
      {
        name: "description",
        content:
          "Custom sublimation team jerseys for football, cricket, volleyball, basketball, kabaddi & more. Fully customizable with names, numbers, logos. Starting ₹600. Min 10 pcs. Sports Point, Coimbatore.",
      },
      {
        name: "keywords",
        content:
          "custom sports jerseys, sublimation jerseys, football jerseys, cricket jerseys, team uniforms, sports uniforms, custom team wear, Sports Point jerseys, Coimbatore jerseys, kabaddi jerseys",
      },
      { property: "og:title", content: "Custom Team Jerseys — Sports Point" },
      {
        property: "og:description",
        content:
          "Premium sublimation team jerseys for every sport. Fully customizable, starting ₹600. Min order 10.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/team-jerseys" },
      { property: "og:image", content: hero.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/team-jerseys" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Custom Team Jerseys — Sublimation Sports Uniforms",
          description:
            "Premium sublimation team jerseys, fully customizable with team names, player names, numbers, logos and sponsor branding. Available for football, cricket, volleyball, basketball, kabaddi, badminton, athletics, hockey and more.",
          brand: { "@type": "Brand", name: "Sports Point" },
          image: [hero.url, j1.url, j2.url, j3.url],
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: "600",
            highPrice: "1200",
            offerCount: "1",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Sports Point" },
          },
        }),
      },
    ],
  }),
  component: TeamJerseys,
});

const SPORTS = [
  "Football",
  "Cricket",
  "Volleyball",
  "Basketball",
  "Kabaddi",
  "Badminton",
  "Athletics",
  "Hockey",
  "All Other Sports",
];

const FEATURES = [
  {
    icon: Sparkles,
    title: "Premium Sublimation Printing",
    desc: "Vivid, edge-to-edge prints that never crack or peel.",
  },
  {
    icon: Palette,
    title: "Long-lasting Colors",
    desc: "Fade-resistant dyes bonded into the fabric fibre.",
  },
  {
    icon: Shirt,
    title: "Lightweight & Breathable",
    desc: "Moisture-wicking poly fabric built for match-day performance.",
  },
  {
    icon: Zap,
    title: "Fully Customizable Design",
    desc: "Team name, player name, number, logo & sponsor branding.",
  },
  {
    icon: Award,
    title: "Professional Team Look",
    desc: "Tournament-grade finish that stands out on the field.",
  },
  {
    icon: Timer,
    title: "Fast Production",
    desc: "Quick turnaround so your squad is ready before match day.",
  },
  {
    icon: Users,
    title: "Bulk Team Orders",
    desc: "Special pricing for clubs, schools & corporate teams.",
  },
  {
    icon: Check,
    title: "Quality Guaranteed",
    desc: "Every jersey checked for stitch, fit and print finish.",
  },
];

function TeamJerseys() {
  const quote = waLink(QUOTE_MSG);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${hero.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/75 to-primary" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
              Custom Team Jerseys
            </span>
            <h1 className="mt-4 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
              Custom Team Jerseys
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-accent font-semibold">
              Premium Sublimation Jerseys for Every Sport
            </p>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
              We design and manufacture high-quality sublimation jerseys for teams across every
              sport. Durable, lightweight, breathable and fully customizable with team names,
              player names, numbers, logos and sponsor branding.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={quote}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-4 w-4" />
                Get a Quote on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-dark text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARD */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                Team pricing
              </span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-balance">
                Transparent, team-friendly pricing
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every quote is custom to your design, fabric and quantity. Larger teams get better
                per-jersey pricing — message us with your requirements for an exact quote.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Sublimation print — front, back, sleeves",
                  "Names, numbers & team logo included",
                  "Sponsor branding on request",
                  "Delivery across India",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 sm:p-10 shadow-elegant overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-wider text-accent font-bold">
                  Starting from
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl">₹600</span>
                  <span className="text-primary-foreground/70">– ₹1,200 / jersey</span>
                </div>
                <p className="mt-2 text-primary-foreground/70 text-sm">
                  Final price depends on design complexity and fabric grade.
                </p>

                <div className="mt-6 rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/10">
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">
                    Minimum order
                  </div>
                  <div className="mt-1 font-display font-extrabold text-2xl">
                    10 members per team
                  </div>
                </div>

                <a
                  href={quote}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get a Quote
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AVAILABLE FOR */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                Available for
              </span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-balance">
                Jerseys for every sport
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {SPORTS.map((s, i) => (
              <ScrollReveal key={s} delay={i * 30}>
                <div className="rounded-2xl border border-border bg-background p-4 sm:p-5 text-center font-display font-extrabold text-base sm:text-lg hover:border-accent hover:-translate-y-1 hover:shadow-elegant transition-all">
                  {s}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                Sample designs
              </span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-balance">
                Designs we've printed
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                A glimpse of the sublimation quality your team will receive.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-3">
            {[
              { src: j1.url, alt: "Custom red and black sublimation football team jersey" },
              { src: j2.url, alt: "Custom blue and yellow cricket team jersey with sponsor logos" },
              { src: j3.url, alt: "Custom green basketball team jersey with player name and number" },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 60}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-background border border-border group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                Why our jerseys
              </span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-balance">
                Built for teams that mean business
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 40}>
                <div className="h-full p-6 rounded-2xl border border-border bg-background hover:border-accent hover:-translate-y-1 hover:shadow-elegant transition-all">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 grid place-items-center text-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-extrabold text-lg">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-balance">
              Ready to kit out your team?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Send us your sport, quantity and design idea on WhatsApp. We'll share mockups and a
              final quote within hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={quote}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-4 w-4" />
                Get a Quote
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-dark text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
