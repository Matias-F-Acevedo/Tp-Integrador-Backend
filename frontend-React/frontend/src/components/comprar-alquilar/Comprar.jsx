import React, { useState, useEffect } from 'react';
import "./comprar.css"
import Navbar from '../navBar/Navbar';
import { Link } from 'react-router-dom';
import Searcher from '../navBar/searcher';

const URL = "http://localhost:3000/api/propiedad";
function Comprar() {
  const [propiedades, setPropiedades] = useState([]);
  const [propiedadesEnVenta, setPropiedadesEnVenta] = useState([]);

  const handleSearch = (term) => {
    // Filtra las propiedades según el término de búsqueda (ubicación).
    const filteredPropiedades = propiedadesEnVenta.filter((propiedad) =>
      propiedad.ubicacion.toLowerCase().includes(term.toLowerCase())
    );
    setPropiedades(filteredPropiedades);
  };

  useEffect(() => {
    const fetchDataPropiedades = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const propiedadesEnVenta = data.filter(
          (propiedad) => propiedad.estado_de_propiedad === 'En venta'
        );
        setPropiedadesEnVenta(propiedadesEnVenta);
        setPropiedades(propiedadesEnVenta); // Inicialmente, muestra todas las propiedades en venta.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchDataPropiedades();
  }, []);

  return (
    <>
    <Navbar componentAdditional={<Searcher onSearch={handleSearch} />} />
    <div className='contenedor-principal'>
      <div className="tarjetas">
        {propiedades.map((propiedad, index) => (
          <div key={index} className="tarjeta">
          <div className='div-imagen'>
            <img className='imagen' src="https://imgar.zonapropcdn.com/avisos/1/00/51/43/07/00/720x532/1861159092.jpg" alt="" />
          </div>
          <section className='seccion-estado-ubicacion'>
          <p>{propiedad.estado_de_propiedad} en {propiedad.ubicacion}</p>
          </section>
          <p className='precio'>US$ {propiedad.precio}</p>
          <section>
          <article className='seccion-superficie'>{propiedad.superficieTotal} <span className='especificacion-m2'>m2 totales</span></article>
          <article className='seccion-superficie'>{propiedad.superficieCubierta} <span className='especificacion-m2'>m2 cubiertos</span></article>
          </section>
          <section >
          <p className='seccion-ambientes-tipo'>{propiedad.ambientes} <span className='especificacion-m2'>ambientes</span></p>
          <p className='seccion-ambientes-tipo'><span className='especificacion-m2'>Tipo:</span > {propiedad.tipo_de_propiedad}</p>
          </section>
              <Link>
                <button>Datos del vendedor</button>
              </Link>
        </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Comprar;
