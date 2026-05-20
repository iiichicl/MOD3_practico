export default function NavBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar superhéroe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}