import React from 'react'
//import Navbar from './navBar/Navbar'

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección 1 */}
      <section className="section1">
        <img src="/ruta/a/tu/imagen1.jpg" alt="Imagen 1" />
        <button className="explore-button">Explora tu vivienda</button>
      </section>

      {/* Sección 2 */}
      <section className="section2">
        <img src="/ruta/a/tu/imagen2.jpg" alt="Imagen 2" />
        <div className="text-container2">
          <p>Inmuebles extraordinarios dirigidos y supervisados por Corredores 
            Publicos matriculados, especiazados en la compra y venta de propiedades premium
          </p>
          <button className="view-properties-button">Ver Propiedades</button>
        </div>
      </section>

          {/* Sección 3 */}
          <section className="section3">
        <img src="/ruta/a/tu/imagen3.jpg" alt="Imagen 3" />
        <div className="text-container3">
            <h3>Construye tu vida con nosotros</h3>
          <p>Descubre como hacer que el proceso de alquiler sea mas sencillo que nunca.
            Nuestra plataforma te orece comodidad y simplicidad.
          </p>
          <button className="view-rentals-button">Ver alquileres</button>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="section-comments">
        <div className="comments-container">
          {/*comentarios de los clientes */}
        </div>
      </section>
    </div>
  );
};

export default Home;