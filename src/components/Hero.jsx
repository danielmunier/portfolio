import "../styles/components/hero.sass";
import Button from "./Button";
import SocialNetworks from "./SocialNetworks";

const Hero = () => {
  return (
    <section id="hero">
      <div id="container-hero">
        <SocialNetworks flexDirection="flex-column" />

        <div class="about">
          <div class="about_info">
            <h1>Hey there, I'm Daniel</h1>
            <p>
              Sou um desenvolvedor Fullstack, atualmente me especializando em NextJs, Node, Typescript e mais.
            </p>
            <div>
              <Button text="Meus projetos" href="#projects" fontColor="black"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
