import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Lapilchosa</h3>
        <p>Tu tienda de moda favorita</p>
      </div>

      <div className="footer-section">
        <h4>Categorías</h4>
        <ul>
          <li><Link to="/category/remeras">Remeras</Link></li>
          <li><Link to="/category/buzos">Buzos</Link></li>
          <li><Link to="/category/pantalones">Pantalones</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contacto</h4>
        <ul>
          <li>Email: info@lapilchosa.com</li>
          <li>Teléfono: +54 11 1234-5678</li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Lapilchosa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;