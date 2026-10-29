# danielmunier.com.br

Meu portfólio: quem eu sou, o que uso, onde trabalhei e os projetos que fiz.

Feito a partir do [chanhdai.com](https://github.com/ncdai/chanhdai.com), de Chánh Đại, sob a licença MIT. O código veio de lá; os dados, a marca e os textos são meus.

## Rodar local

```bash
pnpm install
pnpm dev
```

Abre em http://localhost:3000. Copie `.env.example` para `.env.local` se quiser mexer nas variáveis.

## Onde mudar o conteúdo

Tudo que aparece na página mora em `src/features/portfolio/data/`:

| Arquivo | O que é |
| --- | --- |
| `user.ts` | nome, cargo, resumo, e-mail, foto |
| `social-links.ts` | GitHub e LinkedIn |
| `tech-stack.tsx` | stack, por categoria |
| `experiences.tsx` | experiência profissional |
| `education.ts` | formação |
| `projects.tsx` | projetos |
| `certifications.ts` | certificações |

Imagens ficam em `public/images/`.

## Stack

Next.js 16, React 19, Tailwind CSS v4, shadcn/ui e Motion. Publicado na Vercel.
