import React from 'react'
import Navbar from './navBar/Navbar.jsx'
import './Home.css'

// function Home() {
    
//     return
//     
//  
 
//     </>

// }

const Home = () => {
  return (
    <>
    <Navbar></Navbar> 
    <h1>Bienvenidos a HomeMarket</h1>
    
      {/* Sección 1 */}
      <section className="section1">
      <div className="home-container">
          <p>Propiedades en venta y alquiler
            Un lugar para cada etapa de tu vida 
          </p>
        <button className="explore-button">Explora tu vivienda</button>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="section2">
        <div className="text-container">
          <div className="text-container2">
            <h2>HomeMarket</h2>
          <p>Inmuebles extraordinarios dirigidos y supervisados por Corredores 
            Publicos matriculados, especiazados en la compra y venta de propiedades premium
          </p>        
          <button className="view-properties-button">Ver Propiedades</button>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gMCf4bqtmm22blM23FcY-k8BigHn_3fmGQ&usqp=CAU" alt="Propiedad" />
        </div>
       
      </section>

          {/* Sección 3 */}
          <section className="section3">
        <div className="text-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSdeRpTmUdNB8Sl44R4nUFOwq9KDKO5uGwompmvkQfLtHLzs8ncZukMolegRSrbdbf0Q&usqp=CAU" alt="Propiedad" />
        <div className="text-container2">
          <h3>Construye tu vida con nosotros</h3>
          <p>Descubre como hacer que el proceso de alquiler sea mas sencillo que nunca.
            Nuestra plataforma te orece comodidad y simplicidad.
          </p>
          <button className="view-rentals-button">Ver alquileres</button>
        </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="section-comments">
        <div className="comments-container">
          {/*comentarios de los clientes */}
        </div>
      </section>
   

       {/* Sección 5 */}
       <section className="section5">
       <div className="contact-banner">
        <p>
          En caso de tener alguna duda o problema no dudes en contactarnos{' '}
          <a
            href="https://wa.me/numero-de-WhatsApp"
            className="whatsapp-button"
            target="_blank" /*indica que debe abrir el enlace en una nueva ventana sin reemplazar la actual.*/
            rel="noopener noreferrer" /* Evita que la página recien abierta tenga acceso a la página de origen. Protege la privacidad del usuario.*/
          >
            Contáctenos
          </a>
          .
        </p>
      </div>
    </section>
    </>

  );
};

export default Home;

