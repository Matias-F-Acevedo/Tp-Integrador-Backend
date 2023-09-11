import React, { useState, useEffect } from 'react';
import "./comprar.css"
import Navbar from '../navBar/Navbar';
import Searcher from '../navBar/Searcher';
import Card from './Card';
import Footer from '../footer/Footer';

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
              <Card propiedad={propiedad} index={index} button={true} key={index}></Card>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Comprar;
