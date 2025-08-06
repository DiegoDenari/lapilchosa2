import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    const filteredProducts = categoryId
      ? products.filter((prod) => prod.category === categoryId)
      : products;
    setItems(filteredProducts);
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;