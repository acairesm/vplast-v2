import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, ChevronDown, CheckCircle2, Mail, Package, ArrowRight, ChevronLeft } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export const Route = createFileRoute("/produtos/$slug")({
  head: ({ params }) => {
    const p = PRODUCTS.find((x) => x.slug === params.slug);
    const url = `https://lojavplast.com/produtos/${params.slug}`;
    const title = `${p?.name ?? "Produto"} — Vplast Embalagens`;
    const desc = p?.longDescription?.slice(0, 155) ?? p?.description ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.longDescription,
            brand: { "@type": "Brand", name: "Vplast Embalagens" },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "BRL",
              seller: { "@type": "Organization", name: "Vplast Embalagens" },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lojavplast.com/" },
              { "@type": "ListItem", position: 2, name: "Produtos", item: "https://lojavplast.com/produtos" },
              { "@type": "ListItem", position: 3, name: p.name, item: url },
            ],
          }),
        },
      ] : [],
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
      <nav aria-label="Trilha de navegação" className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1">
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
                  aria-label={`Ver imagem ${i + 1} de ${images.length}`}
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
          {product.sizeNote && (
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{product.sizeNote}</p>
          )}

          <div className="mt-6 sm:mt-8 flex flex-col gap-3">
            <a
              href="https://wa.me/5541969447566"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3.5 sm:py-4 font-bold text-sm hover:opacity-90 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              FALAR PELO WHATSAPP
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
