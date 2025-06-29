import { Technology } from "@/types"

interface TechnologiesProps {
  technologies: Technology[]
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <section>
      <h2 className="text-geist-lg font-medium mb-6 text-white">Tecnologias que domino</h2>

      <div className="flex justify-center">
        <div className="inline-flex items-center bg-gray-900/30 rounded-full p-2 border border-gray-800">
          {technologies.map((tech, index) => (
            <div key={tech.name} className="flex items-center">
              <div className="group relative px-4 py-3 rounded-full hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-mono text-blue-400 group-hover:text-blue-300 transition-colors">
                    {tech.icon}
                  </div>
                  <div className="text-geist-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                    {tech.name}
                  </div>
                </div>

                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gray-700">
                  {tech.description} • {tech.level}
                </div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {index < technologies.length - 1 && (
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-geist-sm text-gray-500">
        </p>
      </div>
    </section>
  )
} 