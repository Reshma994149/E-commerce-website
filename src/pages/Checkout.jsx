import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill all details");
      return;
    }

    alert("✅ Order placed successfully!");

    setForm({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Delivery Address"
          rows="4"
          value={form.address}
          onChange={handleChange}
        />

        {/* Button always at bottom */}
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}
