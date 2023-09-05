import "./navBar.css"

import React from 'react'
import { Link } from "react-router-dom"
import { useContext, useRef, useState } from "react";





function Navbar() {

    // const { user, handleLogout } = useContext(true);
    const [user, setUser] = useState(true);

    const responsiveMenu = useRef();


    function openNav() {
        responsiveMenu.current.style.width = "100%"
    }

    function closeNav() {
        responsiveMenu.current.style.width = "0%"
    }



    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}> <img src="src/components/navBar/logo_fondo.jpg" alt="Logo" /></Link>
            </div>
            <nav className="nav">

                <ul className="nav-links">

                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/comprar"}>Comprar</Link></li>
                    <li><Link to={"/alquilar"}>Alquilar</Link></li>
                    <li><Link to={"/vender"}>Vender</Link></li>
                    <li><Link to={"/contacto"}>Contacto</Link></li>

                </ul>

            </nav>

            {user ?
                <button onClick={() => setUser(false)} className="btn btnCloseSession">Cerrar sesión</button>
                :
                <Link to={"/login"} className="btn"><button>Iniciar sesión</button></Link>
            }

            <button onClick={openNav} className="menu">Menu</button>


            <div ref={responsiveMenu} className="overlay" id="responsive-menu">
                <button onClick={closeNav} className="close">x</button>
                <div className="overlay-content">

                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/comprar"}>Comprar</Link></li>
                    <li><Link to={"/alquilar"}>Alquilar</Link></li>
                    <li><Link to={"/vender"}>Vender</Link></li>
                    <li><Link to={"/contacto"}>Contacto</Link></li>

                    {user ?
                        <button onClick={() => setUser(false)} className="btnCloseSession">Cerrar sesión</button>
                        :
                        <Link to={"/login"} className="btn"><button id="btn-login-menu">Iniciar sesión</button></Link>}

                </div>
            </div>
        </header>
    )
}



export default Navbar