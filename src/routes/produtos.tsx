import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { ChevronRight, Boxes, Package, Layers, Tag, Sparkles, RotateCcw, ArrowRight, SlidersHorizontal, X, Ruler } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import { PageTransition, FadeUp, StaggerList, StaggerItem } from "@/components/animations";
import { PRODUCTS, CATEGORIES, APPLICATIONS } from "@/lib/products";
import fitaHero from "@/assets/novaImageminicio.png";

export const Route = createFileRoute("/produtos")({
  validateSearch: z.object({
    categoria: z.string().optional(),
  }),
  head: () => ({
    meta: [
      { title: "Produtos — Vplast Embalagens | Fitas Adesivas, Crepe, Dupla Face e Mais" },
      { name: "description", content: "Catálogo completo de fitas adesivas: fita crepe, dupla face, acrílica, impressa, gomada e personalizadas. Alta qualidade com entrega para todo o Brasil." },
      { property: "og:url", content: "https://vplastcomercio.com.br/produtos" },
      { property: "og:title", content: "Produtos — Vplast Embalagens | Fitas Adesivas, Crepe, Dupla Face e Mais" },
      { property: "og:description", content: "Catálogo completo de fitas adesivas: fita crepe, dupla face, acrílica, impressa, gomada e personalizadas. Alta qualidade com entrega para todo o Brasil." },
    ],
    links: [{ rel: "canonical", href: "https://vplastcomercio.com.br/produtos" }],
  }),
  component: ProdutosPage,
});

const CAT_ICONS: Record<string, any> = {
  "Fitas Crepe": Boxes,
  "Fitas Adesivas": Package,
  "Fitas Dupla Face": Layers,
  "Fitas Impressas e Gomadas": Tag,
  "Fitas Personalizadas": Sparkles,
};

