import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Star, MapPin, Truck, Trophy, ShieldCheck, Sparkles, Users, ThumbsUp, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import storeImg from "@/assets/shop-trophies.jpg.asset.json";
import founderAsset from "@/assets/founder.jpg.asset.json";
import { CATEGORIES, SITE, waLink } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactStrip } from "@/components/ContactStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sports Point — Premium Sports Equipment in Madukkarai, Coimbatore" },
      {
        name: "description",
        content:
          "Everything you need for the game. Cricket, football, basketball, badminton, volleyball, chess and carrom equipment at Madukkarai's most trusted sports store.",
      },
      { property: "og:title", content: "Sports Point — Madukkarai's Trusted Sports Store" },
      {
        property: "og:description",
        content: "Premium sports equipment for every athlete. Visit us in Madukkarai, Coimbatore.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as any,
    ],
  }),
  component: Home,
});

const REVIEWS = [
  {
    name: "Karthik R.",
    role: "Cricket Club Captain",
    text: "Best sports store in Madukkarai. Great cricket bats and the staff really knows their stuff. Highly recommended for any team kit.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "School Sports Teacher",
    text: "I source all our school equipment here. Quality is consistent, prices are fair, and they always go the extra mile.",
    rating: 5,
  },
  {
    name: "Arun M.",
    role: "Badminton Player",
    text: "Excellent collection of rackets and shuttlecocks. Got proper grip tapes and shoes too — one-stop shop for serious players.",
    rating: 5,
  },
  {
    name: "Divya K.",
    role: "Parent",
    text: "Bought my son's first football kit here. Friendly, honest, and a wide range. Will keep coming back!",
    rating: 4,
  },
];

const WHY = [
  { icon: BadgeCheck, title: "Genuine Products", text: "Authentic gear from trusted brands, every time." },
  { icon: Sparkles, title: "Affordable Pricing", text: "Honest local pricing — premium quality without the markup." },
  { icon: Users, title: "Expert Recommendations", text: "Players themselves — we help you pick the right equipment." },
  { icon: Trophy, title: "Wide Selection", text: "Cricket, football, badminton, indoor games and more under one roof." },
  { icon: ShieldCheck, title: "Trusted Local Store", text: "Serving Madukkarai athletes, clubs and schools for years." },
  { icon: ThumbsUp, title: "Customer Satisfaction", text: "4.7★ average rating from hundreds of happy customers." },
];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <WhyChoose />
      <Counters />
      <Founder />
      <Reviews />
      <About />
      <ContactStrip />
    </>
  );
}

