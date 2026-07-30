import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, Award, Users, Package, MapPin, MessageCircle, Mail, Headphones, CheckCircle2, Truck, Clock, ThumbsUp, Handshake, Search, PhoneCall, ShieldCheck, Star } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import { PageTransition, FadeUp, FadeIn, StaggerList, StaggerItem, AnimatedCounter } from "@/components/animations";
import about from "@/assets/Cara segurando caixa.jpeg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Vplast Embalagens | Fitas Adesivas em Curitiba" },
      { name: "description", content: "Conheça a Vplast Embalagens, empresa em Curitiba especializada em fitas adesivas e soluções para embalagens. Qualidade, resistência e atendimento personalizado." },
      { property: "og:url", content: "https://lojavplast.com/sobre" },
      { property: "og:title", content: "Sobre Nós — Vplast Embalagens | Fitas Adesivas em Curitiba" },
      { property: "og:description", content: "Conheça a Vplast Embalagens, empresa em Curitiba especializada em fitas adesivas e soluções para embalagens. Qualidade, resistência e atendimento personalizado." },
    ],
    links: [{ rel: "canonical", href: "https://lojavplast.com/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <PageTransition>
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-orange-soft">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <FadeUp delay={0.1}><div>
            <SectionEyebrow>SOBRE NÓS</SectionEyebrow>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              A SEGURANÇA DA SUA EMBALAGEM<br />
              <span className="text-primary">É A NOSSA MISSÃO</span>
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A Vplast Embalagens nasceu com o propósito de oferecer soluções em fitas adesivas e embalagens que unem qualidade, resistência e inovação, garantindo proteção e eficiência em cada etapa do seu processo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mais do que fornecer produtos, construímos relações de confiança e parceria com nossos clientes, entendendo suas necessidades e entregando soluções que geram resultados reais.
            </p>
            <Link to="/produtos" className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
              <Package className="h-5 w-5" /> CONHEÇA NOSSOS PRODUTOS
            </Link>
          </div></FadeUp>
          <FadeIn><img src={about} alt="Equipe Vplast Embalagens em Curitiba" fetchPriority="high" className="rounded-2xl shadow-xl" /></FadeIn>
        </div>
      </section>

      {/* ESSÊNCIA */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-10 sm:py-16">
        <FadeUp>
        <h2 className="text-3xl font-extrabold text-center text-ink">
          NOSSA <span className="text-primary">ESSÊNCIA</span>
        </h2>
        </FadeUp>
        <FadeUp delay={0.15}><div className="mt-10 bg-white rounded-2xl border border-border grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
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
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div></FadeUp>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-[#f9f6f2] py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <FadeUp>
          <SectionEyebrow>POR QUE NOS ESCOLHER</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-ink">
            OS NOSSOS <span className="text-primary">DIFERENCIAIS</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
            Não basta ter bons produtos — precisamos ser a melhor experiência de compra e parceria para você.
          </p>
          </FadeUp>
          <StaggerList className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: ShieldCheck, title: "Qualidade Garantida", text: "Todos os produtos passam por controle rigoroso antes de chegar até você. Trabalhamos apenas com matéria-prima de alto padrão." },
              { Icon: Truck, title: "Entrega em Todo o Brasil", text: "Atendemos empresas em todo o território nacional com agilidade e segurança na entrega de qualquer volume de pedido." },
              { Icon: ThumbsUp, title: "Ampla Variedade de Produtos", text: "Mais de 200 itens em catálogo para você encontrar exatamente o que seu processo precisa, sem precisar buscar em vários fornecedores." },
              { Icon: Clock, title: "Agilidade no Atendimento", text: "Respondemos rápido, cotamos com praticidade e processamos pedidos com eficiência para você nunca parar sua linha de produção." },
              { Icon: Handshake, title: "Parceria de Longo Prazo", text: "Construímos relações duradouras com nossos clientes. Sua empresa cresce e a Vplast acompanha cada passo desse crescimento." },
              { Icon: Star, title: "Atendimento Especializado", text: "Nossa equipe conhece profundamente cada produto e segmento. Indicamos a solução certa para o seu caso, sem achismos." },
            ].map(({ Icon, title, text }) => (
              <StaggerItem key={title}>
                <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition">
                  <div className="h-12 w-12 rounded-full bg-orange-soft grid place-items-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold text-ink text-sm">{title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-10 sm:py-16">
        <FadeUp>
        <div className="bg-[#2a2a2a] rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {[
            { Icon: Award,   target: 10,   suffix: "+ ANOS",    text: "de experiência no mercado" },
            { Icon: Users,   target: 1000, suffix: "+",         text: "clientes atendidos" },
            { Icon: Package, target: 200,  suffix: "+",         text: "produtos em catálogo" },
          ].map(({ Icon, target, suffix, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Icon className="h-12 w-12 text-primary shrink-0" />
              <div>
                <p className="text-2xl font-extrabold text-white">
                  <AnimatedCounter target={target} suffix={suffix} className="text-white" />
                </p>
                <p className="text-xs text-white/70 mt-1">{text}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4">
            <MapPin className="h-12 w-12 text-primary shrink-0" />
            <div>
              <p className="text-2xl font-extrabold">TODO O <span className="text-primary text-base font-bold">BRASIL</span></p>
              <p className="text-xs text-white/70 mt-1">atendimento em todo o território nacional</p>
            </div>
          </div>
        </div>
        </FadeUp>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="bg-[#f9f6f2] py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <FadeUp>
          <SectionEyebrow>PROCESSO</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-ink">
            COMO <span className="text-primary">TRABALHAMOS</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">
            Do primeiro contato à entrega, cada etapa é pensada para garantir a melhor experiência.
          </p>
          </FadeUp>
          <StaggerList className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", Icon: PhoneCall, title: "Contato Inicial",       text: "Você entra em contato via WhatsApp, e-mail ou formulário. Nossa equipe responde com rapidez e atenção." },
              { step: "02", Icon: Search,    title: "Análise da Necessidade", text: "Entendemos seu processo, volume e aplicação para recomendar os produtos ideais — sem empurrar o que você não precisa." },
              { step: "03", Icon: Package,   title: "Proposta e Pedido",      text: "Enviamos uma proposta clara com preços, prazos e condições. Aprovado, processamos o pedido com agilidade." },
              { step: "04", Icon: Truck,     title: "Entrega e Suporte",      text: "Seu pedido chega no prazo combinado. E se precisar de suporte depois, estamos aqui para resolver." },
            ].map(({ step, Icon, title, text }) => (
              <StaggerItem key={step}>
                <div className="relative bg-white rounded-2xl border border-border p-6">
                  <span className="text-5xl font-extrabold text-orange-soft/80 absolute top-4 right-5 select-none">{step}</span>
                  <div className="h-12 w-12 rounded-full bg-primary grid place-items-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-bold text-ink text-sm leading-snug">{title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-8 sm:py-16"><FadeUp>
        <div className="bg-white rounded-2xl border border-border overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <SectionEyebrow>ONDE ESTAMOS</SectionEyebrow>
            <h2 className="mt-4 text-2xl font-extrabold text-ink">
              LOCALIZADOS EM <span className="text-primary">CURITIBA — PR</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              Nosso centro de distribuição fica em Curitiba, Paraná, com logística estruturada para atender clientes em todo o Brasil com rapidez e confiabilidade.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { Icon: MapPin,        text: "Curitiba — Paraná, Brasil" },
                { Icon: PhoneCall,     text: "+55 (41) 9694-7566", href: "tel:+5541969447566" },
                { Icon: MessageCircle, text: "vendas@vplastcomercio.com.br", href: "mailto:vendas@vplastcomercio.com.br" },
                { Icon: Clock,         text: "Seg a Sex — 8h às 18h" },
              ].map(({ Icon, text, href }: { Icon: any; text: string; href?: string }) => (
                <li key={text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-8 w-8 rounded-full bg-orange-soft grid place-items-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {href ? <a href={href} className="hover:text-primary transition">{text}</a> : text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition"
              >
                <Mail className="h-4 w-4" /> ENVIAR E-MAIL
              </Link>
              <a
                href="https://wa.me/5541969447566"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3 font-semibold text-sm hover:opacity-90 transition"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WHATSAPP
              </a>
            </div>
          </div>
          <div className="bg-orange-soft/30 grid place-items-center min-h-[260px]">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-primary mx-auto" />
              <p className="mt-4 text-2xl font-extrabold text-ink">Curitiba</p>
              <p className="text-primary font-semibold">Paraná — Brasil</p>
              <p className="mt-3 text-sm text-muted-foreground">Entregas para todo o território nacional</p>
            </div>
          </div>
        </div>
      </FadeUp></section>

      {/* CTA */}
      <FadeUp className="mx-auto max-w-[1400px] px-6 pb-16">
        <div className="bg-primary rounded-2xl px-8 py-7 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-primary-foreground">
            <div className="h-14 w-14 rounded-full bg-white/15 grid place-items-center">
              <Headphones className="h-7 w-7" />
            </div>
            <p className="font-semibold max-w-md">Conte com a Vplast Embalagens para soluções que protegem, unem e impulsionam o seu negócio!</p>
          </div>
          <Link to="/contato" className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:bg-white/90 transition">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            FALE COM UM ESPECIALISTA
          </Link>
        </div>
      </FadeUp>
    </div>
    </PageTransition>
  );
}
