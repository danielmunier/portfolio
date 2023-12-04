import "../styles/components/socialnetworks.sass";

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { IoMail } from "react-icons/io5";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin/>},
  { name: "github", icon: <FaGithub/>},
  { name: "gmail", icon: <IoMail/>},
];

const SocialNetworks = () => {
  return (
    <sections id="social-networks">
      {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </sections>
  );
};

export default SocialNetworks;
