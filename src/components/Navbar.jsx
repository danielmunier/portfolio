//import React from 'react'
import "../styles/components/navbar.sass";
import { Link, BrowserRouter } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  return (
    <nav>
      <h2><a href="/">Daniel Munier</a></h2>
    <div id="menu-button">
    </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><Link href="/">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
