import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "mano-do-ceu",
    title: "MANO do Céu",
    period: {
      start: "08.2026",
    },
    link: "https://www.sampasky.com.br",
    skills: ["Projeto AcesseFy", "Sampa Sky", "Agente de voz", "IoT"],
    description: `Projeto da AcesseFy para o Sampa Sky, em São Paulo. O MANO fica na sala de reunião como um assistente de voz: anota os pedidos de quem está ali e manda para o restaurante, que serve na própria sala. Também controla a sala por IoT, como persianas, luz, TV e ar-condicionado.`,
    icon: <img src="/images/projects/sampasky.png" alt="" />,
    isExpanded: true,
  },
  {
    id: "seg-summit-2026",
    title: "Seg Summit 2026",
    period: {
      start: "09.2026",
      end: "10.2026",
    },
    link: "https://segsummit.com.br",
    skills: [
      "Projeto AcesseFy",
      "Evento",
      "Totem com IA",
      "Modelos abertos de vídeo",
      "GPU na nuvem",
      "Resend",
    ],
    description: `Evento no Distrito Anhembi, em São Paulo, em que a AcesseFy apresentou seus totens de atendimento com IA. Trabalhei no desenvolvimento dos produtos que levamos para o estande.
- Brinde para os visitantes: a pessoa tira uma foto no totem e vira um personagem 3D no cenário da profissão dela.
- O vídeo é animado com modelos abertos na GPU da nossa própria infraestrutura e entregue por e-mail usando Resend.`,
    icon: <img src="/images/projects/segsummit.png" alt="" />,
  },
  {
    id: "ia-sec-360",
    title: "IA SEC 360",
    period: {
      start: "08.2026",
      end: "08.2026",
    },
    link: "https://iasec360.acessefy.com.br",
    skills: ["Projeto AcesseFy", "Evento", "Avatar de voz", "WhatsApp"],
    description: `Projeto da AcesseFy para o evento IA SEC 360, voltado a síndicos de condomínio.
- Um avatar de voz apresentava o evento, coletava nome, telefone e empresa e enviava o convite pelo WhatsApp.`,
    icon: <img src="/images/projects/iasec360.png" alt="" />,
  },
]
