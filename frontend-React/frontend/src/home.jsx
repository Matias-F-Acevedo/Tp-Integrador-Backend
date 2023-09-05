// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <Link to="/comprar">
        <button>Ver propiedades en venta</button>
      </Link>
      <Link to="/alquilar">
        <button>Ver propiedades en alquiler</button>
      </Link>
    </div>
  );
};

export default Home;
