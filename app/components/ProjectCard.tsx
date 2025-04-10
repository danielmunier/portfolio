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
    liveDemoLink
}) => {
    return (
        <div className="flex flex-col bg-gray-800 text-white h-full p-3 rounded-lg">
            <div className="flex flex-col gap-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
            <div className="flex gap-4 mt-4">
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <FaGithub className="w-4 h-4 cursor-pointer" />
                </a>
                <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <FaExternalLinkAlt className="w-4 h-4 cursor-pointer" />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;