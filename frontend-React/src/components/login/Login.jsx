import React from 'react'
import Navbar from '../navBar/Navbar'
import "./login.css"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext";
import { decodeToken } from 'react-jwt'
import { Navigate } from "react-router-dom";
import Footer from '../footer/Footer';

function Login() {

    // con useContext uso el estado global del UserContext
    const { user, handleLogin } = useContext(UserContext);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [error, setError] = useState("");


    const [crearUsuario, setCrearUsuario] = useState(false);

    const urlLogin = "http://localhost:3000/api/auth/login"

    const urlUsuarios = "http://localhost:3000/api/usuario"

    async function verificarUsuario(email, contraseña) {
        const res = await fetch(urlLogin, {
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

    const [refrech, setRefreach] = useState(false)

    // useEffect(() => {

    // }, [nombre]);


    async function handleSubmit(event) {
        event.preventDefault();

        if (email === "" || password === "") {
            setError("Enter all fields");
            return
        } else {

            const respuesta = await verificarUsuario(email, password)

            if (!respuesta) {
                setError("La Contraseña o Email son incorrectos");
            } else {
                handleLogin({ ...decodeToken(respuesta.data.access_token), jwt: respuesta.data.access_token });
                setError("Inicio de sesión exitoso");
                setPassword("")
            }
        }
    }



    function cambiarSeccion() {
        setRefreach(true)
    }

    async function registrarUsuario(event) {
        event.preventDefault();

        if (email === "" || password === "" || nombre === "" || apellido === "") {
            setError("Ingrese todos los campos");
            return
        } else {
            const newUser = {
                "nombre": nombre,
                "apellido": apellido,
                "email": email,
                "contraseña": password

            }


            const res = await fetch(urlUsuarios, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })

            if (!res.ok) {
                setError("Este email ya está registrado");
                console.log(await res.json());
                return
            }
            const parsed = await res.json()
            console.log(parsed);
            setError("Se ha registrado con éxito");
            setApellido("")
            setEmail("")
            setNombre("")
            setPassword("")
            setTimeout(() => {
                setCrearUsuario(false)
                setError("")
                setEmail(newUser.email)
            }, 2000)
            

        }


    }



    return (
        <>
            <Navbar />
            {
                refrech ?
                    <Navigate to={"/mis-propiedades"}></Navigate>
                    :
                    <></>
            }

            {user ?
                <>

                    {setTimeout(() => {
                        cambiarSeccion()
                    }, 2000)}

                    <div className='container-general-welcome'>
                        <div className="container-login-welcome">
                            <h1 className="login-welcome">¡¡Bienvenido {user.nombre.toUpperCase()}!! :D</h1>
                            <h2></h2>
                        </div>
                    </div>
                </>
                :
                <>
                    {crearUsuario ?

                        <div className="container-login">
                            <div className="registro">
                                <h1 className="title-login">Registrarse</h1>
                                <p className="p-error">{error}</p>

                                <form onSubmit={registrarUsuario} className="form-login">

                                    <input type="text" value={nombre} placeholder="Nombre" onChange={event => setNombre(event.target.value)} minLength={4} maxLength={15} required />

                                    <input type="text" value={apellido} placeholder="Apellido" onChange={event => setApellido(event.target.value)} minLength={4} maxLength={15} required />


                                    <input type="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} required />

                                    <input type="password" value={password} placeholder="Contraseña" onChange={event => setPassword(event.target.value)} minLength={5} maxLength={15} required />

                                    <button className='btn-form-login' type="submit">Registrarse</button>
                                </form>

                                <div className='container-btn-registrarse'>
                                    <button className='btn-registrarse' onClick={() => setCrearUsuario(false)}>Iniciar sesión</button>
                                </div>

                            </div>
                        </div>
                        :

                        <div className="container-login">
                            <div className="login">
                                <h1 className="title-login">Iniciar sesión</h1>
                                <p className="p-error">{error}</p>
                                <form onSubmit={handleSubmit} className="form-login">
                                    <input type="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} required />
                                    <input type="password" value={password} placeholder="Contraseña" onChange={event => setPassword(event.target.value)} required />
                                    <button className='btn-form-login' type="submit">Iniciar sesión</button>
                                </form>
                                <div className='container-btn-registrarse'>
                                    <button className='btn-registrarse' onClick={() => setCrearUsuario(true)}>Registrarse</button>
                                </div>

                            </div>
                        </div>
                    }
                </>
            }
            <Footer></Footer>
        </>
    )
}




export default Login