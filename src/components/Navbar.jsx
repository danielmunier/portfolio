//import React from 'react'
import '../styles/components/navbar.sass'
import {Link} from "react-router-dom";


const Navbar = () => {
    return <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/form">Message now</Link></li>

        </ul>
    </nav>
}


export default Navbar