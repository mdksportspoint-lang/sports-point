import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-extrabold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportingGoodsStore",
  name: SITE.name,
  image: "/og-cover.jpg",
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.pincode,
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating,
    reviewCount: 120,
  },
  priceRange: "₹₹",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0A2342" },
      { title: "Sports Point — Premium Sports Equipment, Madukkarai" },
      {
        name: "description",
        content:
          "Sports Point Madukkarai — Cricket, football, basketball, badminton, volleyball, chess, carrom & more. Trusted local sports store in Coimbatore.",
      },
      { property: "og:site_name", content: "Sports Point" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Sports Point — Premium Sports Equipment, Madukkarai" },
      { name: "twitter:title", content: "Sports Point — Premium Sports Equipment, Madukkarai" },
      { name: "description", content: "Sports Point Premium is a high-end e-commerce website for a leading sports equipment store." },
      { property: "og:description", content: "Sports Point Premium is a high-end e-commerce website for a leading sports equipment store." },
      { name: "twitter:description", content: "Sports Point Premium is a high-end e-commerce website for a leading sports equipment store." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64fc1007-7dd2-404c-a55b-9e2ad9b87758/id-preview-2a0ea513--6d044e92-315f-4162-962b-55629e89cc25.lovable.app-1780809353421.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64fc1007-7dd2-404c-a55b-9e2ad9b87758/id-preview-2a0ea513--6d044e92-315f-4162-962b-55629e89cc25.lovable.app-1780809353421.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
