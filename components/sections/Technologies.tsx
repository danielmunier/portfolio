"use client";
import { Technology } from "@/types";
import { useState } from "react";

interface TechnologiesProps {
  technologies: Technology[];
}

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  devops: "DevOps",
  design: "Design",
};

export function Technologies({ technologies }: TechnologiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Agrupar tecnologias por categoria
  const technologiesByCategory = technologies.reduce(
    (acc, tech) => {
      const category = tech.category || "other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tech);
      return acc;
    },
    {} as Record<string, Technology[]>
  );

  const categories = Object.keys(technologiesByCategory);
  const displayTechnologies = selectedCategory
    ? technologiesByCategory[selectedCategory]
    : technologies.slice(0, 8); // Mostrar apenas as primeiras 8 por padrão

  return (
    <section>
      <h2 className="text-geist-lg font-medium mb-6 text-white">
        Tecnologias que domino
      </h2>

      {/* Filtros por categoria */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            selectedCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Todas ({technologies.length})
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {categoryLabels[category as keyof typeof categoryLabels] ||
              category}{" "}
            ({technologiesByCategory[category].length})
          </button>
        ))}
      </div>

      {/* Grid de tecnologias */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl">
          {displayTechnologies.map((tech) => (
            <div key={tech.name} className="group relative">
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-900/30 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer h-20 w-full">
                <div className="text-lg font-mono text-blue-400 group-hover:text-blue-300 transition-colors mb-1">
                  {tech.icon}
                </div>
                <div className="text-xs text-gray-300 group-hover:text-white transition-colors font-medium text-center leading-tight">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{tech.level}</div>
              </div>

              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gray-700 z-10">
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
