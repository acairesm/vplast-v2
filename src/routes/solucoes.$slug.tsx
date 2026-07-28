import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle, Package, ChevronRight } from "lucide-react";
import { getSolutionBySlug, SOLUTIONS } from "@/lib/solutions";
import { PRODUCTS } from "@/lib/products";
import { SectionEyebrow } from "@/components/Layout";

export const Route = createFileRoute("/solucoes/$slug")({
  head: ({ params }) => {
    const s = getSolutionBySlug(params.slug);
    const url = `https://lojavplast.com/solucoes/${params.slug}`;
    const title = s ? `${s.title} — Soluções Vplast Embalagens` : "Solução — Vplast Embalagens";
    const rawDesc = s?.description ?? s?.tagline ?? "";
    const desc = rawDesc.length > 152 ? rawDesc.slice(0, 149).replace(/\s\S*$/, "") + "…" : rawDesc;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: s ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lojavplast.com/" },
            { "@type": "ListItem", position: 2, name: "Soluções", item: "https://lojavplast.com/solucoes" },
            { "@type": "ListItem", position: 3, name: s.title, item: url },
          ],
        }),
      }] : [],
    };
  },
  loader: ({ params }) => {
    const s = getSolutionBySlug(params.slug);
    if (!s) throw notFound();
    return s;
  },
  component: SolucaoDetailPage,
});

function SolucaoDetailPage() {
  const solution = Route.useLoaderData();
  const related = PRODUCTS.filter((p) => solution.recommendedProducts.includes(p.slug));

  return (
    <div>
      {/* BREADCRUMB */}
      <nav aria-label="Trilha de navegação" className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-4 sm:pt-6 flex items-center gap-2 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/solucoes" className="hover:text-primary">Soluções</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-ink font-medium">{solution.title}</span>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden mt-4">
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <img
            src={solution.img}
            alt={solution.title}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 mx-auto max-w-[1400px] px-6 flex flex-col justify-center">
            <SectionEyebrow>SOLUÇÕES VPLAST</SectionEyebrow>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {solution.title}
            </h1>
            <p className="mt-3 text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
              {solution.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-8 sm:py-12 grid lg:grid-cols-[1fr_320px] gap-8 sm:gap-10">
        {/* MAIN CONTENT */}
        <div className="space-y-10">
          {/* DESCRIPTION */}
          <div>
            <h2 className="text-2xl font-extrabold text-ink">Sobre esta solução</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{solution.description}</p>
          </div>

          {/* CHALLENGES */}
          <div>
            <h2 className="text-2xl font-extrabold text-ink">
              Desafios que <span className="text-primary">resolvemos</span>
            </h2>
            <ul className="mt-5 space-y-3">
              {solution.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BENEFITS */}
          <div>
            <h2 className="text-2xl font-extrabold text-ink">
              Por que escolher a <span className="text-primary">Vplast</span>
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              {solution.benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl border border-border p-6">
                  <div className="h-10 w-10 rounded-full bg-orange-soft grid place-items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-ink text-sm">{b.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-ink">
                Produtos <span className="text-primary">recomendados</span>
              </h2>
              <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to="/produtos/$slug"
                    params={{ slug: p.slug }}
                    className="group bg-white rounded-2xl border border-border p-4 hover:shadow-xl transition flex flex-col"
                  >
                    <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <h3 className="mt-3 text-center font-bold uppercase text-xs text-ink leading-tight">{p.name}</h3>
                    <p className="mt-1 text-center text-xs text-muted-foreground flex-1">{p.description}</p>
                    <span className="mt-3 text-center text-primary text-xs font-bold group-hover:underline">
                      Ver Detalhes →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-5">
          {/* CTA */}
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
            <h3 className="font-extrabold text-lg leading-tight">Precisa de uma solução personalizada?</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Nossa equipe analisa seu processo e indica os produtos ideais para o seu caso.
            </p>
            <a
              href="https://wa.me/5541969447566"
              target="_blank"
              rel="noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-4 py-3 font-semibold text-sm hover:bg-white/90 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              FALAR PELO WHATSAPP
            </a>
          </div>

          {/* OTHER SOLUTIONS */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-ink text-sm mb-4">OUTRAS SOLUÇÕES</h3>
            <ul className="space-y-2">
              {SOLUTIONS.filter((s) => s.slug !== solution.slug).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/solucoes/$slug"
                    params={{ slug: s.slug }}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition py-1"
                  >
                    <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ALL PRODUCTS */}
          <Link
            to="/produtos"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary text-primary px-4 py-3 font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition"
          >
            <Package className="h-4 w-4" /> VER TODOS OS PRODUTOS
          </Link>

          <Link
            to="/solucoes"
            className="w-full inline-flex items-center justify-center gap-2 text-muted-foreground text-sm hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Soluções
          </Link>
        </aside>
      </div>
    </div>
  );
}
