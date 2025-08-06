import { useCart } from "../../context/CartContext";
import "./Cart.css";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width={80} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>${item.price.toLocaleString()} x {item.quantity}</p>
        <p>Subtotal: ${(item.price * item.quantity).toLocaleString()}</p>
      </div>
      <button onClick={() => removeItem(item.id)}>🗑️</button>
    </div>
  );
};

export default CartItem;