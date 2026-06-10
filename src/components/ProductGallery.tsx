import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { waLink } from "@/lib/site";

export type GalleryItem = {
  name: string;
  image: string;
};

export function ProductGallery({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: GalleryItem[];
}) {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
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
          {items.map((it, i) => (
            <ScrollReveal key={it.name + i} delay={i * 50}>
              <a
                href={waLink(`Hi! I'd like to enquire about ${it.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border hover:border-accent transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <img
                  src={it.image}
                  alt={it.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-display font-extrabold text-lg leading-tight text-balance text-white drop-shadow">
                    {it.name}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Enquire on WhatsApp
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
