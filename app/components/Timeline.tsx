import React from 'react';

interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const educationItems: TimelineItem[] = [
  {
    type: 'education',
    title: 'Bacharelado em Ciência da Computação',
    organization: 'Universidade UniAmérica Descomplica',
    date: 'Ago 2023 - Mai 2027',
    description:
      'Formação combinando conhecimento teórico e habilidades práticas em desenvolvimento. Foco em tecnologias modernas, princípios de engenharia de software e metodologias ágeis.',
    skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Metodologias Ágeis'],
  },
];

const experienceItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Técnico de informática',
    organization: 'Lince Corporate',
    date: 'Jan 2022 - Mar 2023',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Ofereci suporte de hardware, incluindo montagem e manutenção de computadores. Também desenvolvi e mantive sites visualmente atraentes e informativos para destacar os serviços e projetos da empresa. Implementei um sistema automatizado de e-mails para otimizar a comunicação. ',
    skills: ['JavaScript', 'HTML', 'CSS', 'Automação de e-mails', 'Hardware'],
  },
];

const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="mb-8 relative">
    <div className="absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700" />
    <div className="ml-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{item.organization}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
      {item.location && (
        <p className="text-sm text-gray-500 dark:text-gray-500">{item.location}</p>
      )}
      {item.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
      )}
      {item.skills && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#F8FAFC] dark:bg-[#151B28] rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Timeline
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Experiência
          </h2>
          {experienceItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Educação
          </h2>
          {educationItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;