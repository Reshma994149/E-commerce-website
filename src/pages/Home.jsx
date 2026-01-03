import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  let filtered = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "all" ? true : p.category === category
    );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <>
      <div className="filters">
        <input
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
