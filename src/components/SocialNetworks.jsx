import "../styles/components/socialnetworks.sass";

import { FaGithub, FaLinkedin, FaInstagram, FaDirections } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



const SocialNetworks = ({flexDirection, color}) => {

  const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin color={color} />, href:"https://www.linkedin.com/in/danielmunier27/"},
    { name: "github", icon: <FaGithub color={color} />, href: "https://github.com/danielmunier" },
    { name: "gmail", icon: <IoMail color={color} />, href: "mailto:idanielmunier@gmail.com" },
    { name: "instagram", icon: <FaInstagram color={color} />, href: "https://instagram.com/" },
  ];

  const containerClass = `social-networks ${flexDirection}`;

  return (
    <div className="social-media">
      <ul class={containerClass}>
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
