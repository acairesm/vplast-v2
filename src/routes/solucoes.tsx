import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { Package, Truck, ShoppingCart, HardHat, Car, Award, ShieldCheck, Settings, Handshake, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import { PageTransition, FadeUp, FadeIn, StaggerList, StaggerItem } from "@/components/animations";
import hero from "@/assets/solutions-hero.jpg";
import { SOLUTIONS } from "@/lib/solutions";

export const Route = createFileRoute("/solucoes")({
  head: ({ matches, match }) => {
    const isLeaf = matches[matches.length - 1]?.id === match.id;
    return {
      meta: [
        { title: "Soluções em Fitas Adesivas — Vplast Embalagens" },
        { name: "description", content: "Soluções completas em fitas adesivas para logística, construção civil, comunicação visual e automotivo. Produtos de alta performance para cada necessidade." },
        { property: "og:url", content: "https://lojavplast.com/solucoes" },
        { property: "og:title", content: "Soluções em Fitas Adesivas — Vplast Embalagens" },
        { property: "og:description", content: "Soluções completas em fitas adesivas para logística, construção civil, comunicação visual e automotivo. Produtos de alta performance para cada necessidade." },
      ],
      // Only emit the listing page's own canonical when it's the active leaf route —
      // otherwise it would duplicate/conflict with the child solution page's canonical.
      links: isLeaf ? [{ rel: "canonical", href: "https://lojavplast.com/solucoes" }] : [],
    };
  },
  component: SolucoesPage,
});

const SEGMENT_ICONS: Record<string, any> = {
  "comunicacao-visual": Package,
  "logistica-e-transporte": Truck,
  "varejo-e-ecommerce": ShoppingCart,
  "construcao-civil": HardHat,
  "automotivo": Car,
};

function SolucoesPage() {
  const childMatches = useChildMatches();
  if (childMatches.length > 0) return <Outlet />;

  return (
    <PageTransition>
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-orange-soft">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <FadeUp delay={0.1}>
          <div>
            <SectionEyebrow>SOLUÇÕES VPLAST</SectionEyebrow>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              SOLUÇÕES INTELIGENTES<br />
              <span className="text-primary">PARA CADA NECESSIDADE</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Oferecemos soluções completas em fitas adesivas e embalagens desenvolvidas para otimizar processos, aumentar a segurança e gerar mais eficiência para o seu negócio.
            </p>
            <Link to="/contato" className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              FALAR COM UM ESPECIALISTA
            </Link>
          </div>
          </FadeUp>
          <FadeIn delay={0.3}><img src={hero} alt="Soluções em fitas adesivas para indústria, logística e automotivo — Vplast Embalagens" fetchPriority="high" className="rounded-2xl shadow-xl" /></FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-10 sm:py-16">
        <FadeUp>
        <h2 className="text-3xl font-extrabold text-center text-ink">
          SOLUÇÕES PARA O <span className="text-primary">SEU SEGMENTO</span>
        </h2>
        </FadeUp>
        <StaggerList className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SOLUTIONS.map((s) => {
            const Icon = SEGMENT_ICONS[s.slug] ?? Package;
            return (
              <StaggerItem key={s.slug}>
              <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <div className="relative h-40">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 h-10 w-10 rounded-full bg-primary grid place-items-center">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-ink text-sm">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{s.tagline}</p>
                  <Link
                    to="/solucoes/$slug"
                    params={{ slug: s.slug }}
                    className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-bold hover:gap-2 transition-all"
                  >
                    VER SOLUÇÕES <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              </StaggerItem>
            );
          })}
        </StaggerList>

        <FadeUp delay={0.1} className="mt-10">
        <div className="bg-white rounded-2xl border border-border grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { Icon: Award,       title: "QUALIDADE COMPROVADA",      text: "Produtos desenvolvidos com altos padrões para garantir o melhor desempenho." },
            { Icon: ShieldCheck, title: "SEGURANÇA GARANTIDA",       text: "Soluções que protegem suas embalagens e o que realmente importa." },
            { Icon: Settings,    title: "EFICIÊNCIA OPERACIONAL",    text: "Produtos que otimizam tempo e recursos em todas as etapas do processo." },
            { Icon: Handshake,   title: "ATENDIMENTO ESPECIALIZADO", text: "Equipe pronta para entender sua necessidade e indicar a melhor solução." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-soft grid place-items-center shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-primary font-bold tracking-wider text-sm">{title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
        </FadeUp>
      </section>
    </div>
    </PageTransition>
  );
}
