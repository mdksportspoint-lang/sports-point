import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import type { Product } from "@/lib/products";

export function FeaturedProducts({
  title,
  description,
  products,
}: {
  title: string;
  description?: string;
  products: Product[];
}) {
  if (!products.length) return null;
  return (
    <section className="py-16 sm:py-20 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                In stock now
              </span>
              <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-balance">
                {title}
              </h2>
              {description && (
                <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
              )}
            </div>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 40}>
              <Link
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-2xl overflow-hidden bg-background border border-border hover:border-accent transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    {p.categoryLabel}
                  </div>
                  <h3 className="mt-1 font-display font-extrabold text-base leading-tight text-balance">
                    {p.name}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    View details <ArrowRight className="h-3.5 w-3.5" />
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
