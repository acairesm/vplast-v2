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


import fitaImpressa1 from "@/assets/produtos/fita-impressa-cuidado-fragil-1.png";
import fitaImpressa2 from "@/assets/produtos/fita-impressa-cuidado-fragil-2.png";
import fitaImpressa3 from "@/assets/produtos/fita-impressa-cuidado-fragil-3.png";

import fitaAutomotiva1 from "@/assets/produtos/fita-automotiva-1.jpg";
import fitaAutomotiva2 from "@/assets/produtos/fita-automotiva-2.jpg";
import fitaAutomotiva3 from "@/assets/produtos/fita-automotiva-3.jpg";

import crepeVerde1 from "@/assets/produtos/crepe-verde-1.jpg";
import crepeVerde2 from "@/assets/produtos/crepe-verde-2.jpg";
import crepeVerde3 from "@/assets/produtos/crepe-verde-3.jpg";

import acrilicaImpressa from "@/assets/produtos/fita-acrilica-impressa-personalizada.jpg";
import duplaFaceLarga from "@/assets/produtos/fita-dupla-face-larga.jpg";
import fitaGomadaImpressa from "@/assets/produtos/fita-gomada-impressa.jpg";
import fitaGomada from "@/assets/produtos/fita-gomada.jpg";
import fitaFilamentosa from "@/assets/produtos/fita-filamentosa.jpeg";
import crepeVerdeGrossa from "@/assets/produtos/crepe-verde-grossa.jpeg";
import crepeVerdeMais from "@/assets/produtos/crepe-verde-mais.jpeg";

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
  applications: string[];
};

export const CATEGORIES = [
  "Fitas Crepe",
  "Fitas Adesivas",
  "Fitas Dupla Face",
  "Fitas Impressas e Gomadas",
  "Fitas Especiais",
];

export const APPLICATIONS = [
  "Fechamento de Embalagens",
  "Pintura e Acabamento",
  "Fixação e Montagem",
  "Uso Automotivo",
  "Identificação e Branding",
  "Uso Industrial",
  "Vedação e Impermeabilização",
  "Uso Geral",
];

