import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Handshake, Package, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import { PageTransition, FadeUp, FadeIn, StaggerList, StaggerItem } from "@/components/animations";
import fitaHero from "@/assets/Foto imagem inicio/fotonovoincio.png";
import imgCrepe from "@/assets/fitas inicio novas/Fita Crepe.jpeg";
import imgAcrilica from "@/assets/fitas inicio novas/Fita Acrilica.jpeg";
import imgAutomotiva from "@/assets/fitas inicio novas/Fita Automotiva.jpeg";
import imgDuplaFace from "@/assets/fitas inicio novas/WhatsApp Image 2026-06-22 at 15.09.30(1).jpeg";
import imgAltaAderencia from "@/assets/fitas inicio novas/DUPLA FACE ALTA ADERENCIA 306.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vplast Embalagens — Fitas adesivas e soluções para embalagens" },
      { name: "description", content: "Fitas adesivas de alta performance e soluções completas para garantir segurança, qualidade e eficiência em cada etapa do seu processo." },
    ],
  }),
  component: HomePage,
});

const FEATURED_HOME = [
  { image: imgCrepe,         name: "Fita Crepe",                    desc: "Fixações temporárias, pintura e trabalhos manuais." },
  { image: imgAcrilica,      name: "Fita Acrílica",                 desc: "Fechamento de embalagens e uso geral." },
  { image: imgDuplaFace,     name: "Fita Dupla Face",               desc: "Fixação em superfícies lisas e irregulares." },
  { image: imgAltaAderencia, name: "Dupla Face Alta Aderência 306", desc: "Alta adesão para fixações permanentes." },
  { image: imgAutomotiva,    name: "Fita Automotiva",               desc: "Mascaramento e pintura automotiva profissional." },
];

function HomePage() {
  return (
    <PageTransition>
      <div>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-soft" />
          <div className="absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_70%_50%,oklch(0.96_0.04_60)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-10 grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
            <FadeUp delay={0.1}>
              <SectionEyebrow>FITAS ADESIVAS E SOLUÇÕES PARA EMBALAGENS</SectionEyebrow>
              <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-ink">
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
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  FALE COM UM ESPECIALISTA
                </Link>
              </div>
            </FadeUp>

            <FadeIn delay={0.3}>
              <div className="relative flex items-center justify-center h-56 sm:h-72 lg:h-[460px] pointer-events-none">
                <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                  <path d="M180 0 C520 140, 80 260, 300 400 L600 400 L600 0 Z" fill="#F97316" opacity="0.10"/>
                  <path d="M220 0 C520 120, 80 280, 260 400 L600 400 L600 0 Z" fill="#F97316"/>
                  <path d="M260 0 C540 130, 110 270, 300 400" stroke="white" strokeWidth="40" strokeLinecap="round" opacity="0.13" fill="none"/>
                  <path d="M290 0 C560 140, 140 280, 330 400" stroke="white" strokeWidth="14" strokeLinecap="round" opacity="0.22" fill="none"/>
                </svg>
                <img
                  src={fitaHero}
                  alt="Composição de fitas adesivas Vplast"
                  className="absolute z-10 w-[160%] max-w-[960px] left-[3px] -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain drop-shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>

          {/* features card */}
          <FadeUp delay={0.2} className="relative mx-auto max-w-[1400px] px-6 pb-12">
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-border grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                { Icon: Award,      title: "QUALIDADE",   text: "Produtos desenvolvidos com altos padrões para garantir o melhor desempenho." },
                { Icon: ShieldCheck, title: "RESISTÊNCIA", text: "Materiais de alta performance para proteger suas embalagens em qualquer situação." },
                { Icon: Handshake,  title: "CONFIANÇA",   text: "Compromisso com prazos, atendimento e soluções que geram resultados." },
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
          </FadeUp>
        </section>

        {/* PRODUTOS */}
        <section className="mx-auto max-w-[1400px] px-6 py-16">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              LINHA DE <span className="text-primary">PRODUTOS</span>
            </h2>
          </FadeUp>
          <StaggerList className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {FEATURED_HOME.map((p) => (
              <StaggerItem key={p.name}>
                <Link
                  to="/produtos"
                  className="group bg-white rounded-2xl border border-border overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
                >
                  <div className="aspect-[4/3] bg-secondary overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-center text-ink font-bold uppercase tracking-wide text-sm">{p.name}</h3>
                    <p className="mt-2 text-center text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerList>
        </section>

        {/* CTA */}
        <FadeUp className="mx-auto max-w-[1400px] px-6 pb-16">
          <div className="bg-primary rounded-2xl px-8 py-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-primary-foreground">
              <div className="h-14 w-14 rounded-full bg-white/15 grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <p className="font-semibold text-lg max-w-md">Conte com a Vplast Embalagens para soluções que protegem, unem e impulsionam o seu negócio!</p>
            </div>
            <Link to="/contato" className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:bg-white/90 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              FALE COM UM ESPECIALISTA
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </PageTransition>
  );
}
