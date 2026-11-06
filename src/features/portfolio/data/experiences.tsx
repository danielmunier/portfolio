import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "acessefy",
    companyName: "AcesseFy",
    companyLogo: "/images/companies/acessefy.png",
    companyWebsite: "https://acessefy.com.br",
    location: "São Paulo, SP",
    positions: [
      {
        id: "1",
        title: "Desenvolvedor Full Stack Pleno",
        employmentPeriod: {
          start: "05.2025",
        },
        description: `Startup de portaria autônoma com IA para condomínios residenciais e comerciais. Um agente de voz atende o visitante no totem, confere o rosto, chama o morador e libera a entrada. Atuo no sistema inteiro, do áudio em tempo real ao banco de dados, do app do morador ao deploy, e acompanho a operação depois que vai para o ar.

Ajudei a construir desde o início a portaria autônoma da AcesseFy, que hoje faz mais de 1.000 atendimentos por voz por mês e tem mais de 7 mil moradores na base (out/2026).

- Agente de voz multiagente (triagem, coleta de dados, foto e finalização), com ferramentas para os agentes de IA.
- Ponte de chamadas de voz do WhatsApp até o agente com a API de chamadas da Meta, e interfone web com vídeo no app do morador.
- API central com aprovação de visitas em tempo real.
- Reconhecimento facial com prova de vida.
- Desenvolvimento do portal administrativo.`,
        skills: [
          "TypeScript",
          "NestJS",
          "Prisma",
          "PostgreSQL",
          "React 19",
          "React Native",
          "FastAPI",
          "WebSocket",
          "Docker",
          "Linux",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "lince",
    companyName: "Lince Corporate",
    companyLogo: "/images/companies/lince.png",
    location: "Rio de Janeiro, RJ",
    positions: [
      {
        id: "1",
        title: "Desenvolvedor Full Stack Júnior",
        employmentPeriod: {
          start: "01.2022",
          end: "01.2023",
        },
        description: `- Landing pages e aplicações web em Next.js para divulgação de serviços e projetos.
- Automação de processos internos e manutenção da infraestrutura de TI.`,
        skills: ["Next.js", "React", "Automação", "Infraestrutura de TI"],
      },
    ],
  },
]
