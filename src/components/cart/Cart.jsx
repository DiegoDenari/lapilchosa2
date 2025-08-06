import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, total, totalQuantity } = useCart();

  if (totalQuantity === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="keep-shopping-btn">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toLocaleString()}</h3>
        <button onClick={clearCart} className="clear-btn">Vaciar carrito</button>
        <Link to="/checkout" className="checkout-btn">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;