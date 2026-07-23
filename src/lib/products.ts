import fitaLargaAmarelaCapa from "@/assets/produtos/fita_larga_amarela.jpeg";

import crepeUsoGeral1 from "@/assets/produtos/crepe-uso-geral-branca-1.png";
import crepeUsoGeral2 from "@/assets/produtos/crepe-uso-geral-branca-2.png";
import crepeUsoGeral3 from "@/assets/produtos/crepe-uso-geral-branca-3.png";


import crepeAdelbras1 from "@/assets/produtos/crepe-automotiva-adelbras-765-1.jpg";
import crepeAdelbras2 from "@/assets/produtos/crepe-automotiva-adelbras-765-2.jpg";

import duplaFacePapel2 from "@/assets/produtos/dupla-face-papel-147-2.png";
import duplaFacePapel3 from "@/assets/produtos/dupla-face-papel-147-3.png";

import duplaFaceAltaAderencia2 from "@/assets/produtos/dupla-face-alta-aderencia-2.png";
import duplaFaceAltaAderencia3 from "@/assets/produtos/dupla-face-alta-aderencia-3.png";
import duplaFaceAltaAderencia4 from "@/assets/produtos/Fita Dupla Face Alta Aderência PP 306A adicionar.jpeg";

import duplaFaceEva1 from "@/assets/produtos/Fita_Dupla_Face_Espuma_E.V.A_CAPA.jpeg";
import duplaFaceEva2 from "@/assets/produtos/dupla-face-espuma-eva-2.png";
import duplaFaceEva3 from "@/assets/produtos/dupla-face-espuma-eva-3.png";

import fitaAcrilica1 from "@/assets/produtos/fita-capa-45.jpeg";
import fitaAcrilica2 from "@/assets/produtos/fita-acrilica-nova-1.jpeg";
import fitaAcrilica3 from "@/assets/produtos/fita-acrilica-nova-2.jpeg";
import fitaAcrilica4 from "@/assets/produtos/fita-acrilica-nova-3.jpeg";


import fitaImpressa1 from "@/assets/produtos/fita-impressa-cuidado-fragil-1.png";
import fitaImpressa2 from "@/assets/produtos/fita-impressa-cuidado-fragil-2.png";
import fitaImpressa3 from "@/assets/produtos/fita-impressa-cuidado-fragil-3.png";

import crepeAdelbrasExtra1 from "@/assets/produtos/fita-automotiva-pequena-1.jpeg";
import crepeAdelbrasExtra2 from "@/assets/produtos/fita-automotiva-pequena-2.jpeg";

import crepeVerde1 from "@/assets/produtos/crepe-verde-1.jpg";
import crepeVerde2 from "@/assets/produtos/crepe-verde-2.jpg";
import crepeVerde3 from "@/assets/produtos/crepe-verde-3.jpg";

import acrilicaImpressa from "@/assets/produtos/fita-acrilica-impressa-personalizada.jpg";

import fitaGomadaImpressa from "@/assets/produtos/fita-gomada-impressa.jpg";
import fitaGomada from "@/assets/produtos/fita-gomada.jpg";
import crepeVerdeGrossa from "@/assets/produtos/crepe-verde-grossa.jpeg";
import crepeVerdeMais from "@/assets/produtos/crepe-verde-mais.jpeg";
import fitaTapeMassaAcrilica from "@/assets/produtos/fitatapemassaacrilica.jpeg";
import fixaTapeMassaAdicionar from "@/assets/produtos/Fixa Tape Massa Acrílica ADICIONAR.jpeg";
import fitaLargaCapa from "@/assets/produtos/fita-larga-capa.jpeg";
import fixaTapeFina1 from "@/assets/produtos/fixa_tape_fina_1.jpeg";
import fixaTapeFina2 from "@/assets/produtos/Fixa_tape_fina_2.jpeg";

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
  sizeNote?: string;
  applications: string[];
};

export const CATEGORIES = [
  "Fitas Crepe",
  "Fitas Adesivas",
  "Fitas Dupla Face",
  "Fitas Impressas e Gomadas",
  "Fitas Personalizadas",
];