function Founder() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant max-w-sm mx-auto">
              <img
                src={founderAsset.url}
                alt="Pradeep Kumar — Founder of Sports Point"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:right-8 lg:right-0 px-4 py-2 rounded-xl bg-accent text-accent-foreground font-display font-extrabold text-sm shadow-glow">
              Founder
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Meet The Founder
            </span>
            <blockquote className="mt-4 font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
              <span className="text-accent">"</span>Every athlete deserves access to
              quality equipment. Sports Point was founded to support players of all
              levels with trusted products, fair pricing, and a commitment to helping
              the local sports community grow.<span className="text-accent">"</span>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <div className="text-right">
                <div className="font-display font-extrabold text-lg">
                  Pradeep Kumar
                </div>
                <div className="text-sm text-muted-foreground">
                  Founder, Sports Point
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-primary text-primary-foreground">
      <img
        src={heroImg}
        alt="Sports action montage"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider border border-accent/30">
            <Star className="h-3.5 w-3.5 fill-accent" />
            {SITE.rating} Rated · Madukkarai
          </span>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <h1 className="mt-6 font-display font-extrabold text-[2.75rem] sm:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-tight text-balance max-w-5xl">
            Everything You Need
            <br />
            <span className="text-accent">For The Game.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={240}>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl">
            Premium sports equipment for Cricket, Football, Basketball, Volleyball,
            Badminton, Chess, Carrom and more — handpicked for athletes who play to win.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={360}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#categories"
              className="group inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Shop Categories
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass-dark text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-primary-foreground/50 tracking-widest uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Star, label: `${SITE.rating}★ Customer Rating` },
    { icon: MapPin, label: "Madukkarai, Coimbatore" },
    { icon: Trophy, label: "Quality Sports Equipment" },
    { icon: Truck, label: "Local Trusted Store" },
  ];
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 text-sm font-medium">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-accent/10 text-accent">
              <it.icon className="h-4 w-4" />
            </span>
            <span className="text-foreground/80">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Our Categories
            </span>
            <h2 className="mt-2 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-balance">
              Find your sport.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Explore equipment built for every level — from local clubs to weekend warriors.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex gap-5 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {CATEGORIES.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 60}>
              <Link
                to={c.to}
                className="group relative flex-shrink-0 w-44 sm:w-56 aspect-[3/4] snap-start rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 flex flex-col justify-between hover:scale-[1.03] hover:shadow-elegant transition-all"
              >
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors" />
                <div className="relative grid place-items-center h-20 w-20 rounded-2xl bg-white/10 text-5xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {c.emoji}
                </div>
                <div className="relative">
                  <h3 className="font-display font-extrabold text-2xl">{c.name}</h3>
                  <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    Shop now <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Why Sports Point
            </span>
            <h2 className="mt-2 font-display font-extrabold text-4xl sm:text-5xl text-balance">
              Built on trust. Loved by athletes.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <ScrollReveal key={w.title} delay={i * 80}>
              <div className="group h-full p-7 rounded-2xl bg-card border border-border hover:border-accent hover:-translate-y-1 hover:shadow-elegant transition-all">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display font-extrabold text-xl">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counters() {
  const stats = [
    { end: 500, suffix: "+", label: "Happy Customers" },
    { end: 50, suffix: "+", label: "Sports Categories" },
    { end: 1000, suffix: "+", label: "Products Stocked" },
    { end: 47, suffix: "/10", label: "Average Rating" },
  ];
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <ScrollReveal key={s.label}>
            <div>
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-accent">
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-primary-foreground/70 font-medium">{s.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % REVIEWS.length);
  const prev = () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Reviews
            </span>
            <h2 className="mt-2 font-display font-extrabold text-4xl sm:text-5xl text-balance">
              What players say.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div className="rounded-3xl bg-card border border-border p-8 sm:p-14 text-center shadow-elegant">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: REVIEWS[i].rating }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-display font-extrabold text-2xl sm:text-3xl leading-tight text-balance">
                "{REVIEWS[i].text}"
              </p>
              <div className="mt-8">
                <div className="font-semibold">{REVIEWS[i].name}</div>
                <div className="text-sm text-muted-foreground">{REVIEWS[i].role}</div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                aria-label="Previous"
                onClick={prev}
                className="grid place-items-center h-11 w-11 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-1.5">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Review ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === i ? "w-8 bg-accent" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                aria-label="Next"
                onClick={next}
                className="grid place-items-center h-11 w-11 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={storeImg.url}
              alt="Sports Point store — trophy display case in Madukkarai"
              width={1280}
              height={960}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl glass">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <div className="text-sm font-semibold">
                  {SITE.rating}★ rated by local athletes
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              About Sports Point
            </span>
            <h2 className="mt-2 font-display font-extrabold text-4xl sm:text-5xl text-balance">
              A local store with a champion's heart.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sports Point is a trusted sports equipment destination serving athletes,
                students, sports clubs, and fitness enthusiasts in Madukkarai and
                surrounding areas of Coimbatore.
              </p>
              <p>
                We provide quality equipment across multiple sports categories with a
                focus on affordability, reliability, and customer satisfaction — the
                kind of personal service that only a neighbourhood store can deliver.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Find our store
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
