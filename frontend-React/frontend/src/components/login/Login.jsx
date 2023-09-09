import React from 'react'
import Navbar from '../navBar/Navbar'
import "./login.css"
import { useState, useEffect, useContext } from "react"
import { UserContext} from "../../context/UserContext";
import {decodeToken}from 'react-jwt'


function Login() {

    // con useContext uso el estado global del UserContext
    const { user, handleLogin } =  useContext(UserContext);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const urlUserRegistered = "http://localhost:3000/api/auth/login"
    

    async function verificarUsuario(email, contraseña) {
        const res = await fetch(urlUserRegistered, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, contraseña: contraseña }),
        });

        if (!res.ok) return false;

        const parsed = await res.json()
        return parsed
    }



    // useEffect(() => {
    //     verificarUsuario(email, password)
    // }, []);


    async function handleSubmit(event) {
        event.preventDefault();

        if (email === "" || password === "") {
            setError("Enter all fields");
            return
        } else {

            const respuesta = await verificarUsuario(email, password)

            if (!respuesta) {
                setError("The password or Email you have entered is incorrect.");
            } else {
                handleLogin({...decodeToken(respuesta.data.access_token), jwt:respuesta.data.access_token});
                setError("Successfully logged in");
                setPassword("")
            }
        }
    }



    return (
        <>
            <Navbar />

            {user ?
                <div className='container-general-welcome'>
                    <div className="container-login-welcome">
                        <h1 className="login-welcome">Welcome</h1>
                        <h2></h2>


                    </div>
                    <div className="img-pet-welcome">
                        <img src="" alt="imagen bienvenida" />
                    </div>
                </div>
                :
                <div className="container-login">
                    <div className="login">
                        <h1 className="title-login">Iniciar sesión</h1>
                        <p className="p-error">{error}</p>
                        <form onSubmit={handleSubmit} className="form-login">
                            <input type="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} />
                            <input type="password" value={password} placeholder="Contraseña" onChange={event => setPassword(event.target.value)} />
                            <button type="submit">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}




export default Login