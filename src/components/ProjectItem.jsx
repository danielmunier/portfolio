import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/components/projectItem.sass";

const ProjectItem = ({ title, description, urlImage, urlRepository }) => {
  return (
    <div class="project">
      <div className="container-image">
        <img className="project-image" src={urlImage} alt="" srcset="" />
      </div>
      <div class="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-action">
          <button>
            <FaExternalLinkAlt />
            <a href="https://github.com/danielmunier/netflix">Saiba mais</a>
          </button>
          <button>
            <FaGithub />
            <a href="https://github.com/danielmunier/netflix">Repositório</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
