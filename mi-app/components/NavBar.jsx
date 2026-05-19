export default function NavBar() {
  return (
    <nav>
      <input
        type="text"
        placeholder="Buscar héroe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
    </nav>
  );
}