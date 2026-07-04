import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CATEGORIES, SITE } from "@/lib/site";
import logoAsset from "@/assets/sports-point-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/cricket", label: "Cricket" },
  { to: "/football", label: "Football" },
  { to: "/basketball", label: "Basketball" },
  { to: "/badminton", label: "Badminton" },
  { to: "/indoor-games", label: "Indoor" },
  { to: "/team-jerseys", label: "Jerseys" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoAsset.url}
              alt="Sports Point logo"
              className="h-11 w-11 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="font-display font-extrabold text-lg tracking-tight">
              Sports Point
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-accent-foreground font-semibold text-sm shadow-md hover:shadow-glow transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-xl glass"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-8 space-y-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block py-4 text-2xl font-display font-extrabold border-b border-border"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-6 grid grid-cols-2 gap-3">
              {CATEGORIES.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  to={c.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 p-3 rounded-xl bg-muted text-sm font-semibold"
                >
                  <span className="text-xl">{c.emoji}</span>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
