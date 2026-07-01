import industria from "@/assets/comunicacaovisual.jpeg";
import logistica from "@/assets/seg-logistica.jpg";

import construcao from "@/assets/seg-construcao.jpg";
import auto from "@/assets/seg-auto.jpg";

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  img: string;
  tagline: string;
  description: string;
  challenges: string[];
  benefits: { title: string; text: string }[];
  recommendedProducts: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "industria-e-manufatura",
    title: "COMUNICAÇÃO VISUAL",
    shortTitle: "COMUNICAÇÃO",
    img: industria,
    tagline: "Identidade visual e comunicação para ambientes industriais",
    description:
      "Ambientes industriais demandam fitas que aguentem peso, pressão, umidade e temperatura — sem falhar. A Vplast oferece uma linha completa pensada para as exigências do chão de fábrica: desde o fechamento seguro de caixas pesadas até a fixação permanente de componentes em máquinas e estruturas.",
    challenges: [
      "Fechamento de embalagens pesadas e volumosas",
      "Fixação de peças e componentes em linhas de montagem",
      "Vedação contra poeira, umidade e agentes químicos",
      "Identificação e rastreamento de produtos ao longo do processo",
    ],
    benefits: [
      { title: "Alta Resistência", text: "Fitas com adesivos de alta performance que aguentam pressão, peso e movimentação sem descolar." },
      { title: "Versatilidade", text: "Soluções para cada etapa: fechamento, fixação, vedação e identificação." },
      { title: "Redução de Perdas", text: "Lacres seguros minimizam avarias, devoluções e retrabalho." },
      { title: "Eficiência Operacional", text: "Fitas fáceis de aplicar aceleram o processo e reduzem o tempo de linha parada." },
    ],
    recommendedProducts: ["fita-dupla-face-df-hm-papel-147", "fita-dupla-face-alta-aderencia-pp-306a", "fita-dupla-face-espuma-eva", "fixa-tape-massa-acrilica"],
  },
  {
    slug: "logistica-e-transporte",
    title: "LOGÍSTICA E TRANSPORTE",
    shortTitle: "LOGÍSTICA",
    img: logistica,
    tagline: "Integridade garantida da origem ao destino",
    description:
      "Na logística, cada embalagem percorre centenas de quilômetros e passa por inúmeros manuseios. A Vplast fornece fitas que garantem que a carga chegue intacta ao destino, com lacres invioláveis, identificação clara e resistência às condições mais adversas de transporte e armazenagem.",
    challenges: [
      "Garantir integridade de embalagens durante longas distâncias",
      "Identificar cargas frágeis e com manuseio especial",
      "Resistência a variações de temperatura em câmaras frias e ambientes quentes",
      "Lacre seguro contra violação e adulteração",
    ],
    benefits: [
      { title: "Lacre Inviolável", text: "Fitas gomadas e impressas que deixam evidência visível de qualquer tentativa de abertura." },
      { title: "Identificação Clara", text: "Fitas com impressão de avisos (Frágil, Cuidado) facilitam o manuseio correto pelos operadores." },
      { title: "Resistência Climática", text: "Adesivos que mantêm a aderência em câmaras frias, ambientes úmidos e sob calor intenso." },
      { title: "Rastreabilidade", text: "Fitas personalizadas com dados da empresa facilitam a gestão e o controle de estoque." },
    ],
    recommendedProducts: ["fita-filamentosa-mono-direcao", "fita-adesiva-acrilica-t", "fita-acrilica-impressa-personalizada", "fita-gomada", "fita-gomada-impressa"],
  },
  {
    slug: "construcao-civil",
    title: "CONSTRUÇÃO CIVIL",
    shortTitle: "CONSTRUÇÃO",
    img: construcao,
    tagline: "Durabilidade e precisão para ambientes adversos",
    description:
      "Obras e reformas exigem materiais que resistam a poeira, umidade, solventes e temperaturas extremas. As fitas Vplast para construção civil foram desenvolvidas para aplicações exigentes: do mascaramento fino em pinturas até a vedação permanente de esquadrias, passando pela fixação de acabamentos e revestimentos.",
    challenges: [
      "Mascaramento preciso em pinturas e texturas",
      "Fixação de revestimentos, rodapés e acabamentos",
      "Vedação de janelas, portas e esquadrias",
      "Resistência a poeira, umidade e intempéries",
    ],
    benefits: [
      { title: "Mascaramento Preciso", text: "Fitas crepe que garantem linhas perfeitas em pinturas e evitam manchas em superfícies adjacentes." },
      { title: "Fixação Permanente", text: "Dupla face e alta aderência que substituem parafusos e pregos em acabamentos." },
      { title: "Vedação Confiável", text: "Espuma EVA e alta aderência que selam frestas contra vento, poeira e infiltração." },
      { title: "Remoção Limpa", text: "Fitas crepe que saem sem deixar resíduos ou danos à pintura após o serviço." },
    ],
    recommendedProducts: ["fita-crepe-uso-geral-branca", "fita-crepe-automotiva-amarela", "fita-crepe-verde-pintura"],
  },
  {
    slug: "automotivo",
    title: "AUTOMOTIVO",
    shortTitle: "AUTOMOTIVO",
    img: auto,
    tagline: "Acabamento profissional para pintura e repintura veicular",
    description:
      "O mercado automotivo exige fitas com performance de nível técnico: resistência ao calor das cabines de secagem, conformabilidade nas curvas da lataria e remoção limpa sem resíduos. A Vplast fornece a linha completa para funilaria, lataria, montadoras e distribuidoras que não abrem mão de qualidade.",
    challenges: [
      "Mascaramento perfeito em curvas e contornos do veículo",
      "Resistência ao calor das cabines de secagem (até 100 °C)",
      "Remoção sem resíduo de cola na lataria pintada",
      "Proteção de borrachas, faróis e vidros durante a pintura",
    ],
    benefits: [
      { title: "Alta Conformabilidade", text: "Papel crepado macio que acompanha curvas e contornos complexos da carroceria." },
      { title: "Resistência Térmica", text: "Suporta temperaturas de cabines de secagem sem desprender ou transferir adesivo." },
      { title: "Remoção Limpa", text: "Sai íntegra após a pintura, sem marcas, manchas ou resíduos na superfície." },
      { title: "Linha Profissional", text: "Resultado de acabamento nível montadora, mesmo em oficinas e funilarias independentes." },
    ],
    recommendedProducts: ["fita-crepe-automotiva-amarela", "fita-crepe-automotiva-adelbras-765", "fita-automotiva", "fita-crepe-verde-pintura"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
