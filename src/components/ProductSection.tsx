import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { waLink } from "@/lib/site";

export function ProductSection({
  title,
  description,
  products,
}: {
  title: string;
  description?: string;
  products: string[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-balance">
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
            <ScrollReveal key={p} delay={i * 40}>
              <a
                href={waLink(`Hi! I'd like to enquire about ${p}.`)}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border hover:border-accent transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <img
                  src={productImageUrl(p, sport)}
                  alt={`${p} — Sports Point`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-accent drop-shadow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-display font-extrabold text-lg leading-tight text-balance text-white drop-shadow">
                    {p}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Enquire
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
