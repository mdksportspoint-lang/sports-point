import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function CategoryHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(`Hi! I'd like to enquire about ${title}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-dark text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Visit Store
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
