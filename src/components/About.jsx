import "../styles/components/about.sass"
import  Button from "./Button"

const About = () => {
  return (
    <section id="about">
      <div className="me">
        <h2>Sobre mim</h2>
       
      </div>

      <div class="info">
        <div class="info-description">
          <h2>Get to know me</h2>
          <p>
          Sou um desenvolvedor com paixão por tecnologia e um forte desejo de aprender e crescer. Atualmente cursando bacharelado em Ciência da computação no Rio de Janeiro - RJ.
          </p>

          
          <div>
           <Button text="Contato" href="#contact" fontColor="#FFF" bgColor="#0C1012" />
          </div>


        </div>
        <div class="skills">
          <h2>Habilidades</h2>
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