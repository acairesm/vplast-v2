import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Truck, ShoppingCart, HardHat, Car, Award, ShieldCheck, Settings, Handshake, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import hero from "@/assets/solutions-hero.jpg";
import industria from "@/assets/seg-industria.jpg";
import logistica from "@/assets/seg-logistica.jpg";
import varejo from "@/assets/seg-varejo.jpg";
import construcao from "@/assets/seg-construcao.jpg";
import auto from "@/assets/seg-auto.jpg";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — Vplast Embalagens" },
      { name: "description", content: "Soluções inteligentes em fitas adesivas e embalagens para indústria, logística, varejo, construção civil e automotivo." },
    ],
  }),
  component: SolucoesPage,
});

const SEGMENTS = [
  { Icon: Package, img: industria, title: "INDÚSTRIA E MANUFATURA", text: "Fitas de alta resistência para fechamento e proteção de embalagens industriais, garantindo segurança e desempenho." },
  { Icon: Truck, img: logistica, title: "LOGÍSTICA E TRANSPORTE", text: "Soluções que garantem a integridade das cargas durante o transporte e armazenagem." },
  { Icon: ShoppingCart, img: varejo, title: "VAREJO E E-COMMERCE", text: "Fitas e embalagens que valorizam sua marca e proporcionam uma excelente experiência ao cliente." },
  { Icon: HardHat, img: construcao, title: "CONSTRUÇÃO CIVIL", text: "Produtos resistentes para aplicações exigentes, com alta durabilidade e proteção em ambientes adversos." },
  { Icon: Car, img: auto, title: "AUTOMOTIVO", text: "Fitas automotivas de alto desempenho para pintura, mascaramento e acabamento profissional." },
];

function SolucoesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-orange-soft">
        <div className="relative mx-auto max-w-[1400px] px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow>SOLUÇÕES VPLAST</SectionEyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              SOLUÇÕES INTELIGENTES<br />
              <span className="text-primary">PARA CADA NECESSIDADE</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Oferecemos soluções completas em fitas adesivas e embalagens desenvolvidas para otimizar processos, aumentar a segurança e gerar mais eficiência para o seu negócio.
            </p>
            <Link to="/contato" className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
              <Package className="h-5 w-5" /> FALAR COM UM ESPECIALISTA
            </Link>
          </div>
          <img src={hero} alt="Soluções" className="rounded-2xl shadow-xl" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <h2 className="text-3xl font-extrabold text-center text-ink">
          SOLUÇÕES PARA O <span className="text-primary">SEU SEGMENTO</span>
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SEGMENTS.map(({ Icon, img, title, text }) => (
            <div key={title} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition flex flex-col">
              <div className="relative h-40">
                <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 h-10 w-10 rounded-full bg-primary grid place-items-center">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-ink text-sm">{title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{text}</p>
                <Link to="/contato" className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-bold hover:gap-2 transition-all">
                  VER SOLUÇÕES <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-2xl border border-border grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { Icon: Award, title: "QUALIDADE COMPROVADA", text: "Produtos desenvolvidos com altos padrões para garantir o melhor desempenho." },
            { Icon: ShieldCheck, title: "SEGURANÇA GARANTIDA", text: "Soluções que protegem suas embalagens e o que realmente importa." },
            { Icon: Settings, title: "EFICIÊNCIA OPERACIONAL", text: "Produtos que otimizam tempo e recursos em todas as etapas do processo." },
            { Icon: Handshake, title: "ATENDIMENTO ESPECIALIZADO", text: "Equipe pronta para entender sua necessidade e indicar a melhor solução." },
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
      </section>
    </div>
  );
}
