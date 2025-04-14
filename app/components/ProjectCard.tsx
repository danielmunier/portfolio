import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    repoLink?: string; 
    liveDemoLink?: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    repoLink,
    liveDemoLink,
}) => {
    return (
        <div className="bg-gray-50 dark:bg-gradient-to-br dark:from-[#1E1E2E] dark:to-[#242436] rounded-lg p-3 flex flex-col justify-between border border-gray-200 dark:border-gray-800/50 hover:border-blue-900/50 transition-colors">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-600 transition-all duration-300 pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>

                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {description}
                </p>

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