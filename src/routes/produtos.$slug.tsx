import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, MessageCircle, Mail, Package, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/produtos/$slug")({
  head: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.name ?? "Produto"} — Vplast Embalagens` },
        { name: "description", content: p?.description ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductDetail,
  notFoundComponent: () => <div className="p-20 text-center">Produto não encontrado.</div>,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const sameCategory = PRODUCTS.filter((p) => p.category === product.category);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10">
      {/* breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/produtos" className="hover:text-primary">Produtos</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="hover:text-primary">{product.category}</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink font-medium">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-[240px_1fr_1fr] gap-10">
        {/* sidebar */}
        <aside>
          <h3 className="text-primary font-bold tracking-wider text-sm mb-4">TODOS OS PRODUTOS</h3>
          <div className="border-l-2 border-primary pl-4">
            <p className="font-semibold text-ink mb-3">{product.category}</p>
            <ul className="space-y-2.5 text-sm">
              {sameCategory.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/produtos/$slug"
                    params={{ slug: p.slug }}
                    className={`hover:text-primary transition ${
                      p.slug === product.slug ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-white border border-border rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-orange-soft grid place-items-center shrink-0">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-ink">Não encontrou o que procura?</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Entre em contato com nosso time e solicite uma solução personalizada.
                </p>
              </div>
            </div>
            <Link to="/contato" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary text-xs font-bold py-2.5 hover:bg-primary hover:text-primary-foreground transition">
              FALAR COM ESPECIALISTA <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </aside>

        {/* image */}
        <div className="bg-secondary rounded-2xl overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
        </div>

        {/* info */}
        <div>
          <p className="text-primary font-bold text-sm tracking-wider">{product.category.toUpperCase()}</p>
          <h1 className="mt-2 text-4xl font-extrabold text-ink leading-tight">{product.name.toUpperCase()}</h1>
          <div className="h-0.5 w-24 bg-border my-5" />
          <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>

          <h3 className="mt-8 text-primary font-bold tracking-wider text-sm">USO RECOMENDADO</h3>
          <ul className="mt-3 space-y-2">
            {product.uses.map((u) => (
              <li key={u} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {u}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-primary font-bold tracking-wider text-sm">MEDIDAS DISPONÍVEIS</h3>
          <div className="mt-3 inline-flex items-center gap-4 bg-white border border-border rounded-xl px-5 py-3 text-sm font-medium">
            {product.sizes.map((s, i) => (
              <span key={s} className="flex items-center gap-4">
                {i > 0 && <span className="text-border">|</span>}
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-white px-6 py-4 font-bold hover:opacity-90 transition"
            >
              <MessageCircle className="h-5 w-5" /> FALAR PELO WHATSAPP
            </a>
            <Link
              to="/contato"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary text-primary px-6 py-4 font-bold hover:bg-primary hover:text-primary-foreground transition"
            >
              <Mail className="h-5 w-5" /> ENVIAR E-MAIL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
