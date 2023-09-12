import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Searcher from '../navBar/Searcher';
import "./comprar.css"
import Card from './Card';
import Footer from '../footer/Footer';
const URL = "http://localhost:3000/api/propiedad";



function Alquilar() {
  const [propiedades, setPropiedades] = useState([]);
  const [propiedadesEnAlquiler, setPropiedadesEnAlquiler] = useState([]);

  const handleSearch = (term) => {
    // Filtra las propiedades según el término de búsqueda (ubicación).
    const filteredPropiedades = propiedadesEnAlquiler.filter((propiedad) =>
      propiedad.ubicacion.toLowerCase().includes(term.toLowerCase())
    );
    setPropiedades(filteredPropiedades);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const propiedadesEnAlquiler = data.filter(
          (propiedad) => propiedad.estado_de_propiedad === 'En alquiler'
        );
        setPropiedadesEnAlquiler(propiedadesEnAlquiler);
        setPropiedades(propiedadesEnAlquiler); // Inicialmente, muestra todas las propiedades en venta.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
    <Navbar componentAdditional={<Searcher onSearch={handleSearch} />} />
    <div className='contenedor-principal'>
      <div className="tarjetas">
        {propiedades.map((propiedad, index) => (

         <Card propiedad={propiedad} index={index} key={index} button={true}></Card>
      
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Alquilar;
