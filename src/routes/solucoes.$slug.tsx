import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle, Package, MessageCircle, ChevronRight } from "lucide-react";
import { getSolutionBySlug, SOLUTIONS } from "@/lib/solutions";
import { PRODUCTS } from "@/lib/products";
import { SectionEyebrow } from "@/components/Layout";

export const Route = createFileRoute("/solucoes/$slug")({
  head: ({ params }) => {
    const s = getSolutionBySlug(params.slug);
    return {
      meta: [
        { title: s ? `${s.title} — Soluções Vplast` : "Solução — Vplast" },
        { name: "description", content: s?.tagline ?? "" },
      ],
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
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-4 sm:pt-6 flex items-center gap-2 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/solucoes" className="hover:text-primary">Soluções</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-ink font-medium">{solution.title}</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden mt-4">
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <img
            src={solution.img}
            alt={solution.title}
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
              <MessageCircle className="h-4 w-4" /> FALAR PELO WHATSAPP
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
