import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    
    const newOrderId = `ORD-${Date.now()}`;
    
    
    const order = {
      id: newOrderId,
      buyer,
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    
    localStorage.setItem("lastOrder", JSON.stringify(order));
    
    
    clearCart();
    setOrderId(newOrderId);
  };

  
  if (orderId) {
    return (
      <div className="order-confirmation">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <div className="order-actions">
          <button onClick={() => navigate("/")}>Seguir comprando</button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={(e) => setBuyer({...buyer, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({...buyer, email: e.target.value})}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={(e) => setBuyer({...buyer, phone: e.target.value})}
          required
        />
        <button type="submit" className="submit-btn">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;