import React from "react";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import ImagenPrincipal from '../images/ImagenPrincipal.jpeg';

const Navbar =() =>{

    return(
        <nav className= 'flex items-center bg-indigo-600'>
                <img className= 'mx-4 h-16 rounded-tl-full my-1.5' src= {ImagenPrincipal}  />
                <ul className= 'flex'>
                    <li className= 'LinkNavegacion'><Link to = '/'> Perfil </Link></li>
                    <li className= 'LinkNavegacion' ><Link to = '/contacto'> Contacto </Link></li>
                    <li className= 'LinkNavegacion' ><Link to = '/perfil'>  Info </Link></li>
                </ul>

        </nav>

    )
}

export default Navbar;