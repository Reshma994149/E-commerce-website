export default function FilterBar({ setSort, setCategory }) {
  return (
    <div className="filters">
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort Products</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
      </select>
    </div>
  );
}
