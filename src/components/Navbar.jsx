import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="navbar">
      <h2>E-Commerce</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
      </div>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
