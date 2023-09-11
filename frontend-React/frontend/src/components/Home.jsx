import React from 'react'
import Navbar from './navBar/Navbar.jsx'
import './home/Home.css'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <>
    <Navbar></Navbar> 
      <section className="section1">
      <div className="home-container">
          <p>Propiedades en venta y alquiler</p>
          <p>Un lugar para cada etapa de tu vida 
          </p>
        <button className="explore-button">Explora tu vivienda</button>
        </div>
      </section>

      <section className="section2">
        <div className="text-container">
          <div className="text-container2">
            <h2>HomeMarket</h2>
          <p>Inmuebles extraordinarios dirigidos y supervisados por Corredores 
            Publicos matriculados, especiazados en la compra y venta de propiedades premium
          </p>        
          <button className="view-button">Ver Propiedades</button>
          </div>
          <img src="src/components/home/Rectangle-5.svg" alt="Propiedad" />
        </div>
      </section>

          <section className="section3">
        <div className="text-container">
        <img src="src/components/home/Rectangle-4.svg" alt="Propiedad" />
        <div className="text-container2">
          <h2>Construye tu vida con nosotros</h2>
          <p>Descubre como hacer que el proceso de alquiler sea mas sencillo que nunca.
            Nuestra plataforma te orece comodidad y simplicidad.
          </p>
          <button className="view-button">Ver alquileres</button>
        </div>
        </div>
      </section>

      <section className="section-comments">
        <div className="section-title-comments">
        <h2>Nuestra reputacion esta respaldada por nuestros clientes</h2>
        <p>Ve sus comentarios sobre nuestro servicio</p>
        <div className="comments-container">
          {/*comentarios de los clientes */}
          </div>
        </div>
      </section>
   
       <section className="section5">
       <div className="contact-banner">
        <p>
          En caso de tener alguna duda o problema 
          <br/>no dudes en contactarnos</p>
          <a
            href="https://wa.me/numero-de-WhatsApp"
            className="whatsapp-button"
            target="_blank" /*indica que debe abrir el enlace en una nueva ventana sin reemplazar la actual.*/
            rel="noopener noreferrer" /* Evita que la página recien abierta tenga acceso a la página de origen. Protege la privacidad del usuario.*/
            >
            Contacto</a>
      </div>
    </section>
    <Footer/>  
    </>
  );
};

export default Home;

