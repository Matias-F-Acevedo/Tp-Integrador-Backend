import React, { useState, useEffect } from 'react';
import "./comprar.css"
const URL = "http://localhost:3000/api/propiedad";

function ComprarPropiedad() {
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
        const propiedadesEnVenta = data.filter((propiedad) => propiedad.estado_de_propiedad === "En venta");
        setPropiedades(propiedadesEnVenta);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
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
  );
}

export default ComprarPropiedad;
