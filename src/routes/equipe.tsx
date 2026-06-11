import { createFileRoute } from "@tanstack/react-router";
import { User, Package } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nathaly Scharam — Equipe Vplast Embalagens" },
      { name: "description", content: "Conheça a equipe Vplast Embalagens: profissionais dedicados a oferecer atendimento ágil, humanizado e eficiente." },
    ],
  }),
  component: EquipePage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  Icon: typeof User;
  image: string;
};

const TEAM: Member[] = [
  {
    name: "MARLON LOPES",
    role: "ESPECIALISTA EM VENDAS",
    bio: "Especialista em entender suas necessidades e oferecer as melhores soluções em fitas adesivas e embalagens. Foco em relacionamento, confiança e resultados.",
    Icon: User,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80",
  },
  {
    name: "ANELYSE CAIRES",
    role: "ESPECIALISTA EM LOGÍSTICA",
    bio: "Responsável por garantir que cada pedido seja preparado com cuidado e entregue com agilidade e segurança. Organização, planejamento e eficiência em cada etapa.",
    Icon: Package,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80",
  },
];

function EquipePage() {
  return (
    <div className="relative overflow-hidden">
      {/* watermark triangle */}
      <div className="pointer-events-none absolute right-[-120px] top-40 opacity-[0.06]">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="#F97316">
          <polygon points="50,15 90,85 10,85" />
        </svg>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pt-16 pb-10 text-center relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight">
          NOSSA EQUIPE,<br />
          <span className="text-primary">SEU MELHOR ATENDIMENTO!</span>
        </h1>
        <div className="mt-5 h-1 w-16 bg-primary mx-auto rounded-full" />
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Contamos com profissionais dedicados que trabalham todos os dias para oferecer o atendimento
          ágil, humanizado e eficiente que você merece.
        </p>
        <p className="mt-4 font-bold text-ink">Estamos aqui para ajudar!</p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20 grid md:grid-cols-2 gap-8 relative">
        {TEAM.map((m) => (
          <article key={m.name} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-xl transition">
            <div className="aspect-[4/3] bg-secondary overflow-hidden">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-7 text-center">
              <h3 className="text-2xl font-extrabold text-ink">{m.name}</h3>
              <p className="mt-2 text-primary font-semibold tracking-wider text-sm">{m.role}</p>
              <div className="mt-5 h-px w-full bg-border" />
              <div className="mt-5 flex items-start gap-4 text-left">
                <div className="h-12 w-12 rounded-full border-2 border-primary/30 grid place-items-center shrink-0">
                  <m.Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
