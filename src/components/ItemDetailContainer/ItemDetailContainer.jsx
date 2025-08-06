import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "./ItemDetail";
import Loader from "../common/Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = products.find((prod) => prod.id === Number(id));
        resolve(foundItem);
      }, 1000);
    });

    getItem
      .then((res) => setItem(res))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? <Loader /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;