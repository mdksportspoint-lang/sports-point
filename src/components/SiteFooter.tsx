import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Star } from "lucide-react";
import { CATEGORIES, SITE, mapsLink, waLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground font-display font-extrabold">
                SP
              </span>
              <span className="font-display font-extrabold text-xl">Sports Point</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Madukkarai's trusted destination for premium sports equipment. Serving
              athletes, students and clubs since day one.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              {SITE.rating} Customer Rating
            </div>
          </div>

          <div>
            <h4 className="font-display font-extrabold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li>
                <a href={mapsLink()} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  Visit Store
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-extrabold mb-4 text-sm uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link to={c.to} className="hover:text-accent transition-colors">
                    {c.emoji} {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-extrabold mb-4 text-sm uppercase tracking-wider">
              Visit Us
            </h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-1 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  {SITE.address.line1}<br />
                  {SITE.address.line2}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.pincode}
                </span>
              </div>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-2 hover:text-accent transition-colors pt-1"
              >
                <Phone className="h-4 w-4 text-accent" />
                {SITE.phone}
              </a>
            </address>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-accent-foreground font-semibold text-sm shadow-md hover:shadow-glow transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Sports Point. All rights reserved.</p>
          <p>Madukkarai · Coimbatore · Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
