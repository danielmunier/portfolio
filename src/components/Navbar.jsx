//import React from 'react'
import "../styles/components/navbar.sass";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Daniel Munier</h2>

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
