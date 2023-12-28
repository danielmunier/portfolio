import "../styles/components/hero.sass";
import Button from "./Button";
import SocialNetworks from "./SocialNetworks";

const Hero = () => {
  return (
    <section id="hero">
      <div id="container-hero">
        <SocialNetworks />

        <div class="about">
          <div class="about_info">
            <h1>Hey there, I'm Daniel</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
              reprehenderit? Laboriosam ipsa magnam illo quidem cum nam expedita
              corrupti dicta cupiditate nulla. Modi dolores, consequatur
              sapiente maiores nulla minus magnam.
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