function ProdutosPage() {
  const childMatches = useChildMatches();
  const { categoria } = Route.useSearch();
  const [selectedCat, setSelectedCat] = useState<string | null>(categoria ?? null);
  const [apps, setApps] = useState<string[]>([]);

  useEffect(() => {
    if (categoria) setSelectedCat(categoria);
  }, [categoria]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = PRODUCTS.filter(
    (p) =>
      (!selectedCat || p.category === selectedCat) &&
      (apps.length === 0 || apps.some((a) => p.applications.includes(a)))
  );

  const hasFilters = selectedCat !== null || apps.length > 0;

  if (childMatches.length > 0) return <Outlet />;

  return (
    <PageTransition>
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden flex items-stretch" style={{ minHeight: "clamp(140px, 22vw, 288px)" }}>
        {/* Mobile: fundo laranja suave à direita */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 sm:hidden bg-primary/10" />
        <div className="flex-1 bg-white flex items-center px-5 sm:px-8 lg:px-16 z-10 py-8 sm:py-0">
          <FadeUp delay={0.1}><div>
            <SectionEyebrow>PRODUTOS</SectionEyebrow>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
              LINHA DE <span className="text-primary">PRODUTOS</span>
            </h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground max-w-md leading-relaxed hidden sm:block">
              São diversas opções de fitas adesivas e soluções para embalagens,<br className="hidden md:block" /> desenvolvidas para garantir qualidade, segurança e eficiência.
            </p>
          </div></FadeUp>
        </div>
        <div className="hidden sm:block relative w-[45%] lg:w-[40%] bg-white overflow-hidden shrink-0">
          <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M180 0 C520 140, 80 260, 300 400 L600 400 L600 0 Z" fill="#F97316" opacity="0.10"/>
            <path d="M220 0 C520 120, 80 280, 260 400 L600 400 L600 0 Z" fill="#F97316"/>
            <path d="M260 0 C540 130, 110 270, 300 400" stroke="white" strokeWidth="40" strokeLinecap="round" opacity="0.13" fill="none"/>
            <path d="M290 0 C560 140, 140 280, 330 400" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.22" fill="none"/>
          </svg>
          <img
            src={fitaHero}
            alt="Produtos Vplast"
            className="absolute inset-0 m-auto h-[140%] w-auto object-contain drop-shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Mobile filter bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-border px-4 py-3 flex items-center justify-between gap-3">
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-4 py-2 text-sm font-bold cursor-pointer"
        >
          <SlidersHorizontal className="h-4 w-4" />
          FILTROS
          {hasFilters && (
            <span className="h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              {(selectedCat ? 1 : 0) + apps.length}
            </span>
          )}
        </button>
        <p className="text-xs text-muted-foreground">{filtered.length} produtos</p>
        {hasFilters && (
          <button
            onClick={() => { setSelectedCat(null); setApps([]); }}
            className="inline-flex items-center gap-1 text-xs text-primary font-semibold cursor-pointer"
          >
            <X className="h-3.5 w-3.5" /> Limpar
          </button>
        )}
      </div>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="relative ml-auto w-[85%] max-w-sm bg-white h-full overflow-y-auto shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-ink">Filtros</h3>
              <button onClick={() => setSidebarOpen(false)} className="cursor-pointer"><X className="h-5 w-5" /></button>
            </div>

            <div>
              <h3 className="text-primary font-bold tracking-wider text-sm mb-3">CATEGORIAS</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => { setSelectedCat(null); setApps([]); }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                      selectedCat === null && !apps.includes("Fitas Sob Medida") ? "bg-orange-soft text-primary font-semibold" : "hover:bg-secondary"
                    }`}
                  >
                    <Boxes className="h-4 w-4" /> Todas as categorias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setSelectedCat(null); setApps(apps.includes("Fitas Sob Medida") ? apps.filter(x => x !== "Fitas Sob Medida") : ["Fitas Sob Medida"]); }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                      apps.includes("Fitas Sob Medida") ? "bg-orange-soft text-primary font-semibold" : "text-ink hover:bg-secondary"
                    }`}
                  >
                    <Ruler className="h-4 w-4" /> Fitas Sob Medida
                  </button>
                </li>
                {CATEGORIES.map((c) => {
                  const Icon = CAT_ICONS[c] ?? Package;
                  return (
                    <li key={c}>
                      <button
                        onClick={() => { setSelectedCat(c); setApps([]); }}
                        className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                          selectedCat === c ? "bg-orange-soft text-primary font-semibold" : "text-ink hover:bg-secondary"
                        }`}
                      >
                        <Icon className="h-4 w-4" /> {c}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-primary font-bold tracking-wider text-sm mb-3">APLICAÇÕES</h3>
              <ul className="space-y-3">
                {APPLICATIONS.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={apps.includes(a)}
                      onChange={(e) =>
                        setApps((prev) => (e.target.checked ? [...prev, a] : prev.filter((x) => x !== a)))
                      }
                      className="h-4 w-4 accent-primary"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => { setSelectedCat(null); setApps([]); setSidebarOpen(false); }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary text-xs font-bold py-2.5 hover:bg-primary hover:text-primary-foreground transition cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> LIMPAR FILTROS
            </button>

            <button
              onClick={() => setSidebarOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-bold py-3 cursor-pointer"
            >
              VER {filtered.length} PRODUTOS
            </button>
          </div>
        </div>
      )}

      {/* GRID */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-8 sm:py-12 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* SIDEBAR desktop */}
        <aside className="hidden lg:block space-y-6">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-primary font-bold tracking-wider text-sm mb-4">CATEGORIAS</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => { setSelectedCat(null); setApps([]); }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                    selectedCat === null && !apps.includes("Fitas Sob Medida") ? "bg-orange-soft text-primary font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  <span className="flex items-center gap-2"><Boxes className="h-4 w-4" /> Todas as categorias</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setSelectedCat(null); setApps(apps.includes("Fitas Sob Medida") ? apps.filter(x => x !== "Fitas Sob Medida") : ["Fitas Sob Medida"]); }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                    apps.includes("Fitas Sob Medida") ? "bg-orange-soft text-primary font-semibold" : "text-ink hover:bg-secondary"
                  }`}
                >
                  <span className="flex items-center gap-2"><Ruler className="h-4 w-4" /> Fitas Sob Medida</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </li>
              {CATEGORIES.map((c) => {
                const Icon = CAT_ICONS[c] ?? Package;
                const active = selectedCat === c;
                return (
                  <li key={c}>
                    <button
                      onClick={() => { setSelectedCat(c); setApps([]); }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${
                        active ? "bg-orange-soft text-primary font-semibold" : "text-ink hover:bg-secondary"
                      }`}
                    >
                      <span className="flex items-center gap-2"><Icon className="h-4 w-4" /> {c}</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-primary font-bold tracking-wider text-sm mb-4">APLICAÇÕES</h3>
            <ul className="space-y-3">
              {APPLICATIONS.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={apps.includes(a)}
                    onChange={(e) =>
                      setApps((prev) => (e.target.checked ? [...prev, a] : prev.filter((x) => x !== a)))
                    }
                    className="h-4 w-4 accent-primary"
                  />
                  {a}
                </li>
              ))}
            </ul>
            <button
              onClick={() => { setSelectedCat(null); setApps([]); }}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary text-xs font-bold py-2.5 hover:bg-primary hover:text-primary-foreground transition cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> LIMPAR FILTROS
            </button>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div>
          <div className="hidden lg:flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">Mostrando {filtered.length} produtos</p>
            <select className="text-sm border border-border rounded-lg px-4 py-2 bg-white">
              <option>Ordenar por: Mais recentes</option>
              <option>A-Z</option>
            </select>
          </div>

          <StaggerList className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-5">
            {filtered.map((p) => (
              <StaggerItem key={p.slug}>
              <div className="group bg-white rounded-2xl border border-border p-3 sm:p-5 hover:shadow-xl transition flex flex-col h-full">
                <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-center font-bold uppercase text-xs sm:text-sm text-ink leading-tight">{p.name}</h3>
                <p className="mt-1 sm:mt-2 text-center text-xs text-muted-foreground flex-1 hidden sm:block">{p.description}</p>
                <Link
                  to="/produtos/$slug"
                  params={{ slug: p.slug }}
                  className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-1 text-primary text-xs font-bold tracking-wide hover:gap-2 transition-all"
                >
                  VER DETALHES <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              </StaggerItem>
            ))}
          </StaggerList>

        </div>
      </section>
    </div>
    </PageTransition>
  );
}
