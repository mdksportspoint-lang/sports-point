import { Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE, mapsLink, waLink } from "@/lib/site";
import { ScrollReveal } from "./ScrollReveal";

export function ContactStrip() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-balance">
              Visit our store today
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">
              See, feel, and choose the right gear with expert guidance from our team.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="group p-6 rounded-2xl glass-dark hover:bg-white/10 transition-colors"
          >
            <Phone className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Call</div>
            <div className="font-display font-extrabold text-xl mt-1">{SITE.phone}</div>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl glass-dark hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60">WhatsApp</div>
            <div className="font-display font-extrabold text-xl mt-1">Message Us</div>
          </a>
          <a
            href={mapsLink()}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl glass-dark hover:bg-white/10 transition-colors"
          >
            <MapPin className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Visit</div>
            <div className="font-display font-extrabold text-xl mt-1">Madukkarai</div>
          </a>
        </div>
      </div>
    </section>
  );
}
