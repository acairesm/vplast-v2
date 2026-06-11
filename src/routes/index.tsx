import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Handshake, Package, MessageCircle, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import { PRODUCTS } from "@/lib/products";
import hero from "@/assets/hero-tapes.jpg";
import tapesCutout from "@/assets/hero-tapes-cutout.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vplast Embalagens — Fitas adesivas e soluções para embalagens" },
      { name: "description", content: "Fitas adesivas de alta performance e soluções completas para garantir segurança, qualidade e eficiência em cada etapa do seu processo." },
    ],
  }),
  component: HomePage,
});

const FEATURED = ["Fitas Crepe", "Fitas Adesivas", "Fitas Dupla Face", "Fitas Impressas e Gomadas", "Mantas Asfálticas"];

function HomePage() {
  const featuredProducts = FEATURED.map((cat) => PRODUCTS.find((p) => p.category === cat)!).filter(Boolean);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-soft" />
        <div className="absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_70%_50%,oklch(0.96_0.04_60)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-8 pb-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionEyebrow>FITAS ADESIVAS E SOLUÇÕES PARA EMBALAGENS</SectionEyebrow>
            <h1 className="mt-5 text-5xl md:text-6xl font-extrabold leading-[1.05] text-ink">
              PROTEÇÃO MÁXIMA<br />
              <span className="text-primary">PARA SUAS EMBALAGENS</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Na Vplast Embalagens, oferecemos fitas adesivas de alta performance e soluções completas para garantir segurança, qualidade e eficiência em cada etapa do seu processo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/produtos" className="inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
                <Package className="h-5 w-5" />
                CONHEÇA NOSSOS PRODUTOS
              </Link>
              <Link to="/contato" className="inline-flex items-center gap-3 rounded-xl border-2 border-primary text-primary px-6 py-3.5 font-semibold hover:bg-primary hover:text-primary-foreground transition">
                <MessageCircle className="h-5 w-5" />
                FALE COM UM ESPECIALISTA
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-80 lg:h-[460px]">
            <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <path d="M180 0 C520 140, 80 260, 300 400 L600 400 L600 0 Z" fill="#F97316" opacity="0.10"/>
              <path d="M220 0 C520 120, 80 280, 260 400 L600 400 L600 0 Z" fill="#F97316"/>
              <path d="M260 0 C540 130, 110 270, 300 400" stroke="white" strokeWidth="40" strokeLinecap="round" opacity="0.13" fill="none"/>
              <path d="M290 0 C560 140, 140 280, 330 400" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.22" fill="none"/>
            </svg>
            <img
              src={tapesCutout.url}
              alt="Composição de fitas adesivas Vplast"
              className="relative z-10 w-[110%] max-w-[680px] object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            />
          </div>


        </div>

        {/* features card */}
        <div className="relative mx-auto max-w-[1400px] px-6 pb-12">
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-border grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { Icon: Award, title: "QUALIDADE", text: "Produtos desenvolvidos com altos padrões para garantir o melhor desempenho." },
              { Icon: ShieldCheck, title: "RESISTÊNCIA", text: "Materiais de alta performance para proteger suas embalagens em qualquer situação." },
              { Icon: Handshake, title: "CONFIANÇA", text: "Compromisso com prazos, atendimento e soluções que geram resultados." },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="p-7 flex items-start gap-5">
                <div className="h-14 w-14 rounded-full bg-primary grid place-items-center shrink-0">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary font-bold tracking-wider">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
          LINHA DE <span className="text-primary">PRODUTOS</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((p) => (
            <Link
              key={p.slug}
              to="/produtos"
              className="group bg-white rounded-2xl border border-border p-5 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                <img src={p.image} alt={p.category} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <h3 className="mt-5 text-center text-ink font-bold uppercase tracking-wide text-sm">
                {p.category}
              </h3>
              <p className="mt-2 text-center text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 pb-16">
        <div className="bg-primary rounded-2xl px-8 py-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-primary-foreground">
            <div className="h-14 w-14 rounded-full bg-white/15 grid place-items-center">
              <MessageCircle className="h-7 w-7" />
            </div>
            <p className="font-semibold text-lg max-w-md">Conte com a Vplast Embalagens para soluções que protegem, unem e impulsionam o seu negócio!</p>
          </div>
          <Link to="/contato" className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:bg-white/90 transition">
            <MessageCircle className="h-5 w-5" />
            FALE COM UM ESPECIALISTA
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
