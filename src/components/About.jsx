import "../styles/components/about.sass"
import  Button from "./Button"

const About = () => {
  return (
    <section id="about">
      <div className="me">
        <h2>Sobre mim</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          minima asperiores corrupti alias, pariatur perspiciatis nihil hic.
          Necessitatibus totam alias delectus sequi quos, ad quis eos ea cum
          inventore modi.
        </p>
      </div>

      <div class="info">
        <div class="info-description">
          <h2>Get to know me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            rerum odit quos mollitia nostrum, animi suscipit necessitatibus,
            maiores sit ad itaque tempore natus ducimus dignissimos consequatur
            commodi sequi pariatur assumenda.
          </p>

          
          <div>
           <Button text="Contato" href="#contact" fontColor="#FFF" bgColor="#7159c1" />
          </div>


        </div>
        <div class="skills">
          <h2>My Skills</h2>
          <ul>
            <li className="skill-item">HTML</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">TypeScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">NodeJS</li>
            <li className="skill-item">Git/Github</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">Linux</li>
            <li className="skill-item">Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};


export default About