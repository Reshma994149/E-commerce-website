import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
