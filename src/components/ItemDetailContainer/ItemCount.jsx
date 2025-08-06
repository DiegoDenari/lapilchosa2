import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="item-count">
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button 
        onClick={() => onAdd(quantity)} 
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;