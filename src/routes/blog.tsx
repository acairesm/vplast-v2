import { createFileRoute } from "@tanstack/react-router";
import { Calendar, User, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/Layout";
import img1 from "@/assets/seg-industria.jpg";
import img2 from "@/assets/seg-logistica.jpg";
import img3 from "@/assets/seg-auto.jpg";
import img4 from "@/assets/seg-varejo.jpg";
import img5 from "@/assets/seg-construcao.jpg";
import img6 from "@/assets/prod-impressa.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Vplast Embalagens" },
      { name: "description", content: "Conteúdos, dicas e novidades sobre fitas adesivas, embalagens e soluções industriais." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { img: img1, cat: "Indústria", title: "Como escolher a fita ideal para sua linha de produção", date: "12 jun 2026", author: "Equipe Vplast" },
  { img: img2, cat: "Logística", title: "5 dicas para reduzir avarias no transporte de cargas", date: "05 jun 2026", author: "Equipe Vplast" },
  { img: img3, cat: "Automotivo", title: "Mascaramento profissional: o guia definitivo", date: "29 mai 2026", author: "Equipe Vplast" },
  { img: img4, cat: "E-commerce", title: "Embalagem que valoriza sua marca no unboxing", date: "20 mai 2026", author: "Equipe Vplast" },
  { img: img5, cat: "Construção", title: "Impermeabilização com mantas asfálticas: o que saber", date: "10 mai 2026", author: "Equipe Vplast" },
  { img: img6, cat: "Branding", title: "Fitas personalizadas: o detalhe que vende mais", date: "02 mai 2026", author: "Equipe Vplast" },
];

function BlogPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-white to-orange-soft py-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionEyebrow>BLOG VPLAST</SectionEyebrow>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-ink">
            CONTEÚDO QUE <span className="text-primary">PROTEGE SEU NEGÓCIO</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Dicas, tendências e novidades sobre fitas adesivas, embalagens e soluções para o seu segmento.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {POSTS.map((p) => (
          <article key={p.title} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {p.cat}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                <span className="flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
              </div>
              <h3 className="mt-3 font-bold text-ink leading-snug group-hover:text-primary transition">
                {p.title}
              </h3>
              <p className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-bold">
                LER MAIS <ArrowRight className="h-3 w-3" />
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
