import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import Layout from "../components/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vplast Embalagens — Fitas Adesivas e Soluções para Embalagens" },
      { name: "description", content: "Fitas adesivas de alta performance para embalagens, construção e uso automotivo. Fitas crepe, dupla face, impressas, gomadas e personalizadas. Curitiba — PR." },
      { name: "author", content: "Vplast Embalagens" },
      { name: "theme-color", content: "#F97316" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vplast Embalagens" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: "Vplast Embalagens — Fitas Adesivas e Soluções para Embalagens" },
      { property: "og:description", content: "Fitas adesivas de alta performance para embalagens, construção e uso automotivo. Fitas crepe, dupla face, impressas, gomadas e personalizadas. Curitiba — PR." },
      { property: "og:image", content: "https://lojavplast.com/favicon.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vplast Embalagens — Fitas Adesivas e Soluções para Embalagens" },
      { name: "twitter:description", content: "Fitas adesivas de alta performance para embalagens, construção e uso automotivo. Curitiba — PR." },
      { name: "twitter:image", content: "https://lojavplast.com/favicon.png" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon.png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vplast Embalagens",
          url: "https://lojavplast.com",
          logo: "https://lojavplast.com/favicon.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-41-96947566",
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: "Portuguese",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Curitiba",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/vplast_"],
        }),
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
    <html lang="pt-BR">
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
      <Layout />
    </QueryClientProvider>
  );
}
