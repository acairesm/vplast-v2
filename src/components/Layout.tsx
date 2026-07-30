import { useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV: { to: string; label: string; hasDropdown?: boolean }[] = [
  { to: "/", label: "HOME" },
  { to: "/produtos", label: "PRODUTOS", hasDropdown: true },
  { to: "/sobre", label: "SOBRE NÓS" },
  { to: "/solucoes", label: "SOLUÇÕES" },
  { to: "/contato", label: "CONTATO" },
];

const WPP_LINK = "https://wa.me/554196947566";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobile() { setMobileOpen(false); }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0" onClick={closeMobile}>
          <img src={logo} alt="Vplast Embalagens" className="h-20 sm:h-26 w-auto transition-transform duration-300 group-hover:scale-110" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8">
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

        {/* Desktop CTA */}
        <a
          href={WPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-green-500/30 hover:bg-[#1ebe5d] transition"
        >
          <WhatsAppIcon className="h-4 w-4" />
          FALE CONOSCO
        </a>

        {/* Mobile: WPP icon + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-green-500/30"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-ink hover:bg-secondary transition cursor-pointer"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-1 shadow-lg">
          {NAV.map((n) => {
            const active = pathname === n.to || (n.to !== "/" && pathname.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to as "/"}
                onClick={closeMobile}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  active ? "bg-orange-soft text-primary" : "text-ink hover:bg-secondary"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <a
            href={WPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={closeMobile}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-3 text-sm font-semibold"
          >
            <WhatsAppIcon className="h-4 w-4" /> FALAR PELO WHATSAPP
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/80 mt-20">
      <div className="mx-auto max-w-[1400px] px-6 py-14 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Vplast Embalagens" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed">
            Fitas adesivas e soluções completas em embalagens para garantir segurança, qualidade e
            eficiência em cada etapa do seu processo.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/vplast_?igsh=M2FzYWM4anJsNWNx" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">CNPJ: 60.151.779/0001-78</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">HOME</Link></li>
            <li><Link to="/produtos" className="hover:text-primary">PRODUTOS</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">SOBRE NÓS</Link></li>
            <li><Link to="/solucoes" className="hover:text-primary">SOLUÇÕES</Link></li>
            <li><Link to="/contato" className="hover:text-primary">CONTATO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Produtos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/produtos" search={{ categoria: "Fitas Crepe" }} className="hover:text-primary">Fitas Crepe</Link></li>
            <li><Link to="/produtos" search={{ categoria: "Fitas Adesivas" }} className="hover:text-primary">Fitas Adesivas</Link></li>
            <li><Link to="/produtos" search={{ categoria: "Fitas Dupla Face" }} className="hover:text-primary">Fitas Dupla Face</Link></li>
            <li><Link to="/produtos" search={{ categoria: "Fitas Impressas e Gomadas" }} className="hover:text-primary">Fitas Impressas e Gomadas</Link></li>
            <li><Link to="/produtos" search={{ categoria: "Fitas Personalizadas" }} className="hover:text-primary">Fitas Personalizadas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /><a href="tel:+554196947566" className="hover:text-primary">+55 (41) 9694-7566</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /><a href="mailto:vendas@vplastcomercio.com.br" className="hover:text-primary">vendas@vplastcomercio.com.br</a></li>
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
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 group"
      aria-label="Falar pelo WhatsApp"
    >
      <span className="hidden group-hover:flex items-center bg-white text-ink text-xs font-semibold px-3 py-2 rounded-full shadow-lg border border-border whitespace-nowrap">
        Falar pelo WhatsApp
      </span>
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] shadow-lg shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-transform duration-200">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" aria-hidden="true" />
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" />
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
