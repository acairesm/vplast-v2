import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV: { to: string; label: string; hasDropdown?: boolean }[] = [
  { to: "/", label: "HOME" },
  { to: "/produtos", label: "PRODUTOS", hasDropdown: true },
  { to: "/sobre", label: "SOBRE NÓS" },
  { to: "/solucoes", label: "SOLUÇÕES" },
  { to: "/blog", label: "BLOG" },
  { to: "/contato", label: "CONTATO" },
];

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Vplast Embalagens" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => {
            const active = pathname === n.to || (n.to !== "/" && pathname.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
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
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-md shadow-primary/30 hover:bg-primary/90 transition"
        >
          <MessageCircle className="h-4 w-4" />
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
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>
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
            <li>Mantas Asfálticas</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary" /> (11) 4000-0000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary" /> contato@vplast.com.br</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> Av. Industrial, 1000<br/>São Paulo - SP</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Vplast Embalagens. Todos os direitos reservados.
      </div>
    </footer>
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
