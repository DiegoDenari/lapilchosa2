import { Link } from "react-router-dom";
import "./ItemList.css";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price.toLocaleString()}</p>
      <Link to={`/item/${item.id}`} className="detail-button">
        Ver detalles
      </Link>
    </div>
  );
};

export default Item;