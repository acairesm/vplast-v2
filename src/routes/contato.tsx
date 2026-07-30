import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Vplast Embalagens | Fale com Nossa Equipe" },
      { name: "description", content: "Entre em contato com a Vplast Embalagens. Atendimento especializado em fitas adesivas para todo o Brasil. WhatsApp, e-mail ou formulário." },
      { property: "og:url", content: "https://lojavplast.com/contato" },
      { property: "og:title", content: "Contato — Vplast Embalagens | Fale com Nossa Equipe" },
      { property: "og:description", content: "Entre em contato com a Vplast Embalagens. Atendimento especializado em fitas adesivas para todo o Brasil. WhatsApp, e-mail ou formulário." },
    ],
    links: [{ rel: "canonical", href: "https://lojavplast.com/contato" }],
  }),
  component: ContatoPage,
});

// ─── Validadores ────────────────────────────────────────────────────────────

function validateName(v: string) {
  if (!v.trim()) return "Nome é obrigatório.";
  if (v.trim().length < 2) return "Nome deve ter ao menos 2 caracteres.";
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(v.trim())) return "Nome deve conter apenas letras.";
  return "";
}

function validateEmail(v: string) {
  if (!v.trim()) return "E-mail é obrigatório.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return "Digite um e-mail válido.";
  return "";
}

function validatePhone(v: string) {
  if (!v) return "";
  const digits = v.replace(/\D/g, "");
  if (digits.length < 10) return "Número incompleto. Ex: (41) 99999-9999";
  const ddd = parseInt(digits.slice(0, 2), 10);
  if (ddd < 11 || ddd > 99) return "DDD inválido.";
  return "";
}

function validateMessage(v: string) {
  if (!v.trim()) return "Mensagem é obrigatória.";
  if (v.trim().length < 10) return "Mensagem muito curta. Escreva pelo menos 10 caracteres.";
  return "";
}

// ─── Máscara de telefone ─────────────────────────────────────────────────────

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

// ─── Componentes de campo ────────────────────────────────────────────────────

function FieldInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  className = "",
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error: string;
  className?: string;
  placeholder?: string;
}) {
  const hasError = !!error;
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-semibold text-ink uppercase tracking-wider">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition ${
          hasError
            ? "border-red-400 focus:ring-red-300 bg-red-50"
            : value
            ? "border-green-400 focus:ring-primary"
            : "border-border focus:ring-primary"
        }`}
      />
      {hasError && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="h-3 w-3 shrink-0" /> {error}
        </p>
      )}
    </div>
  );
}

// ─── Página ──────────────────────────────────────────────────────────────────

function ContatoPage() {
  const [fields, setFields] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({
    name: "", email: "", phone: "", message: "",
  });
  const [touched, setTouched] = useState({
    name: false, email: false, phone: false, message: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(field: keyof typeof fields, value: string) {
    const formatted = field === "phone" ? maskPhone(value) : value;
    setFields((prev) => ({ ...prev, [field]: formatted }));

    if (touched[field as keyof typeof touched] !== undefined) {
      const err =
        field === "name" ? validateName(formatted) :
        field === "email" ? validateEmail(formatted) :
        field === "phone" ? validatePhone(formatted) :
        field === "message" ? validateMessage(formatted) : "";
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  }

  function blur(field: keyof typeof touched) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value = fields[field];
    const err =
      field === "name" ? validateName(value) :
      field === "email" ? validateEmail(value) :
      field === "phone" ? validatePhone(value) :
      field === "message" ? validateMessage(value) : "";
    setErrors((prev) => ({ ...prev, [field]: err }));
  }

  function validate() {
    const e = {
      name: validateName(fields.name),
      email: validateEmail(fields.email),
      phone: validatePhone(fields.phone),
      message: validateMessage(fields.message),
    };
    setErrors(e);
    setTouched({ name: true, email: true, phone: true, message: true });
    return !Object.values(e).some(Boolean);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    const formData = new FormData();
    Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
    formData.append("access_key", "9fdd2fce-4eed-4616-9f35-0c14c47378b8");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFields({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
        setTouched({ name: false, email: false, phone: false, message: false });
        setErrors({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-white to-orange-soft py-10 sm:py-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <SectionEyebrow>CONTATO</SectionEyebrow>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink">
            FALE COM A <span className="text-primary">VPLAST</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Nossa equipe está pronta para entender sua necessidade e indicar a melhor solução em fitas adesivas e embalagens.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-8 sm:py-14 grid lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-10">
        <div className="space-y-5">
          {[
            { Icon: Phone,         title: "Telefone",    lines: ["+55 (41) 9694-7566"],   href: "tel:+5541969447566" },
            { Icon: MessageCircle, title: "WhatsApp",    lines: ["+55 (41) 9694-7566"],   href: "https://wa.me/5541969447566" },
            { Icon: Mail,          title: "E-mail",      lines: ["vendas@vplastcomercio.com.br"], href: "mailto:vendas@vplastcomercio.com.br" },
            { Icon: MapPin,        title: "Endereço",    lines: ["Curitiba — Paraná, Brasil"] },
            { Icon: Clock,         title: "Atendimento", lines: ["Seg a Sex — 8h às 18h"] },
          ].map(({ Icon, title, lines, href }: { Icon: any; title: string; lines: string[]; href?: string }) => (
            <div key={title} className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-soft grid place-items-center shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-ink">{title}</p>
                {lines.map((l) => href
                  ? <a key={l} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="text-sm text-muted-foreground hover:text-primary transition block">{l}</a>
                  : <p key={l} className="text-sm text-muted-foreground">{l}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} noValidate className="bg-white rounded-2xl border border-border p-5 sm:p-8">
          <h2 className="text-2xl font-extrabold text-ink">Envie sua mensagem</h2>
          <p className="text-sm text-muted-foreground mt-2">Responderemos em até 1 dia útil.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <FieldInput
              label="Nome*" name="name" value={fields.name}
              onChange={(v) => set("name", v)} error={touched.name ? errors.name : ""}
              onBlur={() => blur("name")} placeholder="Seu nome completo"
            />
            <div>
              <label htmlFor="company" className="text-xs font-semibold text-ink uppercase tracking-wider">Empresa</label>
              <input
                id="company"
                name="company" value={fields.company}
                onChange={(e) => set("company", e.target.value)}
                placeholder="Nome da empresa (opcional)"
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <FieldInput
              label="E-mail*" name="email" type="email" value={fields.email}
              onChange={(v) => set("email", v)} error={touched.email ? errors.email : ""}
              onBlur={() => blur("email")} placeholder="seuemail@exemplo.com"
            />
            <FieldInput
              label="Telefone" name="phone" value={fields.phone}
              onChange={(v) => set("phone", v)} error={touched.phone ? errors.phone : ""}
              onBlur={() => blur("phone")} placeholder="(41) 99999-9999"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="text-xs font-semibold text-ink uppercase tracking-wider">Assunto</label>
            <input
              id="subject"
              name="subject" value={fields.subject}
              onChange={(e) => set("subject", e.target.value)}
              placeholder="Ex: Orçamento fita crepe 48mm"
              className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-xs font-semibold text-ink uppercase tracking-wider">Mensagem*</label>
            <textarea
              id="message"
              name="message" value={fields.message} rows={5}
              onChange={(e) => set("message", e.target.value)}
              onBlur={() => blur("message")}
              placeholder="Descreva sua necessidade em detalhes..."
              className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition resize-none ${
                touched.message && errors.message
                  ? "border-red-400 focus:ring-red-300 bg-red-50"
                  : fields.message
                  ? "border-green-400 focus:ring-primary"
                  : "border-border focus:ring-primary"
              }`}
            />
            <div className="flex items-center justify-between mt-1">
              {touched.message && errors.message ? (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.message}
                </p>
              ) : <span />}
              <p className="text-xs text-muted-foreground">{fields.message.length} caracteres</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
            {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
          </button>

          {status === "success" && (
            <div className="mt-4 flex items-center gap-2 text-sm text-green-600 font-semibold">
              <CheckCircle className="h-5 w-5" /> Mensagem enviada! Em breve entraremos em contato.
            </div>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-500 font-semibold">
              Erro ao enviar. Tente novamente ou nos chame pelo WhatsApp.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
