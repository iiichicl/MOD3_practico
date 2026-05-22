export default function NavBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input className="buscador"
        type="text"
        placeholder="Buscar héroe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}