import Logo from "../../../public/homeMarket.jpg";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {Link} from "react-router-dom";
import "./footer.css";

export default function Footer () {
    return(
        <footer>
        <section className="secction-footer">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo-footer" />
            <p>Alsina 1152, Buenos Aires</p>
            <p>Savedra 1555, Cordoba</p>
          </div>
          <div className="logo-container">
            <h4>Encontrá mas propiedades</h4>
            <span><Link to="/comprar">Comprar</Link></span>
            <span><Link to="/alquilar">Alquilar</Link></span>
            <span><Link to="/vender">Vender</Link></span>
            <span><Link to="/oficinas">Oficinas</Link></span>
            <span><Link to="/contratar">Contratar</Link></span>
          </div>
          <div className="logo-container">
            <h4>Nosotros</h4>
            <span><Link to="/blog">Blog</Link></span>
            <span><Link to="/noticias">Noticias</Link></span>
            <span><Link to="/sobre">Sobre</Link></span>
            <span><Link to="/contacto">Contacto</Link></span>
          </div>
          <div className="icons-container">
            <a className="box-icons">
              <FaTwitter className="footer-icons" size={18} />
            </a>
            <a className="box-icons">
              <RiInstagramFill className="footer-icons" size={18} />
            </a>
            <a className="box-icons">
              <FaLinkedin className="footer-icons" size={18} />
            </a>
          </div>
        </section>
        <hr />
        <div className="terms-container">
          <ul>
            <li>Remax Argentina - Propiedades</li>
            <li>Todos los derechos reservados</li>
            <li>2023 Remax</li>
          </ul>
          <ul className="terms-links">
            <li>Términos y Condiciones</li>
            <li>Normas de Confidencialidad y Privacidad</li>
            <li>Normativa alquiler temporario turistico</li>
          </ul>
        </div>
      </footer>
    )
}

