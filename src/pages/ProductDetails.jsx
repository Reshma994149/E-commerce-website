import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartStore } from "../store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const addToCart = useCartStore((s) => s.addToCart);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, []);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
