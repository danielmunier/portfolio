import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"


const ProjectsGrid = () => {

    return (
        <>
            <div className="dark:bg-[#151B28] p-6 rounded">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                    Projetos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 rounded">

                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index}>
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        repoLink={project.repoLink}
                                        liveDemoLink={project.liveDemoLink}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default ProjectsGrid