export const PRODUCTS: Product[] = [
  {
    slug: "fita-crepe-uso-geral-branca",
    name: "Fita Crepe Uso Geral Branca",
    category: "Fitas Crepe",
    description: "Versátil para fixações temporárias, pintura e trabalhos manuais em geral.",
    longDescription:
      "A Fita Crepe Uso Geral é a escolha certa para quem precisa de versatilidade no dia a dia. Com papel crepado macio e adesivo à base de borracha natural, ela adere facilmente a papéis, madeiras, plásticos e paredes, e remove-se sem deixar resíduos. Indicada para fixações temporárias, mascaramento em pinturas simples, identificação de peças e trabalhos manuais domésticos ou escolares.",
    image: crepeUsoGeral1,
    images: [crepeUsoGeral1, crepeUsoGeral2, crepeUsoGeral3],
    uses: ["Fixações temporárias", "Identificação de peças", "Trabalhos manuais", "Mascaramento em pintura básica"],
    sizes: ["18mm x 50m", "24mm x 50m", "48mm x 50m", "Sob consulta — tamanho personalizado"],
    applications: ["Pintura e Acabamento", "Uso Geral"],
  },
  {
    slug: "fita-crepe-automotiva-amarela",
    name: "Fita Crepe Automotiva Amarela",
    category: "Fitas Crepe",
    description: "Alta performance para mascaramento preciso em pinturas automotivas.",
    longDescription:
      "Desenvolvida especificamente para o mercado automotivo, a Fita Crepe Automotiva Amarela combina resistência à temperatura, aderência controlada e remoção limpa — tudo que o profissional exige na hora de mascarar. Suporta jatos de tinta, solventes e temperaturas de até 80 °C em cabines de pintura, protegendo borrachas, faróis, vidros e acabamentos sem deixar cola nem marcas na superfície.",
    image: crepeAutomotivaAmarela1,
    images: [crepeAutomotivaAmarela1, crepeAutomotivaAmarela2, crepeAutomotivaAmarela3],
    uses: [
      "Mascaramento em pinturas automotivas",
      "Proteção de borrachas, vidros e acabamentos",
      "Repintura, lixamento e polimento",
      "Resistência a temperaturas de até 80 °C",
    ],
    sizes: ["18mm x 50m", "24mm x 50m", "48mm x 50m"],
    applications: ["Pintura e Acabamento", "Uso Automotivo"],
  },
  {
    slug: "fita-crepe-automotiva-adelbras-765",
    name: "Fita Crepe Automotiva Adelbras 765",
    category: "Fitas Crepe",
    description: "Linha premium Adelbras para mascaramento automotivo profissional.",
    longDescription:
      "A Fita Crepe Automotiva Adelbras 765 é referência entre os profissionais de pintura automotiva. Fabricada com papel crepado de alta gramatura e adesivo termossensível de precisão, garante linhas perfeitas e remoção sem resíduos mesmo após exposição ao calor da cabine de secagem. Ideal para funilaria, lataria, montadoras e oficinas exigentes que não abrem mão de qualidade e acabamento impecável.",
    image: crepeAdelbras1,
    images: [crepeAdelbras1, crepeAdelbras2, crepeAdelbras3],
    uses: ["Mascaramento profissional em funilaria", "Pintura em cabines de secagem", "Proteção de peças durante polimento"],
    sizes: ["18mm x 40m", "24mm x 40m", "48mm x 40m"],
    applications: ["Pintura e Acabamento", "Uso Automotivo"],
  },
  {
    slug: "fita-dupla-face-df-hm-papel-147",
    name: "Fita Dupla Face DF HM Papel 147",
    category: "Fitas Dupla Face",
    description: "Fixação permanente e discreta em metais, vidros e policarbonatos.",
    longDescription:
      "A Fita Dupla Face DF HM Papel 147 possui backing de papel de alta resistência impregnado em adesivo hotmelt (HM) dos dois lados, proporcionando ancoragem forte e imediata em superfícies lisas e semilisas. É a solução ideal para fixação de frisos, letreiros, placas, espelhos e revestimentos onde o parafuso ou o prego comprometeria a estética. Também aplicada em montagem de móveis, fixação de fitas de borda e carpetes.",
    image: duplaFacePapel1,
    images: [duplaFacePapel1, duplaFacePapel2, duplaFacePapel3],
    uses: ["Fixação de frisos e letreiros", "Montagem de móveis e painéis", "Fixação de espelhos e revestimentos", "Carpetes e fitas de borda"],
    sizes: ["9mm x 30m", "12mm x 30m", "45mm x 30m", "Sob consulta — tamanho personalizado"],
    applications: ["Fixação e Montagem", "Uso Industrial"],
  },
  {
    slug: "fita-dupla-face-alta-aderencia-pp-306a",
    name: "Fita Dupla Face Alta Aderência PP 306A",
    category: "Fitas Dupla Face",
    description: "Adesivo acrílico de alta performance para fixações industriais duradouras.",
    longDescription:
      "A Fita Dupla Face Alta Aderência PP 306A tem base em polipropileno (PP) com adesivo acrílico de alta performance nos dois lados, garantindo resistência superior à umidade, solventes e variações de temperatura. Seu poder de adesão em superfícies rugosas, porosas e pintadas supera o das fitas convencionais, tornando-a a escolha certa para fixações industriais permanentes, montagem de peças técnicas e aplicações onde a vibração e o peso são fatores críticos.",
    image: duplaFaceAltaAderencia2,
    images: [duplaFaceAltaAderencia2, duplaFaceAltaAderencia3],
    uses: ["Fixação industrial permanente", "Montagem de peças técnicas e plásticos", "Resistência à umidade e solventes", "Aplicações com vibração e peso elevado"],
    sizes: ["10mm x 30m", "12mm x 30m", "24mm x 30m", "45mm x 30m", "Sob consulta — tamanho personalizado"],
    applications: ["Fixação e Montagem", "Uso Industrial"],
  },
  {
    slug: "fita-dupla-face-espuma-eva",
    name: "Fita Dupla Face Espuma E.V.A",
    category: "Fitas Dupla Face",
    description: "Espuma EVA com dupla adesão para vedação, absorção de impactos e fixação.",
    longDescription:
      "A Fita Dupla Face Espuma E.V.A combina a elasticidade da espuma EVA com adesivo pressão-sensitivo nos dois lados, absorvendo imperfeições das superfícies e criando uma fixação firme mesmo em substratos irregulares. Sua capacidade de vedação contra poeira, umidade e vento a torna indispensável em esquadrias, janelas, painéis solares, eletrodomésticos e na indústria moveleira. Não agride superfícies pintadas e resiste a intempéries.",
    image: duplaFaceEva1,
    images: [duplaFaceEva1, duplaFaceEva2, duplaFaceEva3],
    uses: ["Vedação de janelas e esquadrias", "Fixação em superfícies irregulares", "Absorção de impactos e vibrações", "Painéis solares e eletrodomésticos"],
    sizes: ["12mm x 5m", "19mm x 5m", "25mm x 5m", "Sob consulta — tamanho personalizado"],
    applications: ["Fixação e Montagem", "Vedação e Impermeabilização"],
  },
  {
    slug: "fita-dupla-face-larga",
    name: "Fita Dupla Face Larga",
    category: "Fitas Dupla Face",
    description: "Dupla face de grande largura para grandes superfícies e aplicações industriais.",
    longDescription:
      "A Fita Dupla Face Larga é desenvolvida para fixações que exigem maior área de contato e resistência à tração. Com backing de polietileno e adesivo acrílico distribuído uniformemente, garante ancoragem uniforme em carpetes, revestimentos vinílicos, placas sinalizadoras e painéis de grande porte. O liner silicone facilita a aplicação sem dobras ou bolhas, mesmo em superfícies extensas.",
    image: duplaFaceLarga,
    images: [duplaFaceLarga],
    uses: ["Fixação de carpetes e revestimentos vinílicos", "Montagem de painéis e sinalização", "Aplicações industriais de grande superfície"],
    sizes: ["48mm x 25m", "72mm x 25m", "100mm x 25m"],
    applications: ["Fixação e Montagem", "Uso Industrial"],
  },
  {
    slug: "fita-adesiva-acrilica-t",
    name: "Fita Adesiva Acrílica",
    category: "Fitas Adesivas",
    description: "Fita transparente de alta resistência para fechamento seguro de embalagens.",
    longDescription:
      "A Fita Adesiva Acrílica é fabricada com filme de polipropileno biorientado (BOPP) e adesivo acrílico de alta performance, resultando em uma fita transparente, resistente à tração e ao rasgamento. Mantém a adesão em ambientes frios, quentes e úmidos — essencial para centros de distribuição, e-commerce e linhas de embalagem industrial. Garante lacre seguro e apresentação impecável na caixa, sem amarelamento ao longo do tempo.",
    image: fitaAcrilica1,
    images: [fitaAcrilica1, fitaAcrilica2, fitaAcrilica3],
    uses: ["Fechamento de caixas de papelão", "Embalagem para e-commerce", "Uso em ambientes frios e quentes", "Lacre de embalagens industriais"],
    sizes: ["45mm x 45m", "48mm x 100m", "72mm x 100m"],
    applications: ["Uso Geral", "Uso Industrial"],
  },
  {
    slug: "fita-acrilica-impressa-personalizada",
    name: "Fita Acrílica Impressa Personalizada",
    category: "Fitas Impressas e Gomadas",
    description: "Fita transparente com a sua marca impressa — identidade e segurança na embalagem.",
    longDescription:
      "A Fita Acrílica Impressa Personalizada une a resistência da fita acrílica transparente com a força da identidade visual da sua empresa. A marca, slogan ou informações de segurança são impressos diretamente no filme, tornando cada caixa fechada um ponto de comunicação. Além do diferencial visual, ela dificulta a violação da embalagem, pois qualquer tentativa de abertura fica visível. Ideal para e-commerce, logística, indústria e presentes corporativos.",
    image: acrilicaImpressa,
    images: [acrilicaImpressa],
    uses: ["Fechamento de embalagens com identidade visual", "Segurança e antiviolação", "E-commerce e logística", "Presentes e kits corporativos"],
    sizes: ["48mm x 100m", "72mm x 100m"],
    applications: ["Fechamento de Embalagens", "Identificação e Branding"],
  },
  {
    slug: "fita-impressa-cuidado-fragil",
    name: "Fita Impressa Cuidado Frágil",
    category: "Fitas Impressas e Gomadas",
    description: "Fita com aviso impresso para proteger cargas frágeis durante o transporte.",
    longDescription:
      "A Fita Impressa Cuidado Frágil comunica de forma clara e imediata que a embalagem contém itens que exigem manuseio cuidadoso. Produzida em filme acrílico transparente com impressão do aviso padronizado, ela identifica visualmente a carga para transportadoras, operadores de logística e destinatários — reduzindo avarias, devoluções e prejuízos. Combina função de lacre com sinalização de segurança em uma única solução.",
    image: fitaImpressa1,
    images: [fitaImpressa1, fitaImpressa2, fitaImpressa3],
    uses: ["Identificação de cargas frágeis", "Sinalização logística", "Lacre com aviso de segurança", "E-commerce e transporte de eletrônicos"],
    sizes: ["48mm x 100m"],
    applications: ["Fechamento de Embalagens", "Identificação e Branding"],
  },
  {
    slug: "fita-gomada-impressa",
    name: "Fita Gomada Impressa",
    category: "Fitas Impressas e Gomadas",
    description: "Fita kraft ativada por água com sua marca impressa — lacre inviolável e profissional.",
    longDescription:
      "A Fita Gomada Impressa é fabricada em papel kraft resistente com adesivo à base d'água e impressão personalizada da sua marca. Ao ser umedecida, o adesivo penetra nas fibras do papelão e cria uma ligação praticamente permanente, tornando o lacre inviolável — qualquer tentativa de abertura danifica visivelmente a embalagem. Além de segurança, agrega valor estético à caixa, reforçando a identidade da empresa no momento da entrega.",
    image: fitaGomadaImpressa,
    images: [fitaGomadaImpressa],
    uses: ["Lacre inviolável de caixas", "Identidade visual na embalagem", "E-commerce e exportação", "Reforço estrutural do papelão"],
    sizes: ["50mm x 50m", "70mm x 50m"],
    applications: ["Fechamento de Embalagens", "Identificação e Branding"],
  },
  {
    slug: "fita-gomada",
    name: "Fita Gomada",
    category: "Fitas Impressas e Gomadas",
    description: "Fita kraft ativada por água para lacre seguro, resistente e inviolável.",
    longDescription:
      "A Fita Gomada é produzida em papel kraft de alta gramatura com adesivo vegetal ativado por água. Diferentemente das fitas plásticas, ela adere às fibras do papelão criando um lacre estrutural que aumenta a resistência da caixa. Não descola com frio, calor ou umidade — ideal para transporte de longas distâncias, armazenamento em câmaras frias e cargas pesadas. Sustentável, biodegradável e compatível com linhas de embalagem eco-friendly.",
    image: fitaGomada,
    images: [fitaGomada],
    uses: ["Fechamento de caixas pesadas", "Transporte e exportação", "Armazenamento em câmaras frias", "Embalagem sustentável e biodegradável"],
    sizes: ["50mm x 50m", "70mm x 50m"],
    applications: ["Fechamento de Embalagens", "Uso Industrial", "Uso Geral"],
  },
  {
    slug: "fixa-tape-massa-acrilica",
    name: "Fixa Tape Massa Acrílica",
    category: "Fitas Especiais",
    description: "Massa adesiva acrílica que substitui pregos e parafusos com acabamento limpo.",
    longDescription:
      "O Fixa Tape Massa Acrílica é um adesivo à base de acrílico de altíssima resistência desenvolvido para fixações onde o uso de pregos ou parafusos comprometeria a estética ou a integridade da superfície. Adere a cerâmica, vidro, madeira, metal, plástico e concreto, criando uma ancoragem permanente resistente à umidade e variações de temperatura. Ideal para quadros, espelhos, suportes, rodapés e acabamentos de interiores.",
    image: adesiva,
    uses: ["Fixação de quadros e espelhos", "Rodapés e acabamentos", "Aplicação em cerâmica e vidro", "Substituição de pregos e parafusos"],
    sizes: ["280g", "Sob consulta — tamanho personalizado"],
    applications: ["Fixação e Montagem", "Uso Geral"],
  },
  {
    slug: "fita-filamentosa-mono-direcao",
    name: "Fita Filamentosa Mono Direção",
    category: "Fitas Especiais",
    description: "Reforçada com filamentos de fibra de vidro para amarração e reforço extremos.",
    longDescription:
      "A Fita Filamentosa Mono Direção possui filamentos de fibra de vidro orientados longitudinalmente sob o filme de polyester, conferindo resistência à tração muito superior às fitas convencionais. É indicada para amarração de fardos, reforço de embalagens pesadas, fechamento de tubos e perfis metálicos, e unitização de cargas paletizadas. Resiste ao esmagamento, à abrasão e não se rompe mesmo sob alta tensão.",
    image: fitaFilamentosa,
    uses: ["Amarração de fardos e paletes", "Reforço de embalagens pesadas", "Fechamento de tubos e perfis metálicos", "Unitização de cargas"],
    sizes: ["18mm x 50m", "24mm x 50m", "Sob consulta — tamanho personalizado"],
    applications: ["Fechamento de Embalagens", "Uso Industrial"],
  },
  {
    slug: "fita-automotiva",
    name: "Fita Automotiva",
    category: "Fitas Crepe",
    description: "Fita de mascaramento automotivo com remoção limpa e resistência ao calor.",
    longDescription:
      "A Fita Automotiva é desenvolvida para as exigências do mercado de reparação veicular. Com papel crepado de alta conformabilidade e adesivo resistente ao calor, garante linhas de corte precisas em curvas e contornos do veículo, suportando a temperatura das cabines de secagem sem soltar ou transferir cola. Remove-se integralmente após a pintura, sem marcas ou resíduos na lataria.",
    image: fitaAutomotiva1,
    images: [fitaAutomotiva1, fitaAutomotiva2, fitaAutomotiva3],
    uses: ["Mascaramento em funilaria e lataria", "Pintura em cabines de secagem", "Proteção de acabamentos e plásticos", "Conformabilidade em curvas e contornos"],
    sizes: ["18mm x 40m", "24mm x 40m", "48mm x 40m"],
    applications: ["Pintura e Acabamento", "Uso Automotivo"],
  },
  {
    slug: "fita-crepe-verde-pintura",
    name: "Fita Crepe Verde Pintura",
    category: "Fitas Crepe",
    description: "Fita crepe colorida para marcação de áreas e proteção em pintura.",
    longDescription:
      "A Fita Crepe Verde Pintura foi desenvolvida para facilitar a organização e identificação de áreas em obras, reformas e projetos industriais. Sua cor verde facilita a visualização do mascaramento, e o adesivo à base de borracha garante boa aderência em paredes, madeiras e superfícies pintadas, com remoção limpa sem danos. Também utilizada para demarcar pisos, sinalizar zonas de risco e proteger superfícies durante acabamentos.",
    image: crepeVerdeGrossa,
    images: [crepeVerdeGrossa, crepeVerdeMais, crepeVerde1, crepeVerde2, crepeVerde3],
    uses: ["Marcação e demarcação de áreas", "Proteção em pintura de obras", "Sinalização de zonas em ambientes industriais"],
    sizes: ["18mm x 50m", "24mm x 50m", "48mm x 50m", "Sob consulta — tamanho personalizado"],
    applications: ["Pintura e Acabamento", "Uso Automotivo", "Uso Industrial", "Uso Geral"],
  },
];
