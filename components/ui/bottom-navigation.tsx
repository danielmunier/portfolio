"use client";
import { useState } from "react";

interface BottomNavigationProps {
  profile: {
    contact: {
      github: string;
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
  };
}

export function BottomNavigation({ profile }: BottomNavigationProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Aqui você pode implementar a lógica para alternar o tema
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Botão para mostrar/ocultar */}
      {!isVisible && (
        <div className="mb-3 flex justify-center">
          <button
            onClick={toggleVisibility}
            className="p-2 bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-full text-white hover:text-blue-400 transition-colors duration-200 shadow-2xl"
            title="Mostrar navegação"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      {/* Navegação principal */}
      {isVisible && (
        <div className="flex items-center bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-full px-4 py-3 shadow-2xl">
          {/* Home */}
          <button
            onClick={() => scrollToSection("hero")}
            className="p-3 text-white hover:text-blue-400 transition-colors duration-200"
            title="Início"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </button>

          <div className="w-px h-6 bg-gray-700 mx-2" />

          {/* About */}
          <button
            onClick={() => scrollToSection("about")}
            className="p-3 text-white hover:text-blue-400 transition-colors duration-200"
            title="Sobre"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </button>

          <div className="w-px h-6 bg-gray-700 mx-2" />

          {/* Projects */}
          <button
            onClick={() => scrollToSection("projects")}
            className="p-3 text-white hover:text-blue-400 transition-colors duration-200"
            title="Projetos"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16,18 22,12 16,6" />
              <polyline points="8,6 2,12 8,18" />
            </svg>
          </button>

          <div className="w-px h-6 bg-gray-700 mx-2" />

          {/* LinkedIn */}
          {profile.contact.linkedin && (
            <>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white hover:text-blue-500 transition-colors duration-200"
                title="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <div className="w-px h-6 bg-gray-700 mx-2" />
            </>
          )}

          {/* Twitter/X */}
          {profile.contact.twitter && (
            <>
              <a
                href={profile.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white hover:text-gray-300 transition-colors duration-200"
                title="Twitter/X"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <div className="w-px h-6 bg-gray-700 mx-2" />
            </>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-3 text-white hover:text-yellow-400 transition-colors duration-200"
            title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
          >
            {isDarkMode ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className="w-px h-6 bg-gray-700 mx-2" />

          {/* Botão para ocultar */}
          <button
            onClick={toggleVisibility}
            className="p-3 text-white hover:text-red-400 transition-colors duration-200"
            title="Ocultar navegação"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
