import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"


const ProjectsGrid = () => {

    return (
        <>
            <div>
                <h3>Featured Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 p-4 dark:bg-[#151B28] rounded">

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