import "./navBar.css"

import React from 'react'
import { Link } from "react-router-dom"
import { useContext,useRef, useState } from "react";





function Navbar() {
    
    // const { user, handleLogout } = useContext(true);
    const [user, setUser] = useState(true);

    const responsiveMenu = useRef();


    function openNav() {
        responsiveMenu.current.style.width="100%"
    }

    function closeNav() {
        responsiveMenu.current.style.width="0%"
    }



    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}> <img src="" alt="Logo" /></Link>
            </div>
            <div className="componentAdditional">
                {/* {componentAdditional} */}

            </div>
            <nav className="nav">

                <ul className="nav-links">

                    <li><Link to={"/"}>About us</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>

                </ul>

            </nav>

            {user ?
                <button onClick={()=> setUser(false)} className="btn btnCloseSession">Logout</button>
                :
                <Link to={"/"} className="btn"><button>Login</button></Link>
            }

            <button onClick={openNav} className="menu">Menu</button>


            <div ref={responsiveMenu} className="overlay" id="responsive-menu">
                <button onClick={closeNav} className="close">x</button>
                <div className="overlay-content">
                    <Link to={"/"}>About us</Link>
                    <Link to={"/"}>Contact</Link>
                    {user ?
                        <button onClick={()=> setUser(false)} className="btnCloseSession">Logout</button>
                        :
                        <Link to={"/"} className="btn"><button>Login</button></Link>}

                </div>
            </div>
        </header>
    )
}



export default Navbar