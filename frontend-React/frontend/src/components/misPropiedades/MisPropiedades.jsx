import React from 'react'
import Navbar from '../navBar/Navbar'
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../context/UserContext';
import "./misPropiedades.css"
const urlBase = "http://localhost:3000/api/propiedad";




function MisPropiedades() {



    const { user } = useContext(UserContext);
    const [propiedades, setPropiedades] = useState([])


    // useEffect(() => {
    //   fetch(urlBase, {
    //         headers: {
    //             Authorization: `Bearer ${user.jwt}`
    //         }
    //     }).then((res) => {
    //         if (!res.ok) throw new Error("Request Error");
    //         const respuesta = res.json();
    //         setPropiedades(respuesta)
            
    //     })
        
    // }, []);

    // , {
    //     headers: {
    //         Authorization: `Bearer ${user.jwt}`
    //     }
    // }

    // async function hola(){
    //     const res = await fetch(urlBase)
    //     const respuesta = await res.json()
    //     // setPropiedades(respuesta)
    //     setPropiedades(respuesta.filter((propi)=> propi.dueño ===  user.sub))

    // }

    useEffect(() => {
       fetch(urlBase).then((res)=> res.json()).then((resOk)=> setPropiedades(resOk.filter((propi)=> propi.dueño ===  user.sub)))
    }, [user]);


   










    return <>
        <Navbar></Navbar>

        {user ?
        <div>
        <h1>Propiedades del Usuario: {user.nombre} {user.apellido}</h1>
        <div className='container-cards'>
            {
            propiedades.map((propiedad) =>

            <div key={propiedad.id} className='card-propiedad'>
                <p>{propiedad.id}</p>
                <p>{propiedad.dueño}</p>
                <p>{propiedad.precio}</p>
                <p>{propiedad.ubicacion}</p>
                <p>{propiedad.superficieTotal}</p>
                <p>{propiedad.superficieCubierta}</p>
                <p>{propiedad.ambientes}</p>
                <p>{propiedad.tipo_de_propiedad}</p>
                <p>{propiedad.estado_de_propiedad}</p>
            </div>
            )
            }
            </div>
           
        </div>
        
            : <h1>hla</h1>
        }
    </>




}



export default MisPropiedades