import React from 'react'
import Navbar from '../navBar/Navbar'
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../context/UserContext';
import "./misPropiedades.css"
import Footer from '../footer/Footer';
import Card from '../comprar-alquilar/Card';
import CardUpdate from './CardUpdate';
import { deleteOne } from '../../service/functionsHTTP';
import CardCreate from './CardCreate';
import Swal from "sweetalert2";

const urlBase = "http://localhost:3000/api/propiedad"

function MisPropiedades() {

    const { user } = useContext(UserContext);
    const [propiedades, setPropiedades] = useState([])
    const [actualizar, setActualizar] = useState(false)
    const [crear, setCrear] = useState(false)
    const [propiedadActual, setPropiedadActual] = useState()
    const [estado, setEstado] = useState("")
    const [refresh, setRefresh] = useState(false)

    

    async function getPropiedades() {

        if (user) {
            const res = await fetch(`http://localhost:3000/api/propiedad?dueño=${user.sub}`)

            if (!res.ok) {
                setEstado("No hay propiedades registradas")
                setPropiedades([])
                return
            }

            const parsed = await res.json();
            setPropiedades(parsed);
            setRefresh(false)
        }
    }

    useEffect(() => {
        getPropiedades();
    }, [refresh]);



    async function eliminarPropiedad(idPropiedad) {
        const response = await Swal.fire(
            {
                icon: "question",
                title: "Estas seguro de que quieres eliminar esta Tarjeta?",
                showDenyButton: true,
                denyButtonText: "CANCEL",
                confirmButtonText: "Eliminar",
                confirmButtonColor: "green",
                iconColor: "#2995C2",
            }
        )

        if (response.isConfirmed) {
            deleteOne(idPropiedad, urlBase, user.jwt)
            setRefresh(true)
            Swal.fire(
                {
                    icon: "success",
                    title: "La tarjeta ha sido eliminado con exito",
                    confirmButtonColor: "#2995C2",
                    iconColor: "#2995C2",
                })
        } else if (response.isDenied) {
            Swal.fire(
                {
                    icon: "info",
                    title: "La tarjeta no ha sido eliminada",
                    confirmButtonColor: "#2995C2",
                    iconColor: "#2995C2",
                })
        } else {
        }
    }


    function selectPropiedad(propiedad) {
        setActualizar(true)
        setPropiedadActual(propiedad)
    }



    return <>
        <Navbar ></Navbar>

        {user && propiedades.length >= 0 ?
            <div>

                <div className='container-btn-crear'>
                    <button className='btn-crear' onClick={() => setCrear(true)}>Crear Propiedad</button>
                </div>

                {
                    propiedades.length == 0 && crear == false?
                    <h1 className='no-hay-propiedades'>{estado}</h1>
                    :<></>
                }

                {

                    crear ?
                        <div className='container-cards'>
                            <CardCreate setrefresh={setRefresh} setcrear={setCrear}></CardCreate>
                        </div>

                        :
                        <div className='container-cards'>

                            {
                                actualizar ?
                                    <CardUpdate setrefresh={setRefresh} propiedad={propiedadActual} setActualizar={setActualizar}></CardUpdate>
                                    :

                                    propiedades.map((propiedad, index) =>

                                        <div key={index}>
                                            <Card propiedad={propiedad} index={index} button={false}  ></Card>

                                            <div className='div-botones'>
                                                <button className='btn-eliminar' onClick={() => eliminarPropiedad(propiedad.id)}>Eliminar</button>
                                                <button className='btn-actualizar' onClick={() => selectPropiedad(propiedad)}>Actualizar</button>
                                            </div>
                                        </div>
                                    )




                            }



                        </div>
                }


            </div>

            : <h1 className='no-hay-propiedades'>{estado}</h1>
        }
        <Footer></Footer>
    </>




}



export default MisPropiedades