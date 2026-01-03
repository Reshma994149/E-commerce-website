import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className="card">
      <img src={product.image} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>Details</Link>
      <button onClick={() => addToCart(product)}>Add</button>
    </div>
  );
}
