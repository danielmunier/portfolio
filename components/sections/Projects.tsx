import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <h2 className="text-geist-lg font-medium mb-6 text-white">
        Meus Projetos
      </h2>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/50 rounded-lg p-5 border border-gray-800/50 hover:bg-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-geist-base font-medium text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  {project.status === "novo" ? (
                    <Badge className="bg-green-600 text-white text-xs px-1.5 py-0.5">
                      {project.status}
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-600 text-white text-xs px-1.5 py-0.5">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <p className="text-geist-sm text-gray-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-3 h-3" />
                    <span>{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex gap-1 flex-wrap">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-500"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity "
                asChild
              >
                <a
                  href={project.url || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900/30 rounded-lg p-4 border border-gray-800/30 hover:bg-gray-800/20 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-geist-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                  {project.status && (
                    <Badge className="bg-blue-600 text-white text-xs px-1.5 py-0.5">
                      {project.status}
                    </Badge>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <span>{project.year}</span>
                  </div>
                </div>
                <p className="text-geist-sm text-gray-500 mt-1">
                  {project.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                asChild
              >
                <a
                  href={project.url || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
