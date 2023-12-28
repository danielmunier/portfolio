import "../styles/components/socialnetworks.sass";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin />, href:"https://www.linkedin.com/in/danielmunier27/"},
  { name: "github", icon: <FaGithub />, href: "https://github.com/danielmunier" },
  { name: "gmail", icon: <IoMail />, href: "mailto:idanielmunier@gmail.com" },
  { name: "instagram", icon: <FaInstagram />, href: "https://instagram.com/" },
];

const SocialNetworks = () => {
  return (
    <div className="social-media">
      <ul id="social-networks">
        {socialNetworks.map((network) => (
          <a
            target="_blank"
            href={network.href}
            className="social-btn"
            id={network.name}
            key={network.name}
          >
            {network.icon}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SocialNetworks;
