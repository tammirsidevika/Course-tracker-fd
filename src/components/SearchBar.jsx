import "./SearchBar.css";
const API_URL = "https://course-tracker-bd.onrender.com";
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search Course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;
