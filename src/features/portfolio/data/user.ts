import type { User } from "@/features/portfolio/types/user"

const GITHUB_AVATAR = "https://github.com/danielmunier.png"

export const USER: User = {
  firstName: "Daniel",
  lastName: "Munier",
  displayName: "Daniel Munier",
  username: "danielmunier",
  gender: "male",
  address: "Rio de Janeiro, RJ, Brasil",
  emailB64: "aWRhbmllbG11bmllckBnbWFpbC5jb20=",
  jobTitle: "Engenheiro de Software Full Stack",
  jobs: [
    {
      title: "Desenvolvedor Full Stack Pleno",
      company: "AcesseFy",
      website: "https://acessefy.com.br",
      experienceId: "acessefy",
    },
  ],
  about: `- Sou desenvolvedor full stack e gosto de ver o que eu construo funcionando na mão de quem usa. Aprendi boa parte do que sei colocando sistema no ar e corrigindo o que a vida real mostrou.
- Já atuei com agentes de voz em tempo real, visão computacional, IA generativa de imagem e vídeo, automação de ambientes físicos, APIs e apps web, mobile e desktop.
- Ajudei a construir desde o início a portaria autônoma da [AcesseFy](https://acessefy.com.br), que hoje faz mais de 1.000 atendimentos por voz por mês e tem mais de 7 mil moradores na base (out/2026).
- Curso Ciência da Computação na Uniamérica e mantenho projetos próprios fora do trabalho.
`,
  // Follows the GitHub profile picture, so changing it there updates the site.
  avatar: GITHUB_AVATAR,
  keywords: [
    "daniel munier",
    "danielmunier",
    "desenvolvedor full stack",
    "desenvolvedor full stack rio de janeiro",
    "engenheiro de software",
    "portfólio",
    "agentes de voz com ia",
    "typescript",
    "python",
    "react",
    "node.js",
    "nestjs",
    "rio de janeiro",
  ],
  dateCreated: "2026-10-29", // YYYY-MM-DD
}
