import React, { useState, useEffect } from 'react';
import "./alquiler.css"
import Navbar from '../navBar/Navbar';
const URL = "http://localhost:3000/api/propiedad";

function Alquilar() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const propiedadesEnAlquiler = data.filter((propiedad) => propiedad.estado_de_propiedad === "En alquiler");
        setPropiedades(propiedadesEnAlquiler);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div>
      <div className="tarjetas">
        {propiedades.map((propiedad, index) => (
          <div key={index} className="tarjeta">
            <h2>{propiedad.nombre}</h2>
            <p>Dirección: {propiedad.direccion}</p>
            <p>Precio: {propiedad.precio}</p>
            <p>Ubicación: {propiedad.ubicacion}</p>
            <p>Superficie Total: {propiedad.superficieTotal}</p>
            <p>Superficie Cubierta: {propiedad.superficieCubierta}</p>
            <p>Ambientes: {propiedad.ambientes}</p>
            <p>Tipo de Propiedad: {propiedad.tipo_de_propiedad}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Alquilar;
