import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'
import { Link } from "react-router-dom"
import Footer from '../footer/Footer.jsx'
import CardComments from '../Card/CardComments.jsx'
import Img from '../home/smile.webp'
import Img1 from '../home/maxi_iglesias-kXKH--620x349@abc.jpeg'
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="section1">
        <div className="home-container">
          <p>Propiedades en venta y alquiler</p>
          <p>Un lugar para cada etapa de tu vida
          </p>
          <Link to={"/comprar"}><button className="explore-button">Explora tu vivienda</button></Link>
        </div>
      </section>

      <section className="section2">
        <div className="text-container">
          <div className="text-container2">
            <h2>HomeMarket</h2>
            <p>Inmuebles extraordinarios dirigidos y supervisados por Corredores
              Publicos matriculados, especiazados en la compra y venta de propiedades premium
            </p>
            <Link to={"/comprar"}><button className="view-button">Ver Propiedades</button></Link>
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
            <Link to={"/alquilar"}><button className="view-button">Ver alquileres</button></Link>
          </div>
        </div>
      </section>

      <section className="section-comments">
        <div className="section-title-comments">
          <h2 className='h2-comentarios'>Nuestra reputacion esta respaldada por nuestros clientes</h2>
          <p>Ve sus comentarios sobre nuestro servicio</p>
          <div className="comments-container">
            <CardComments stars={5} name="Sofia Peralta" bday="09/11/2022" text="Desde que ingrese me senti con una gran confianza, los agentes me brindaron mucha comodidad" img={Img} />
            <CardComments stars={5} name="Sofia Peralta" bday="09/11/2022" text="Me genera mucha confianza, compramos nuestra primera casa y todo fue asombroso, hermosa experiencia" img={Img} />
            <CardComments stars={5} name="Carlos vela" bday="12/11/2022" text="El proceso de seleccion y para mirar fue exelente, estamos muy contentos con el resultado de la compra" img={Img1} />
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="contact-banner">
          <p>
            En caso de tener alguna duda o problema
            <br />no dudes en contactarnos</p>
          <a
            href="https://wa.me/numero-de-WhatsApp"
            className="whatsapp-button"
            target="_blank" /*indica que debe abrir el enlace en una nueva ventana sin reemplazar la actual.*/
            rel="noopener noreferrer" /* Evita que la página recien abierta tenga acceso a la página de origen. Protege la privacidad del usuario.*/
          >
            Contacto</a>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Home;

