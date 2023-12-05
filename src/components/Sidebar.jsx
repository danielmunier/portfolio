//import React from "react";
import "../styles/components/sidebar.sass";
import profilePicture from "../images/me.jpg";
import SocialNetworks from "./SocialNetworks";
import ContactContainer from "./ContactContainer";


const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={profilePicture} alt="Me" />
        <h3>Daniel Munier</h3>
        <p className="title">Back-end Developer</p>
     
      <SocialNetworks />
      <ContactContainer/>
      <a href="" className="btn">
        Download my CV
      </a>
    </aside>
  );
};

export default Sidebar;
