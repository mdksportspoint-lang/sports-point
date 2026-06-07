import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { SITE, mapsEmbed, mapsLink, waLink } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sports Point — Madukkarai, Coimbatore" },
      {
        name: "description",
        content:
          "Visit Sports Point at Market, Anbu Nagar, Madukkarai, Coimbatore. Call +91 99864 90711 or WhatsApp us for sports equipment enquiries.",
      },
      { property: "og:title", content: "Contact Sports Point" },
      { property: "og:description", content: "Visit our store in Madukkarai, Coimbatore." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Get in touch</span>
            <h1 className="mt-3 font-display font-extrabold text-5xl sm:text-7xl leading-[0.95] text-balance max-w-3xl">
              Come say hi at the store.
            </h1>
            <p className="mt-5 text-primary-foreground/70 max-w-2xl text-lg">
              We're a quick visit away in Madukkarai. Call ahead, drop a WhatsApp,
              or pop in — we'll help you find exactly what you need.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-6">
          <ScrollReveal className="lg:col-span-2">
            <div className="rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-elegant h-full flex flex-col">
              <div>
                <h2 className="font-display font-extrabold text-2xl">Sports Point</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Premium sports equipment store
                </p>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/10 text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground mb-1">Address</div>
                    <address className="not-italic text-muted-foreground leading-relaxed">
                      {SITE.address.line1}<br />
                      {SITE.address.line2}<br />
                      {SITE.address.city}, {SITE.address.state} {SITE.address.pincode}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground mb-1">Hours</div>
                    <p className="text-muted-foreground">
                      Open daily · Visit anytime
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 grid sm:grid-cols-3 gap-2">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border font-semibold text-sm hover:bg-muted transition-colors"
                >
                  <Navigation className="h-4 w-4" />
                  Directions
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden border border-border shadow-elegant h-full min-h-[420px]">
              <iframe
                title="Sports Point location"
                src={mapsEmbed()}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
