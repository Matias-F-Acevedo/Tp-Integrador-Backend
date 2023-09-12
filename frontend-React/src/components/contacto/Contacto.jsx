
import Navbar from "../navbar/Navbar";
import "./contacto.css"
import Footer from "../footer/Footer"


const FormContact = () => {
  
  return (
    <>
      <Navbar />
        <div id="divFormContacto">
          <form id="formContacto" action="https://formsubmit.co/matucagliero95@gmail.com" method="POST" className="form-register">
            <h4>Contacto</h4>
            <input  className="controls" type="text" name="nombreCompleto" id="nombreCompleto" placeholder="Ingrse su nombre completo" />
            <input  className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su email" />
            <input  className="controls" type="tel" id="phone" name="phone" placeholder='Ingrese su numero telefonico' required
              pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$" />

            <textarea className="controls" name="mensaje" id="mensaje" cols="30" rows="7" placeholder='Ingrese su mensaje (maximo 125 caracteres)' maxLength="125" required> </textarea>
            <label htmlFor="acuerdo" className="labelAcuerdo">
              <input type="checkbox" id="parOnForm" name="acuerdo" required />
              Acepto los <a href="#">Terminos y condiciones</a>
            </label>
            <input className="botons" type="submit" value="Send Message" />
          </form>
        </div>
      <Footer></Footer>
    </>
  )
}

export default FormContact