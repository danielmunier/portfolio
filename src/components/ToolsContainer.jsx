import {RiJavascriptFill } from 'react-icons/ri'

import iconPython from "../images/icon-python.svg"
import iconMySQL from "../images/icon-mysql.svg"
import iconReact from "../images/icon-react.svg"
import iconNode from "../images/icon-node.svg"
import iconSass from "../images/icon-sass.svg"
import iconHtml from "../images/icon-html.svg"

import "../styles/components/toolscontainer.sass";

const ToolsContainer = () =>  {
  return (
    <section id="info-tools">
        <h3>Technologies</h3>

        <div className="tool">
          <img src={iconNode} />
           <img id="python-icon" src={iconPython} />
           <img src={iconReact} />
          <img src={iconHtml} />
          <RiJavascriptFill id="js-icon"/>
           <img src={iconSass} />
           <img src={iconMySQL} />
        </div>
       
        <h3>Others</h3>
        <div className="tool">
        
            
           
        </div>
    </section>
  );
};

export default ToolsContainer;
