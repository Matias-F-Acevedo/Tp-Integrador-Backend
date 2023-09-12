import React, { useState, useEffect } from 'react';
import "./comprar.css"
import Navbar from '../navbar/Navbar';
import Searcher from '../navBar/Searcher';
import Card from './Card';
import Footer from '../footer/Footer';

const URL = "http://localhost:3000/api/propiedad";
function PropiedadesXduenio(dueño) {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const fetchDataPropiedades = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const propiedadesDuenio = data.filter(
          (propiedad) => propiedad.dueño === dueño
        );
        setPropiedades(propiedadesDuenio);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataPropiedades();
  }, []);

  return propiedades
}

export default PropiedadesXduenio;