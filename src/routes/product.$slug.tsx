import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, Phone, MapPin } from "lucide-react";
import { ProductGallery } from "@/components/ProductGallery";
import { ContactStrip } from "@/components/ContactStrip";
import { getProduct, PRODUCTS } from "@/lib/products";
import { SITE, waLink, mapsLink } from "@/lib/site";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Sports Point Madukkarai` : "Product — Sports Point";
    const desc = p ? `${p.tagline} ${p.description}`.slice(0, 155) : "Sports Point product.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.images[0] } as const] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
      <h1 className="font-display font-extrabold text-3xl">Product not found</h1>
      <Link to="/cricket" className="mt-4 text-accent font-semibold">
        Back to Cricket
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
      <h1 className="font-display font-extrabold text-3xl">Something went wrong</h1>
      <button onClick={reset} className="mt-4 text-accent font-semibold">
        Try again
      </button>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const message = `Hi, I'm interested in the ${p.name}. Please share more details.`;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/cricket" className="hover:text-foreground">Cricket</Link>
            <span>/</span>
            <span className="text-foreground truncate">{p.name}</span>
          </div>

          <Link
            to="/cricket"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Cricket
          </Link>

          <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
            <div>
              <ProductGallery images={p.images} alt={p.name} />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                {p.categoryLabel}
              </span>
              <h1 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-balance">
                {p.name}
              </h1>
              <p className="mt-3 text-lg text-accent font-medium">{p.tagline}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">{p.description}</p>

              <ul className="mt-6 space-y-2.5">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                <a
                  href={waLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-2xl bg-accent text-accent-foreground font-bold text-base shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-transform"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire on WhatsApp
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 h-12 rounded-xl border border-border bg-background font-semibold hover:bg-muted transition"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={mapsLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 rounded-xl border border-border bg-background font-semibold hover:bg-muted transition"
                  >
                    <MapPin className="h-4 w-4" /> Visit
                  </a>
                </div>
                <p className="text-xs text-muted-foreground text-center pt-1">
                  Prices, sizes and availability confirmed on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-6">
              More from {p.categoryLabel}
            </h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/product/$slug"
                  params={{ slug: r.slug }}
                  className="group block rounded-2xl overflow-hidden bg-background border border-border hover:border-accent transition"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img
                      src={r.images[0]}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-display font-extrabold text-sm leading-tight line-clamp-2">
                      {r.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactStrip />
    </>
  );
}
