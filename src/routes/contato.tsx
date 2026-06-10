import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Vplast Embalagens" },
      { name: "description", content: "Fale com a Vplast Embalagens. Atendimento especializado em todo o Brasil." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="bg-gradient-to-br from-white to-orange-soft py-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionEyebrow>CONTATO</SectionEyebrow>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">
            FALE COM A <span className="text-primary">VPLAST</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Nossa equipe está pronta para entender sua necessidade e indicar a melhor solução em fitas adesivas e embalagens.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 grid lg:grid-cols-[1fr_1.3fr] gap-10">
        <div className="space-y-5">
          {[
            { Icon: Phone, title: "Telefone", lines: ["(11) 4000-0000"] },
            { Icon: MessageCircle, title: "WhatsApp", lines: ["(11) 90000-0000"] },
            { Icon: Mail, title: "E-mail", lines: ["contato@vplast.com.br"] },
            { Icon: MapPin, title: "Endereço", lines: ["Av. Industrial, 1000", "São Paulo - SP"] },
            { Icon: Clock, title: "Atendimento", lines: ["Seg a Sex - 8h às 18h"] },
          ].map(({ Icon, title, lines }) => (
            <div key={title} className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-soft grid place-items-center shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-ink">{title}</p>
                {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-white rounded-2xl border border-border p-8"
        >
          <h2 className="text-2xl font-extrabold text-ink">Envie sua mensagem</h2>
          <p className="text-sm text-muted-foreground mt-2">Responderemos em até 1 dia útil.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Nome*" name="name" />
            <Field label="Empresa" name="company" />
            <Field label="E-mail*" name="email" type="email" />
            <Field label="Telefone" name="phone" />
          </div>
          <Field label="Assunto" name="subject" className="mt-4" />
          <div className="mt-4">
            <label className="text-xs font-semibold text-ink uppercase tracking-wider">Mensagem*</label>
            <textarea required rows={5} className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <button className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition">
            <Send className="h-4 w-4" /> ENVIAR MENSAGEM
          </button>
          {sent && <p className="mt-4 text-sm text-primary font-semibold">✓ Mensagem enviada! Em breve entraremos em contato.</p>}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", className = "" }: { label: string; name: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold text-ink uppercase tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        required={label.includes("*")}
        className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
