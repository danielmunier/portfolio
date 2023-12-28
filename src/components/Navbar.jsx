//import React from 'react'
import "../styles/components/navbar.sass";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Daniel Munier</h2>

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
