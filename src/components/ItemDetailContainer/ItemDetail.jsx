import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { toast } from 'react-toastify';

const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
  addItem(item, quantity);
  toast.success(`${quantity} ${item.name} agregado(s) al carrito!`);
  };

  return (
    <div className="detail-container">
      <img src={item.image} alt={item.name} />
      <div className="detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Precio: ${item.price.toLocaleString()}</p>
        <p>Stock: {item.stock}</p>

        {quantityAdded > 0 ? (
          <Link to="/cart" className="finish-buy">
            Terminar compra
          </Link>
        ) : (
          <ItemCount stock={item.stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;