import {AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import {FaGithub } from 'react-icons/fa'
import "../styles/components/contactcontainer.sass";

const ContactContainer = () =>  {
  return (
    <section id="information">
     
      <div className="info-card">
        <a href="mailto:dmunier27@gmail.com" target="mailto:dmunier27@gmail.com" rel="noopener noreferrer"><AiOutlineMail id="email-icon" /></a>
        <div>
          <p>dmunier27@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <p>Rio de Janeiro / RJ</p>
        </div>
      </div>
      <div className="info-card">
        <FaGithub id="github-icon" />
        <div>
          <a href="https://github.com/danielmunier" target="_blank" rel="noreferrer"  className="hover-link">danielmunier</a>
        </div>
      </div>
   
      
    </section>
  );
};

export default ContactContainer;
