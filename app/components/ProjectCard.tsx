
interface ProjectCardProps {
    title: string;
    description: string;

}


const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description
}) => {
    return (
        <div className="flex flex-col bg-gray-800 text-white h-full p-3 rounded-lg ">
            <div className="flex flex-col gap-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-400">{description}</p>

            </div>

        </div>
    )
}

export default ProjectCard