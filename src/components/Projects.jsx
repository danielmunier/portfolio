import "../styles/components/projects.sass";
import netflix from "../images/projects/netflix.png";
import discord from "../images/projects/discord.jpg"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" name="projects" >
      <div className="title">
        <h2>Projects</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          minima asperiores corrupti alias, pariatur perspiciatis nihil hic.
          Necessitatibus totam alias delectus sequi quos, ad quis eos ea cum
          inventore modi.
        </p>
      </div>

      <div className="list-projects">
        <ProjectItem
          urlImage={discord}
          title="Rimuru Bot"
          description="Rimuru é um bot do Discord com um sistema de automação de tarefas e integração com APIs com a finalidade de auxiliar na administração de comunidades. Foi utilizado Typescript, MongoDB"
        />
        <ProjectItem
          urlImage={netflix}
          title="Netflix Clone"
          description="Este projeto é um clone da plataforma Netflix, construído com as tecnologias React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth e Vercel. O objetivo do projeto é replicar as principais todas as funcionalidades da plataforma Netflix para fins didáticos."
        />
       

      </div>
    </section>
  );
};

export default Projects;
