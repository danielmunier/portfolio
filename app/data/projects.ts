interface Project {
    title: string;
    description: string;
    repoLink?: string;
    liveDemoLink?: string;

}
export const projects: Project[] = [
    {
        title: 'Pochi Bot',
        description: 'Bot desenvolvido para ajudar na administração de servidores do Discord.',
        repoLink: 'https://github.com/danielmunier/pochi',
    },
    {
        title: 'Docflix',
        description: 'Clone do serviço de streaming Netflix, desenvolvido para fins didáticos.',
        repoLink: 'https://github.com/danielmunier/netflix',
        liveDemoLink: 'https://docflix.vercel.app/',
    },
    {
        title: 'Portfólio',
        description: 'Site de portfólio criado para apresentar meus projetos e habilidades de desenvolvimento.',
        repoLink: 'https://github.com/danielmunier/portfolio',
    },
    {
        title: 'Lince Corporate',
        description: 'Site desenvolvido como freelancer para a empresa Lince Corporate, destacando seus serviços e projetos.',
        repoLink: 'https://github.com/danielmunier/lince_next',
        liveDemoLink: 'https://lincecorporate.com.br',
    },
];