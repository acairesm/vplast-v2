import adesiva from "@/assets/Fitas Hero /DUREX 12X40 (3).png";

import crepeUsoGeral1 from "@/assets/produtos/crepe-uso-geral-branca-1.png";
import crepeUsoGeral2 from "@/assets/produtos/crepe-uso-geral-branca-2.png";
import crepeUsoGeral3 from "@/assets/produtos/crepe-uso-geral-branca-3.png";

import crepeAutomotivaAmarela1 from "@/assets/produtos/crepe-automotiva-amarela-1.png";
import crepeAutomotivaAmarela2 from "@/assets/produtos/crepe-automotiva-amarela-2.png";
import crepeAutomotivaAmarela3 from "@/assets/produtos/crepe-automotiva-amarela-3.png";

import crepeAdelbras1 from "@/assets/produtos/crepe-automotiva-adelbras-765-1.jpg";
import crepeAdelbras2 from "@/assets/produtos/crepe-automotiva-adelbras-765-2.jpg";
import crepeAdelbras3 from "@/assets/produtos/crepe-automotiva-adelbras-765-3.jpg";

import duplaFacePapel1 from "@/assets/produtos/dupla-face-papel-147-1.png";
import duplaFacePapel2 from "@/assets/produtos/dupla-face-papel-147-2.png";
import duplaFacePapel3 from "@/assets/produtos/dupla-face-papel-147-3.png";

import duplaFaceAltaAderencia1 from "@/assets/produtos/dupla-face-alta-aderencia-1.png";
import duplaFaceAltaAderencia2 from "@/assets/produtos/dupla-face-alta-aderencia-2.png";
import duplaFaceAltaAderencia3 from "@/assets/produtos/dupla-face-alta-aderencia-3.png";

import duplaFaceEva1 from "@/assets/produtos/dupla-face-espuma-eva-1.png";
import duplaFaceEva2 from "@/assets/produtos/dupla-face-espuma-eva-2.png";
import duplaFaceEva3 from "@/assets/produtos/dupla-face-espuma-eva-3.png";

import fitaAcrilica1 from "@/assets/produtos/fita-adesiva-acrilica-1.png";
import fitaAcrilica2 from "@/assets/produtos/fita-adesiva-acrilica-2.png";
import fitaAcrilica3 from "@/assets/produtos/fita-adesiva-acrilica-3.png";

import fitaAltaAderencia1 from "@/assets/produtos/fita-alta-aderencia-1.png";
import fitaAltaAderencia2 from "@/assets/produtos/fita-alta-aderencia-2.png";
import fitaAltaAderencia3 from "@/assets/produtos/fita-alta-aderencia-3.png";

import fitaImpressa1 from "@/assets/produtos/fita-impressa-cuidado-fragil-1.png";
import fitaImpressa2 from "@/assets/produtos/fita-impressa-cuidado-fragil-2.png";
import fitaImpressa3 from "@/assets/produtos/fita-impressa-cuidado-fragil-3.png";

import fitaAutomotiva1 from "@/assets/produtos/fita-automotiva-1.jpg";
import fitaAutomotiva2 from "@/assets/produtos/fita-automotiva-2.jpg";
import fitaAutomotiva3 from "@/assets/produtos/fita-automotiva-3.jpg";