export const APPLICATIONS = [
  "Fechamento de Embalagens",
  "Pintura e Acabamento",
  "Fixação e Montagem",
  "Uso Automotivo",
  "Identificação e Branding",
  "Uso Industrial",
  "Fitas Sob Medida",
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
    applications: ["Pintura e Acabamento", "Fitas Sob Medida"],
  },
  {
    slug: "fita-crepe-automotiva-adelbras-765",
    name: "Fita Crepe Automotiva Adelbras 765",
    category: "Fitas Crepe",
    description: "Linha premium Adelbras para mascaramento automotivo profissional.",
    longDescription:
      "A Fita Crepe Automotiva Adelbras 765 é referência entre os profissionais de pintura automotiva. Fabricada com papel crepado de alta gramatura e adesivo termossensível de precisão, garante linhas perfeitas e remoção sem resíduos mesmo após exposição ao calor da cabine de secagem. Ideal para funilaria, lataria, montadoras e oficinas exigentes que não abrem mão de qualidade e acabamento impecável.",
    image: crepeAdelbras1,
    images: [crepeAdelbras1, crepeAdelbras2, crepeAdelbrasExtra1, crepeAdelbrasExtra2],
    uses: ["Mascaramento profissional em funilaria", "Pintura em cabines de secagem", "Proteção de peças durante polimento"],
    sizes: ["18mm x 40m", "48mm x 40m"],
    applications: ["Pintura e Acabamento", "Uso Automotivo"],
  },
  {
    slug: "fita-dupla-face-df-hm-papel-147",
    name: "Fita Dupla Face DF HM Papel 147",
    category: "Fitas Dupla Face",
    description: "Fixação permanente e discreta em metais, vidros e policarbonatos.",
    longDescription:
      "A Fita Dupla Face DF HM Papel 147 possui backing de papel de alta resistência impregnado em adesivo hotmelt (HM) dos dois lados, proporcionando ancoragem forte e imediata em superfícies lisas e semilisas. É a solução ideal para fixação de frisos, letreiros, placas, espelhos e revestimentos onde o parafuso ou o prego comprometeria a estética. Também aplicada em montagem de móveis, fixação de fitas de borda e carpetes.",
    image: fitaLargaCapa,
    images: [fitaLargaCapa, duplaFacePapel2, duplaFacePapel3],
    uses: ["Fixação de frisos e letreiros", "Montagem de móveis e painéis", "Fixação de espelhos e revestimentos", "Carpetes e fitas de borda"],
    sizes: ["corte de 0010x030 até 1000x030"],
    applications: ["Fixação e Montagem", "Fitas Sob Medida"],
  },
  {
    slug: "fita-dupla-face-alta-aderencia-pp-306a",
    name: "Fita Dupla Face Alta Aderência PP 306A",
    category: "Fitas Dupla Face",
    description: "Adesivo acrílico de alta performance para fixações industriais duradouras.",
    longDescription:
      "A Fita Dupla Face Alta Aderência PP 306A tem base em polipropileno (PP) com adesivo acrílico de alta performance nos dois lados, garantindo resistência superior à umidade, solventes e variações de temperatura. Seu poder de adesão em superfícies rugosas, porosas e pintadas supera o das fitas convencionais, tornando-a a escolha certa para fixações industriais permanentes, montagem de peças técnicas e aplicações onde a vibração e o peso são fatores críticos.",
    image: fitaLargaAmarelaCapa,
    images: [fitaLargaAmarelaCapa, duplaFaceAltaAderencia2, duplaFaceAltaAderencia3, duplaFaceAltaAderencia4],
    uses: ["Fixação industrial permanente", "Montagem de peças técnicas e plásticos", "Resistência à umidade e solventes", "Aplicações com vibração e peso elevado"],
    sizes: ["corte de 0010x030 até 1000x030"],
    applications: ["Fixação e Montagem", "Fitas Sob Medida"],
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
    sizes: ["12mm x 30m", "19mm x 30m", "25mm x 30m", "Sob consulta — tamanho personalizado"],
    applications: ["Fixação e Montagem", "Fitas Sob Medida"],
  },
  {
    slug: "fita-adesiva-acrilica-t",
    name: "Fita Adesiva Acrílica",
    category: "Fitas Adesivas",
    description: "Fita transparente de alta resistência para fechamento seguro de embalagens.",
    longDescription:
      "A Fita Adesiva Acrílica é fabricada com filme de polipropileno biorientado (BOPP) e adesivo acrílico de alta performance, resultando em uma fita transparente, resistente à tração e ao rasgamento. Mantém a adesão em ambientes frios, quentes e úmidos — essencial para centros de distribuição, e-commerce e linhas de embalagem industrial. Garante lacre seguro e apresentação impecável na caixa, sem amarelamento ao longo do tempo.",
    image: fitaAcrilica1,
    images: [fitaAcrilica1, fitaAcrilica2, fitaAcrilica3, fitaAcrilica4],
    uses: ["Fechamento de caixas de papelão", "Embalagem para e-commerce", "Uso em ambientes frios e quentes", "Lacre de embalagens industriais"],
    sizes: ["12mm x 40m", "18mm x 50m", "24mm x 50m", "45mm x 100m"],
    applications: ["Fechamento de Embalagens"],
  },
  {
    slug: "fita-acrilica-impressa-personalizada",
    name: "Fita Acrílica Impressa Personalizada",
    category: "Fitas Personalizadas",
    description: "Fita transparente com a sua marca impressa — identidade e segurança na embalagem.",
    longDescription:
      "A Fita Acrílica Impressa Personalizada une a resistência da fita acrílica transparente com a força da identidade visual da sua empresa. A marca, slogan ou informações de segurança são impressos diretamente no filme, tornando cada caixa fechada um ponto de comunicação. Além do diferencial visual, ela dificulta a violação da embalagem, pois qualquer tentativa de abertura fica visível. Ideal para e-commerce, logística, indústria e presentes corporativos.",
    image: acrilicaImpressa,
    images: [acrilicaImpressa],
    uses: ["Fechamento de embalagens com identidade visual", "Segurança e antiviolação", "E-commerce e logística", "Presentes e kits corporativos"],
    sizes: ["48mm x 100m", "72mm x 100m"],
    applications: ["Fechamento de Embalagens", "Identificação e Branding", "Uso Industrial"],
  },
  {
    slug: "fita-impressa-cuidado-fragil",
    name: "Fita Impressa Cuidado Frágil",
    category: "Fitas Personalizadas",
    description: "Fita com aviso impresso para proteger cargas frágeis durante o transporte.",
    longDescription:
      "A Fita Impressa Cuidado Frágil comunica de forma clara e imediata que a embalagem contém itens que exigem manuseio cuidadoso. Produzida em filme acrílico transparente com impressão do aviso padronizado, ela identifica visualmente a carga para transportadoras, operadores de logística e destinatários — reduzindo avarias, devoluções e prejuízos. Combina função de lacre com sinalização de segurança em uma única solução.",
    image: fitaImpressa1,
    images: [fitaImpressa1, fitaImpressa2, fitaImpressa3],
    uses: ["Identificação de cargas frágeis", "Sinalização logística", "Lacre com aviso de segurança", "E-commerce e transporte de eletrônicos"],
    sizes: ["48mm x 100m"],
    applications: ["Fechamento de Embalagens", "Identificação e Branding", "Uso Industrial"],
  },
  {
    slug: "fita-gomada-impressa",
    name: "Fita Gomada Impressa",
    category: "Fitas Personalizadas",
    description: "Fita kraft ativada por água com sua marca impressa — lacre inviolável e profissional. Vendida por quilo.",
    longDescription:
      "A Fita Gomada Impressa é fabricada em papel kraft resistente com adesivo à base d'água e impressão personalizada da sua marca. Ao ser umedecida, o adesivo penetra nas fibras do papelão e cria uma ligação praticamente permanente, tornando o lacre inviolável — qualquer tentativa de abertura danifica visivelmente a embalagem. Além de segurança, agrega valor estético à caixa, reforçando a identidade da empresa no momento da entrega. Vendida por quilo, com média de 1,300 kg por rolo e metragem que pode variar de 145 a 160 metros por rolo. Disponível com ou sem reforço.",
    image: fitaGomadaImpressa,
    images: [fitaGomadaImpressa],
    uses: ["Lacre inviolável de caixas", "Identidade visual na embalagem", "E-commerce e exportação", "Reforço estrutural do papelão"],
    sizes: ["70mm - 80mm", "Com Reforço", "Sem Reforço"],
    sizeNote: "Vendida por quilo · Média de 1,300 kg por rolo · 145 a 160 metros por rolo · Disponível com ou sem reforço",
    applications: ["Fechamento de Embalagens", "Identificação e Branding", "Uso Industrial"],
  },
  {
    slug: "fita-gomada",
    name: "Fita Gomada",
    category: "Fitas Impressas e Gomadas",
    description: "Fita kraft ativada por água para lacre seguro, resistente e inviolável. Vendida por quilo.",
    longDescription:
      "A Fita Gomada é produzida em papel kraft de alta gramatura com adesivo vegetal ativado por água. Diferentemente das fitas plásticas, ela adere às fibras do papelão criando um lacre estrutural que aumenta a resistência da caixa. Não descola com frio, calor ou umidade — ideal para transporte de longas distâncias, armazenamento em câmaras frias e cargas pesadas. Sustentável, biodegradável e compatível com linhas de embalagem eco-friendly. Vendida por quilo, com média de 1,300 kg por rolo e metragem que pode variar de 145 a 160 metros por rolo. Disponível com ou sem reforço.",
    image: fitaGomada,
    images: [fitaGomada],
    uses: ["Fechamento de caixas pesadas", "Transporte e exportação", "Armazenamento em câmaras frias", "Embalagem sustentável e biodegradável"],
    sizes: ["70mm - 80mm", "Com Reforço", "Sem Reforço"],
    sizeNote: "Vendida por quilo · Média de 1,300 kg por rolo · 145 a 160 metros por rolo · Disponível com ou sem reforço",
    applications: ["Fechamento de Embalagens", "Uso Industrial"],
  },
  {
    slug: "fixa-tape-massa-acrilica",
    name: "Fixa Tape Massa Acrílica",
    category: "Fitas Dupla Face",
    description: "Massa adesiva acrílica que substitui pregos e parafusos com acabamento limpo.",
    longDescription:
      "O Fixa Tape Massa Acrílica é um adesivo à base de acrílico de altíssima resistência desenvolvido para fixações onde o uso de pregos ou parafusos comprometeria a estética ou a integridade da superfície. Adere a cerâmica, vidro, madeira, metal, plástico e concreto, criando uma ancoragem permanente resistente à umidade e variações de temperatura. Ideal para quadros, espelhos, suportes, rodapés e acabamentos de interiores.",
    image: fitaTapeMassaAcrilica,
    images: [fitaTapeMassaAcrilica, fixaTapeMassaAdicionar, fixaTapeFina1, fixaTapeFina2],
    uses: ["Fixação de quadros e espelhos", "Rodapés e acabamentos", "Aplicação em cerâmica e vidro", "Substituição de pregos e parafusos"],
    sizes: [ "Sob consulta — tamanho personalizado"],
    applications: ["Fixação e Montagem", "Fitas Sob Medida"],
  },
  {
    slug: "fita-crepe-verde-automotiva",
    name: "Fita Crepe Verde Automotiva",
    category: "Fitas Crepe",
    description: "Fita crepe colorida para marcação de áreas e proteção em pintura.",
    longDescription:
      "A Fita Crepe Verde Automotiva foi desenvolvida para facilitar a organização e identificação de áreas em obras, reformas e projetos industriais. Sua cor verde facilita a visualização do mascaramento, e o adesivo à base de borracha garante boa aderência em paredes, madeiras e superfícies pintadas, com remoção limpa sem danos. Também utilizada para demarcar pisos, sinalizar zonas de risco e proteger superfícies durante acabamentos.",
    image: crepeVerdeGrossa,
    images: [crepeVerdeGrossa, crepeVerdeMais, crepeVerde1, crepeVerde2, crepeVerde3],
    uses: ["Marcação e demarcação de áreas", "Proteção em pintura de obras", "Sinalização de zonas em ambientes industriais"],
    sizes: ["18mm x 50m", "24mm x 50m", "48mm x 50m", "Sob consulta — tamanho personalizado"],
    applications: ["Pintura e Acabamento", "Uso Automotivo", "Fitas Sob Medida"],
  },
];
