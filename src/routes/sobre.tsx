import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, Award, Users, Package, MapPin, MessageCircle, Headphones, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import about from "@/assets/about-factory.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Vplast Embalagens" },
      { name: "description", content: "Conheça a história e missão da Vplast Embalagens: qualidade, resistência e inovação em fitas adesivas." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-orange-soft">
        <div className="relative mx-auto max-w-[1400px] px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow>SOBRE NÓS</SectionEyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              A SEGURANÇA DA SUA EMBALAGEM<br />
              <span className="text-primary">É A NOSSA MISSÃO</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A Vplast Embalagens nasceu com o propósito de oferecer soluções em fitas adesivas e embalagens que unem qualidade, resistência e inovação, garantindo proteção e eficiência em cada etapa do seu processo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mais do que fornecer produtos, construímos relações de confiança e parceria com nossos clientes, entendendo suas necessidades e entregando soluções que geram resultados.
            </p>
            <Link to="/produtos" className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
              <Package className="h-5 w-5" /> CONHEÇA NOSSOS PRODUTOS
            </Link>
          </div>
          <img src={about} alt="Vplast facility" className="rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* ESSÊNCIA */}
      <section className="mx-auto max-w-[1400px] px-6 py-16">
        <h2 className="text-3xl font-extrabold text-center text-ink">
          NOSSA <span className="text-primary">ESSÊNCIA</span>
        </h2>
        <div className="mt-10 bg-white rounded-2xl border border-border grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { Icon: Target, title: "MISSÃO", text: "Oferecer soluções em fitas adesivas e embalagens com qualidade e inovação, garantindo a proteção e eficiência que nossos clientes precisam para crescer e ir mais longe." },
            { Icon: Eye, title: "VISÃO", text: "Ser referência nacional em soluções adesivas e embalagens, reconhecida pela qualidade dos produtos, confiança nas relações e compromisso com o sucesso dos clientes." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="p-8 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-orange-soft grid place-items-center">
                <Icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mt-5 text-primary font-bold tracking-wider">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
          <div className="p-8">
            <div className="mx-auto h-20 w-20 rounded-full bg-orange-soft grid place-items-center">
              <Gem className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mt-5 text-primary font-bold tracking-wider text-center">VALORES</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Qualidade em cada detalhe", "Ética e transparência", "Compromisso com o cliente", "Inovação contínua", "Trabalho em equipe"].map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-[1400px] px-6">
        <div className="bg-[#2a2a2a] rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {[
            { Icon: Award, big: "+10", small: "ANOS", text: "de experiência no mercado" },
            { Icon: Users, big: "+1000", small: "", text: "clientes atendidos" },
            { Icon: Package, big: "+200", small: "", text: "produtos em linha" },
            { Icon: MapPin, big: "TODO O", small: "BRASIL", text: "atendemos em todo o território nacional" },
          ].map(({ Icon, big, small, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Icon className="h-12 w-12 text-primary shrink-0" />
              <div>
                <p className="text-2xl font-extrabold">{big} <span className="text-primary text-base font-bold">{small}</span></p>
                <p className="text-xs text-white/70 mt-1">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-6 py-12">
        <div className="bg-primary rounded-2xl px-8 py-7 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-primary-foreground">
            <div className="h-14 w-14 rounded-full bg-white/15 grid place-items-center">
              <Headphones className="h-7 w-7" />
            </div>
            <p className="font-semibold max-w-md">Conte com a Vplast Embalagens para soluções que protegem, unem e impulsionam o seu negócio!</p>
          </div>
          <Link to="/contato" className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:bg-white/90 transition">
            <MessageCircle className="h-5 w-5" /> FALE COM UM ESPECIALISTA
          </Link>
        </div>
      </section>
    </div>
  );
}
