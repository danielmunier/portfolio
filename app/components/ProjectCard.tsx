import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    repoLink?: string; // Link para o repositório
    liveDemoLink?: string; // Link para a demonstração ao vivo
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    repoLink,
    liveDemoLink,
}) => {
    return (
        <div className="relative flex flex-col bg-gray-800 text-white h-full p-4 rounded-lg shadow-md group transition-transform duration-300">
            {/* Animação de borda */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-600 transition-all duration-300 pointer-events-none"></div>

            {/* Conteúdo */}
            <div className="relative z-10">
                {/* Título */}
                <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>

                {/* Descrição */}
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {description}
                </p>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}
                    {liveDemoLink && (
                        <a
                            href={liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Live Demo"
                        >
                            <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;