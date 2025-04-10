import * as Si from 'react-icons/si';
import { skills } from "../data/skills";

const Technologies = () => {
    // Mapeia os ícones disponíveis no pacote react-icons/si
    const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {};
    Object.keys(Si).forEach(key => {
        iconComponents[key] = Si[key as keyof typeof Si];
    });

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-component gap-4 p-4 rounded-md">
            {skills.map((skill, index) => {
                const Icon = iconComponents[skill.icon];

                return (
                    <div key={index} className="rounded-md group">
                        <div
                            className="h-full border-b rounded-md transition-all hover:scale-105 bg-card p-3 flex flex-col items-center justify-center cursor-pointer"
                            style={{ color: skill.color }}
                        >
                            {Icon ? (
                                <Icon className="w-5 h-5" /> 
                            ) : (
                                <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                                    <span className="text-sm">N/A</span>
                                </div>
                            )}
                            <span className="mt-2 text-xs text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Technologies;