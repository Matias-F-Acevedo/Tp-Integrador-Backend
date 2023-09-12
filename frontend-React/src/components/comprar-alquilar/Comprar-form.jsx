import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Card from './Card';
import PropiedadesXduenio from './propiedadesXdueño';
import "./comprar-form.css";
const URL = "http://localhost:3000/api/propiedad";

function ComprarForm() {
  const [propietario, setPropietario] = useState();
  const location = useLocation();
    const Id = location.state.propietarioId;
    console.log(Id)
  useEffect(() => {
    async function fetchDataUsuario() {
      try {
        if (!Id) {

          console.error('propietarioId no está definido.');
          return;
        }

        const response = await fetch(`http://localhost:3000/api/usuario/${Id}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        setPropietario(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchDataUsuario();
  }, [Id]);
  const propiedades = PropiedadesXduenio(Id)

console.log
  if (!propietario) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    <Navbar/>
          <div className='datos-vendedor-div'>
              <h2 className='titulo-h2'>Datos del Vendedor</h2>
              <div>
                  <p className="etiqueta">Nombre:</p>
                  <p className="valor">{propietario.nombre}</p>
                  <p className="etiqueta">Apellido:</p>
                  <p className="valor">{propietario.apellido}</p>
                  <p className="etiqueta">Email:</p>
                  <p className="valor">{propietario.email}</p>
              </div>
          </div>
            <h1 className='titulo-h2'>Propiedades de {propietario.nombre}</h1>
      <div className="tarjetas">
          {propiedades.map((propiedad, index) => (
              <Card propiedad={propiedad} index={index} button={false} key={index}></Card>
          ))}
        </div>
      <Footer></Footer>
      </>
      
  );
}

export default ComprarForm;



