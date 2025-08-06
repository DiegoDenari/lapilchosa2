import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;