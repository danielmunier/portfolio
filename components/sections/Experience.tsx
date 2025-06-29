import { Badge } from "@/components/ui/badge"
import { Experience as ExperienceType } from "@/types"

interface ExperienceProps {
  experiences: ExperienceType[]
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-geist-lg font-medium mb-6 text-white">Experiência</h2>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800/50">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-geist-base font-medium text-white">{exp.title}</h3>
                <p className="text-geist-sm text-gray-500">{exp.company} • {exp.period}</p>
              </div>
              {exp.current && (
                <Badge className="bg-green-600 text-white text-xs px-2 py-1">Atual</Badge>
              )}
            </div>
            <p className="text-geist-sm text-gray-400 mb-3 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex gap-2">
              {exp.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs border-gray-700 text-gray-400">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 