import crepeVerde1 from "@/assets/produtos/crepe-verde-1.jpg";
import crepeVerde2 from "@/assets/produtos/crepe-verde-2.jpg";
import crepeVerde3 from "@/assets/produtos/crepe-verde-3.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
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
    image: crepeUsoGeral1,
    images: [crepeUsoGeral1, crepeUsoGeral2, crepeUsoGeral3],
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
    image: crepeAutomotivaAmarela1,
    images: [crepeAutomotivaAmarela1, crepeAutomotivaAmarela2, crepeAutomotivaAmarela3],
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
    image: crepeAdelbras1,
    images: [crepeAdelbras1, crepeAdelbras2, crepeAdelbras3],
    uses: ["Pintura automotiva", "Mascaramento profissional"],
    sizes: ["18mm x 40m", "24mm x 40m", "48mm x 40m"],
  },
  {
    slug: "fita-dupla-face-df-hm-papel-147",
    name: "Fita Dupla Face DF HM Papel 147",
    category: "Fitas Dupla Face",
    description: "Alta adesão para metais, vidros e policarbonatos.",
    longDescription: "Fita dupla face de alta performance para fixação permanente.",
    image: duplaFacePapel1,
    images: [duplaFacePapel1, duplaFacePapel2, duplaFacePapel3],
    uses: ["Fixação de metais", "Fixação de vidros"],
    sizes: ["12mm x 30m", "19mm x 30m"],
  },
  {
    slug: "fita-dupla-face-alta-aderencia-pp-306a",
    name: "Fita Dupla Face Alta Aderência PP 306A",
    category: "Fitas Dupla Face",
    description: "Fixação eficiente e duradoura em diversas superfícies.",
    longDescription: "Fita dupla face PP de alta aderência.",
    image: duplaFaceAltaAderencia1,
    images: [duplaFaceAltaAderencia1, duplaFaceAltaAderencia2, duplaFaceAltaAderencia3],
    uses: ["Fixação permanente", "Montagem industrial"],
    sizes: ["12mm x 30m", "19mm x 30m", "24mm x 30m"],
  },
  {
    slug: "fita-dupla-face-espuma-eva",
    name: "Fita Dupla Face Espuma E.V.A",
    category: "Fitas Dupla Face",
    description: "Ideal para fixações que exigem absorção de impacto e vedação.",
    longDescription: "Espuma EVA para vedação e fixação com absorção de impacto.",
    image: duplaFaceEva1,
    images: [duplaFaceEva1, duplaFaceEva2, duplaFaceEva3],
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
    image: fitaAcrilica1,
    images: [fitaAcrilica1, fitaAcrilica2, fitaAcrilica3],
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
    image: fitaAltaAderencia1,
    images: [fitaAltaAderencia1, fitaAltaAderencia2, fitaAltaAderencia3],
    uses: ["Fixação em superfícies irregulares", "Uso industrial", "Embalagens pesadas"],
    sizes: ["48mm x 50m", "48mm x 100m"],
  },
  {
    slug: "fita-impressa-48x100",
    name: "Fita Impressa 48x100",
    category: "Fitas Impressas e Gomadas",
    description: "Personalização com sua marca para identificação e profissionalismo.",
    longDescription: "Fita personalizada com sua marca impressa.",
    image: fitaImpressa1,
    images: [fitaImpressa1, fitaImpressa2, fitaImpressa3],
    uses: ["Branding", "Identificação"],
    sizes: ["48mm x 100m"],
  },
  {
    slug: "fita-automotiva",
    name: "Fita Automotiva",
    category: "Fita Automotiva",
    description: "Alta resistência para mascaramento, pintura e acabamentos automotivos.",
    longDescription: "Fita desenvolvida para o setor automotivo, com excelente aderência, resistência à temperatura e remoção limpa sem deixar resíduos, ideal para pintura e acabamento.",
    image: fitaAutomotiva1,
    images: [fitaAutomotiva1, fitaAutomotiva2, fitaAutomotiva3],
    uses: ["Mascaramento para pintura", "Proteção de acabamentos", "Repintura automotiva"],
    sizes: ["18mm x 40m", "24mm x 40m", "48mm x 40m"],
  },
  {
    slug: "fita-crepe-verde-pintura",
    name: "Fita Crepe Verde Pintura",
    category: "Fitas Crepe",
    description: "Fita crepe colorida para marcação e proteção em serviços de pintura.",
    longDescription:
      "Fita crepe verde com excelente aderência e remoção limpa, indicada para marcação de áreas, proteção em pintura e identificação visual em obras e ambientes industriais.",
    image: crepeVerde1,
    images: [crepeVerde1, crepeVerde2, crepeVerde3],
    uses: ["Marcação de áreas", "Proteção em pintura", "Identificação visual"],
    sizes: ["18mm x 50m", "24mm x 50m"],
  },
];
