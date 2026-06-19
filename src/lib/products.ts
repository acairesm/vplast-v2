import crepe from "@/assets/Fitas Hero /10X30 (3).png";
import adesiva from "@/assets/Fitas Hero /DUREX 12X40 (3).png";
import dupla from "@/assets/Fitas Hero /09MM DUPLA (3).png";
import impressa from "@/assets/Fitas Hero /ChatGPT Image 17_04_2026, 09_23_56.png";
import manta from "@/assets/Fitas Hero /WhatsApp Image 2026-04-24 at 10.44.13.jpeg";
import detail from "@/assets/Fitas Hero /DUREX 12X40 (3).png";

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  uses: string[];
  sizes: string[];
};

export const CATEGORIES = [
  "Fitas Crepe",
  "Fitas Adesivas",
  "Fitas Dupla Face",
  "Fitas Impressas e Gomadas",
  "Fitas Especiais",
  "Mantas Asfálticas",
];

export const PRODUCTS: Product[] = [
  {
    slug: "fita-crepe-uso-geral-branca",
    name: "Fita Crepe Uso Geral Branca",
    category: "Fitas Crepe",
    description: "Ideal para uso geral, fixações temporárias e trabalhos manuais.",
    longDescription:
      "Fita crepe de uso geral com excelente aderência, indicada para fixações temporárias, identificação e trabalhos manuais com remoção limpa.",
    image: crepe,
    uses: ["Fixações temporárias", "Identificação", "Trabalhos escolares", "Pintura básica"],
    sizes: ["18mm x 50m", "24mm x 50m", "48mm x 50m"],
  },
  {
    slug: "fita-crepe-automotiva-amarela",
    name: "Fita Crepe Automotiva Amarela",
    category: "Fitas Crepe",
    description: "Alta performance para mascaramento e pintura automotiva.",
    longDescription:
      "Desenvolvida especialmente para o setor automotivo, a fita crepe automotiva amarela oferece excelente aderência, resistência à temperatura e remoção limpa, sem deixar resíduos. Ideal para mascaramento em pinturas automotivas e proteção de áreas durante lixamento, repintura e acabamentos.",
    image: detail,
    uses: [
      "Mascaramento em pinturas automotivas",
      "Proteção de borrachas, vidros e acabamentos",
      "Uso em repintura, lixamento e polimento",
      "Resistência a temperaturas de até 80°C por curtos períodos",
    ],
    sizes: ["18mm x 50m", "24mm x 50m", "48mm x 50m"],
  },
  {
    slug: "fita-crepe-automotiva-adelbras-765",
    name: "Fita Crepe Automotiva Adelbras 765",
    category: "Fitas Crepe",
    description: "Excelente aderência e resistência a variações de temperatura.",
    longDescription: "Fita premium para uso automotivo profissional com altíssima performance.",
    image: crepe,
    uses: ["Pintura automotiva", "Mascaramento profissional"],
    sizes: ["18mm x 40m", "24mm x 40m", "48mm x 40m"],
  },
  {
    slug: "fita-dupla-face-df-hm-papel-147",
    name: "Fita Dupla Face DF HM Papel 147",
    category: "Fitas Dupla Face",
    description: "Alta adesão para metais, vidros e policarbonatos.",
    longDescription: "Fita dupla face de alta performance para fixação permanente.",
    image: dupla,
    uses: ["Fixação de metais", "Fixação de vidros"],
    sizes: ["12mm x 30m", "19mm x 30m"],
  },
  {
    slug: "fita-dupla-face-alta-aderencia-pp-306a",
    name: "Fita Dupla Face Alta Aderência PP 306A",
    category: "Fitas Dupla Face",
    description: "Fixação eficiente e duradoura em diversas superfícies.",
    longDescription: "Fita dupla face PP de alta aderência.",
    image: dupla,
    uses: ["Fixação permanente", "Montagem industrial"],
    sizes: ["12mm x 30m", "19mm x 30m", "24mm x 30m"],
  },
  {
    slug: "fita-dupla-face-espuma-eva",
    name: "Fita Dupla Face Espuma E.V.A",
    category: "Fitas Dupla Face",
    description: "Ideal para fixações que exigem absorção de impacto e vedação.",
    longDescription: "Espuma EVA para vedação e fixação com absorção de impacto.",
    image: dupla,
    uses: ["Vedação", "Absorção de impacto"],
    sizes: ["12mm x 5m", "19mm x 5m"],
  },
  {
    slug: "fixa-tape-massa-acrilica",
    name: "Fixa Tape Massa Acrílica",
    category: "Fitas Especiais",
    description: "Substitui pregos e parafusos com alta aderência e acabamento limpo.",
    longDescription: "Massa adesiva acrílica de altíssima aderência.",
    image: adesiva,
    uses: ["Fixação sem pregos", "Acabamentos"],
    sizes: ["280g"],
  },
  {
    slug: "fita-adesiva-acrilica-t",
    name: "Fita Adesiva Acrílica (T)",
    category: "Fitas Adesivas",
    description: "Versátil e eficiente para fechamento de embalagens e uso geral.",
    longDescription: "Fita adesiva transparente acrílica para uso geral.",
    image: adesiva,
    uses: ["Fechamento de caixas", "Uso geral"],
    sizes: ["45mm x 45m", "48mm x 100m"],
  },
  {
    slug: "fita-filamentosa-mono-direcao",
    name: "Fita Filamentosa Mono Direção",
    category: "Fitas Especiais",
    description: "Reforçada com filamentos de fibra para máxima resistência.",
    longDescription: "Fita filamentosa com fibra para amarração e reforço.",
    image: adesiva,
    uses: ["Amarração", "Reforço de embalagens"],
    sizes: ["18mm x 50m", "24mm x 50m"],
  },
  {
    slug: "fita-alta-aderencia",
    name: "Fita Alta Aderência",
    category: "Alta Aderência",
    description: "Fixação forte e duradoura para superfícies exigentes e ambientes críticos.",
    longDescription: "Fita de alta aderência desenvolvida para garantir fixação robusta em superfícies lisas, porosas ou irregulares, com excelente resistência à tração e ao cisalhamento.",
    image: impressa,
    uses: ["Fixação em superfícies irregulares", "Uso industrial", "Embalagens pesadas"],
    sizes: ["48mm x 50m", "48mm x 100m"],
  },
  {
    slug: "fita-impressa-48x100",
    name: "Fita Impressa 48x100",
    category: "Fitas Impressas e Gomadas",
    description: "Personalização com sua marca para identificação e profissionalismo.",
    longDescription: "Fita personalizada com sua marca impressa.",
    image: impressa,
    uses: ["Branding", "Identificação"],
    sizes: ["48mm x 100m"],
  },
  {
    slug: "fita-automotiva",
    name: "Fita Automotiva",
    category: "Fita Automotiva",
    description: "Alta resistência para mascaramento, pintura e acabamentos automotivos.",
    longDescription: "Fita desenvolvida para o setor automotivo, com excelente aderência, resistência à temperatura e remoção limpa sem deixar resíduos, ideal para pintura e acabamento.",
    image: manta,
    uses: ["Mascaramento para pintura", "Proteção de acabamentos", "Repintura automotiva"],
    sizes: ["18mm x 40m", "24mm x 40m", "48mm x 40m"],
  },
];
