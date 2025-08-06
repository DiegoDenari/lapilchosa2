import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img 
          src="./public/lapilchosa.png"
          alt="Logo Lapilchosa" 
          className="navbar-logo"
        />
      </Link>
      <div className="navbar-categories">
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/buzos">Buzos</Link>
        <Link to="/category/pantalones">Pantalones</Link>
      </div>
      <Link to="/cart" className="cart-link">🛒</Link>
    </nav>
  );
};

export default Navbar;