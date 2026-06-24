import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV: { to: string; label: string; hasDropdown?: boolean }[] = [
  { to: "/", label: "HOME" },
  { to: "/produtos", label: "PRODUTOS", hasDropdown: true },
  { to: "/sobre", label: "SOBRE NÓS" },
  { to: "/solucoes", label: "SOLUÇÕES" },
  { to: "/contato", label: "CONTATO" },
];

const WPP_LINK = "https://wa.me/5541969447566";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center group">
          <img src={logo} alt="Vplast Embalagens" className="h-26 w-auto transition-transform duration-300 group-hover:scale-110" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => {
            const active = pathname === n.to || (n.to !== "/" && pathname.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to as "/"}
                className={`relative text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors ${
                  active ? "text-primary" : "text-ink hover:text-primary"
                }`}
              >
                {n.label}
                {n.hasDropdown && <ChevronDown className="h-3 w-3" />}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
        <a
          href={WPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-green-500/30 hover:bg-[#1ebe5d] transition"
        >
          <WhatsAppIcon className="h-4 w-4" />
          FALE CONOSCO
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/80 mt-20">
      <div className="mx-auto max-w-[1400px] px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} alt="Vplast Embalagens" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed">
            Fitas adesivas e soluções completas em embalagens para garantir segurança, qualidade e
            eficiência em cada etapa do seu processo.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-[#25D366] transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to as "/"} className="hover:text-primary">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Produtos</h4>
          <ul className="space-y-2 text-sm">
            <li>Fitas Crepe</li>
            <li>Fitas Adesivas</li>
            <li>Fitas Dupla Face</li>
            <li>Fitas Impressas e Gomadas</li>
            <li>Fitas Especiais</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /> +55 (41) 9694-7566</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> contato@vplast.com.br</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Curitiba — Paraná, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Vplast Embalagens. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Falar pelo WhatsApp"
    >
      {/* tooltip */}
      <span className="hidden group-hover:flex items-center bg-white text-ink text-xs font-semibold px-3 py-2 rounded-full shadow-lg border border-border whitespace-nowrap">
        Falar pelo WhatsApp
      </span>
      {/* botão */}
      <div className="relative h-14 w-14 rounded-full bg-[#25D366] shadow-lg shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-transform duration-200">
        {/* pulsar */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <WhatsAppIcon className="h-7 w-7 text-white relative z-10" />
      </div>
    </a>
  );
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-primary font-semibold text-sm tracking-[0.2em]">
      <span className="h-0.5 w-10 bg-primary" />
      {children}
    </div>
  );
}
