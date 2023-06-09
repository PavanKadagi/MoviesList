import { useGblobalContext } from "../../Context/context";
import "./Search.css";
const Search = () => {
  const { query, setQuery, error } = useGblobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{error.show && error.msg}</p>
        </div>
      </section>
    </>
  );
};
export default Search;
