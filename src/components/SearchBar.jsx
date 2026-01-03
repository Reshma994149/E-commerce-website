export default function SearchBar({ setSearch }) {
  return (
    <div className="search-bar">
      <input
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
