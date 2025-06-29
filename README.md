# Portfólio

Um portfólio moderno e responsivo construído com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com tema escuro
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Performance Otimizada**: Construído com Next.js 15 e Turbopack
- **TypeScript**: Código totalmente tipado para melhor manutenibilidade
- **Componentes Modulares**: Arquitetura escalável e reutilizável
- **SEO Otimizado**: Metadados completos e estrutura semântica
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade

## 🛠️ Tecnologias

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4
- **Componentes**: Radix UI
- **Ícones**: Lucide React
- **Utilitários**: class-variance-authority, clsx, tailwind-merge

## 📁 Estrutura do Projeto

```
portfolio/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   ├── sections/         # Seções do portfólio
│   └── ui/               # Componentes de UI reutilizáveis
├── config/               # Configurações do projeto
├── data/                 # Dados do portfólio
├── lib/                  # Utilitários e helpers
├── types/                # Definições TypeScript
└── public/               # Arquivos estáticos
```

## 🎯 Componentes Principais

### Seções
- **Hero**: Seção principal com apresentação
- **About**: Sobre o desenvolvedor
- **Technologies**: Stack de tecnologias
- **Experience**: Experiência profissional
- **Projects**: Projetos desenvolvidos
- **Location**: Informações de localização
- **Contact**: Informações de contato
- **Footer**: Rodapé do site

### Componentes UI
- **Button**: Botões com variantes
- **Badge**: Badges para tags e status
- **Card**: Cards reutilizáveis
- **Section**: Wrapper para seções

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Personalização

### Dados do Portfólio
Edite o arquivo `data/portfolio.ts` para personalizar:
- Informações pessoais
- Tecnologias
- Projetos
- Experiência profissional

### Configurações do Site
Modifique `config/site.ts` para alterar:
- Metadados
- Links sociais
- Configurações gerais

### Estilos
- **Cores**: Edite as variáveis CSS em `app/globals.css`
- **Componentes**: Modifique os componentes em `components/ui/`
- **Layout**: Ajuste o layout em `components/layout/`

## 🏗️ Arquitetura

### Padrões Utilizados
- **Component Composition**: Componentes reutilizáveis e composáveis
- **Type Safety**: TypeScript em todo o projeto
- **Separation of Concerns**: Separação clara entre dados, lógica e apresentação
- **Atomic Design**: Componentes organizados por complexidade

### Estrutura de Dados
```typescript
// Tipos principais
interface Profile {
  name: string
  title: string
  about: string[]
  contact: Contact
  location: Location
}

interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  featured: boolean
  stats: { stars: number; forks: number }
  year: string
  url?: string
  githubUrl?: string
}
```

## 🎨 Design System

### Cores
- **Primária**: Azul (#3B82F6)
- **Secundária**: Cinza (#6B7280)
- **Background**: Escuro (#121113)
- **Texto**: Branco/Cinza claro

### Tipografia
- **Fonte Principal**: Geist Sans
- **Fonte Mono**: Geist Mono
- **Tamanhos**: Sistema de escala consistente

### Espaçamento
- **Grid**: Sistema de grid responsivo
- **Spacing**: Escala de espaçamento consistente
- **Breakpoints**: Mobile-first approach

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

### Otimizações Implementadas
- **Next.js 15**: Última versão com Turbopack
- **Image Optimization**: Otimização automática de imagens
- **Code Splitting**: Carregamento sob demanda
- **Tree Shaking**: Eliminação de código não utilizado
- **CSS Purge**: Remoção de estilos não utilizados

### Métricas de Performance
- **Lighthouse Score**: 95+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linting do código
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as [diretrizes de contribuição](CONTRIBUTING.md) antes de submeter um pull request.

## 📞 Contato

- **Email**: idanielmunier@email.com
- **GitHub**: [@danielmunier](https://github.com/danielmunier)
- **LinkedIn**: [Daniel Munier](https://linkedin.com/in/daniel-munier)

---

Desenvolvido com ❤️ por Daniel Munier
