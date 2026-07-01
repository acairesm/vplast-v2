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
    tagline: "Fixação discreta e segura para placas, displays e sinalização",
    description:
      "Na comunicação visual, a fixação precisa ser tão impecável quanto o visual. A Vplast oferece fitas dupla face de alta aderência para montagem de letreiros, placas, displays, revestimentos e painéis — sem parafusos visíveis, sem danos à superfície e com acabamento profissional.",
    challenges: [
      "Fixação de placas e letreiros em paredes e vidros",
      "Montagem de displays e painéis publicitários",
      "Aplicação de revestimentos e películas decorativas",
      "Fixação em superfícies lisas, porosas ou pintadas sem danos",
    ],
    benefits: [
      { title: "Acabamento Limpo", text: "Sem parafusos ou pregos aparentes — a fita fixa por baixo, mantendo o visual intacto." },
      { title: "Alta Aderência", text: "Adesivo de alta performance que segura com firmeza em vidro, MDF, metal, acrílico e mais." },
      { title: "Fácil Aplicação", text: "Montagem rápida e precisa, sem ferramentas especiais e sem sujeira." },
      { title: "Durabilidade", text: "Resistência a umidade e variações de temperatura para fixações que duram." },
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
    recommendedProducts: ["fita-crepe-automotiva-adelbras-765", "fita-crepe-verde-automotiva"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
