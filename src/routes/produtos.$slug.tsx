import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, ChevronDown, CheckCircle2, MessageCircle, Mail, Package, ArrowRight, ChevronLeft } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

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
  const loaderData = Route.useLoaderData() as { product: (typeof import("@/lib/products").PRODUCTS)[number] };
  const product = loaderData.product;
  const [activeImg, setActiveImg] = useState(0);
  const [expandedCat, setExpandedCat] = useState<string>(product.category);

  const images = product.images?.length ? product.images : [product.image];

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6 sm:py-8">
      {/* breadcrumb */}
      <nav className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1">
        <Link to="/" className="hover:text-primary shrink-0">Home</Link>
        <ChevronRight className="h-3 w-3 shrink-0" />
        <Link to="/produtos" className="hover:text-primary shrink-0">Produtos</Link>
        <ChevronRight className="h-3 w-3 shrink-0" />
        <span className="text-ink font-medium truncate">{product.name}</span>
      </nav>

      {/* Mobile: gallery + info stacked, sidebar hidden */}
      {/* Desktop: 3-col layout */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[220px_1fr_1fr]">

        {/* SIDEBAR — hidden on mobile, shown on desktop */}
        <aside className="hidden lg:block space-y-5">
          <Link to="/produtos" className="text-primary font-bold tracking-wider text-sm hover:underline">
            TODOS OS PRODUTOS
          </Link>

          <div className="space-y-1 mt-3">
            {CATEGORIES.map((cat) => {
              const catProducts = PRODUCTS.filter((p) => p.category === cat);
              const isOpen = expandedCat === cat;
              return (
                <div key={cat}>
                  <button
                    onClick={() => setExpandedCat(isOpen ? "" : cat)}
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-ink hover:text-primary transition cursor-pointer"
                  >
                    {cat}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <ul className="pl-3 border-l-2 border-primary space-y-1 mb-2">
                      {catProducts.map((p) => (
                        <li key={p.slug}>
                          <Link
                            to="/produtos/$slug"
                            params={{ slug: p.slug }}
                            className={`block py-1.5 text-sm transition ${
                              p.slug === product.slug
                                ? "text-primary font-semibold"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-border rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-orange-50 border border-primary/20 grid place-items-center shrink-0">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Não encontrou o que procura?</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Entre em contato com nosso time e solicite uma solução personalizada.
                </p>
              </div>
            </div>
            <Link
              to="/contato"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary text-xs font-bold py-2.5 hover:bg-primary hover:text-primary-foreground transition"
            >
              FALAR COM ESPECIALISTA <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </aside>

        {/* GALERIA */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="relative bg-white border border-border rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
            <img
              src={images[activeImg]}
              alt={product.name}
              className="w-full h-full object-contain p-4 sm:p-6"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white border border-border shadow flex items-center justify-center hover:bg-secondary transition cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveImg((i) => (i + 1) % images.length)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white border border-border shadow flex items-center justify-center hover:bg-secondary transition cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                    activeImg === i ? "border-primary" : "border-border hover:border-primary/40"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* INFO */}
        <div>
          <p className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase">{product.category}</p>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink leading-tight uppercase">
            {product.name}
          </h1>
          <div className="h-1 w-12 bg-primary rounded-full mt-3 sm:mt-4 mb-4 sm:mb-5" />
          <p className="text-muted-foreground leading-relaxed text-sm">{product.longDescription}</p>

          <h3 className="mt-6 sm:mt-7 text-primary font-bold tracking-widest text-xs">USO RECOMENDADO</h3>
          <ul className="mt-3 space-y-2.5">
            {product.uses.map((u: string) => (
              <li key={u} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 fill-primary stroke-white" />
                {u}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 sm:mt-7 text-primary font-bold tracking-widest text-xs">MEDIDAS DISPONÍVEIS</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((s: string) => (
              <span key={s} className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm font-medium">{s}</span>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/5541969447566"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3.5 sm:py-4 font-bold text-sm hover:opacity-90 transition"
            >
              <MessageCircle className="h-5 w-5" /> FALAR PELO WHATSAPP
            </a>
            <Link
              to="/contato"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary text-primary px-6 py-3.5 sm:py-4 font-bold text-sm hover:bg-primary hover:text-primary-foreground transition"
            >
              <Mail className="h-5 w-5" /> ENVIAR E-MAIL
            </Link>
          </div>

          {/* Mobile: link back to products */}
          <Link
            to="/produtos"
            className="mt-4 lg:hidden inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ChevronLeft className="h-4 w-4" /> Ver todos os produtos
          </Link>
        </div>

      </div>
    </div>
  );
}
