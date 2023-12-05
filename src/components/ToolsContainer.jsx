import iconPython from "../images/icons/icon-python.svg";
import iconMySQL from "../images/icons/icon-mysql.svg";
import iconReact from "../images/icons/icon-react.svg";
import iconNode from "../images/icons/icon-node.svg";
import iconSass from "../images/icons/icon-sass.svg";
import iconHtml from "../images/icons/icon-html.svg";
import iconCss from "../images/icons/icon-css.svg";
import iconJavascript from "../images/icons/icon-javascript.svg";
import iconDocker from "../images/icons/icon-docker.svg"
import IconList from "./IconList";
import "../styles/components/toolscontainer.sass";

const iconsLanguages = [
  {
    name: iconJavascript,
  },
  {
    name: iconPython,
  },
  {
    name: iconMySQL,
  },
  {
    name: iconHtml,
  },

  {
    name: iconCss,
  },
];

const iconsFrameworks = [
  {
    name: iconReact,
  },
  {   
    name: iconNode 
  },
  {
    name: iconSass
  }
];

const iconOther = [
  {
    name: iconDocker
  }
  
]
const ToolsContainer = () => {
  return (
    <section id="info-tools">
      <h3>Languages</h3>

      <div className="tool">
        <IconList icons={iconsLanguages} />
      </div>
      <h3>Frameworks and Libraries</h3>
      <div className="tool">
        <IconList icons={iconsFrameworks} />
      </div>

      <h3>Others</h3>
      <div className="tool">
      <IconList icons={iconOther} />

      </div>
    </section>
  );
};

export default ToolsContainer;
