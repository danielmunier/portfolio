import "../styles/components/projects.sass";
import netflix from "../images/projects/netflix.png";
import discord from "../images/projects/discord.jpg"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" name="projects" >
      <div className="title">
        <h2>Projetos</h2>
    
      </div>

      <div className="list-projects">
      <ProjectItem
          urlImage={netflix}
          title="Netflix Clone"
          description="Este projeto é um clone da plataforma Netflix, construído com as tecnologias React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth e Vercel. O objetivo desse projeto é replicar as principais funcionalidades da plataforma da Netflix."
        />
        <ProjectItem
          urlImage={discord}
          title="Rimuru Bot"
          description="Rimuru é um bot do Discord com um sistema de automação de tarefas e integração com APIs com a finalidade de auxiliar na administração de comunidades. Foi utilizado Typescript e MongoDB."
        />
      
       

      </div>
    </section>
  );
};

export default Projects;
