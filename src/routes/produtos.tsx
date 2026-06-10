import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Boxes, Package, Layers, Tag, Sparkles, Shield, RotateCcw, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import hero from "@/assets/hero-tapes.jpg";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Vplast Embalagens" },
      { name: "description", content: "Linha completa de fitas adesivas, fitas crepe, dupla face, impressas, gomadas e mantas asfálticas." },
    ],
  }),
  component: ProdutosPage,
});

const CAT_ICONS: Record<string, any> = {
  "Fitas Crepe": Boxes,
  "Fitas Adesivas": Package,
  "Fitas Dupla Face": Layers,
  "Fitas Impressas e Gomadas": Tag,
  "Fitas Especiais": Sparkles,
  "Mantas Asfálticas": Shield,
};

const APPS = ["Fechamento de Embalagens", "Pintura e Acabamento", "Fixação e Montagem", "Impermeabilização", "Uso Geral"];

function ProdutosPage() {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [apps, setApps] = useState<string[]>([]);
  const filtered = PRODUCTS.filter((p) => !selectedCat || p.category === selectedCat);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-orange-soft">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_50%,oklch(0.96_0.04_60)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionEyebrow>PRODUTOS</SectionEyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">
              LINHA DE <span className="text-primary">PRODUTOS</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
              São diversas opções de fitas adesivas e soluções para embalagens, desenvolvidas para garantir qualidade, segurança e eficiência.
            </p>
          </div>
          <img src={hero} alt="Produtos Vplast" className="w-full" />
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="text-primary font-bold tracking-wider text-sm mb-4">CATEGORIAS</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setSelectedCat(null)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
                    selectedCat === null ? "bg-orange-soft text-primary font-semibold" : "hover:bg-secondary"
                  }`}
                >
                  <span className="flex items-center gap-2"><Boxes className="h-4 w-4" /> Todas as categorias</span>
                </button>
              </li>
              {CATEGORIES.map((c) => {
                const Icon = CAT_ICONS[c] ?? Package;
                const active = selectedCat === c;
                return (
                  <li key={c}>
                    <button
                      onClick={() => setSelectedCat(c)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
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
              {APPS.map((a) => (
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
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary text-xs font-bold py-2.5 hover:bg-primary hover:text-primary-foreground transition"
            >
              <RotateCcw className="h-3.5 w-3.5" /> LIMPAR FILTROS
            </button>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">Mostrando {filtered.length} produtos</p>
            <select className="text-sm border border-border rounded-lg px-4 py-2 bg-white">
              <option>Ordenar por: Mais recentes</option>
              <option>A-Z</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <div key={p.slug} className="group bg-white rounded-2xl border border-border p-5 hover:shadow-xl transition flex flex-col">
                <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="mt-4 text-center font-bold uppercase text-sm text-ink leading-tight">{p.name}</h3>
                <p className="mt-2 text-center text-xs text-muted-foreground flex-1">{p.description}</p>
                <Link
                  to="/produtos/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center justify-center gap-1 text-primary text-xs font-bold tracking-wide hover:gap-2 transition-all"
                >
                  VER DETALHES <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-6 py-3 font-bold text-sm hover:bg-primary hover:text-primary-foreground transition">
              <Package className="h-4 w-4" /> CARREGAR MAIS PRODUTOS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
