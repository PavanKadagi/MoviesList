import { useContext } from "react";
import { useGblobalContext } from "../../Context/context";
import MoviesList from "../Movies/MoviesList";
// import { MovieContext } from "../../Context/context";
import Search from "../Search/Search";
const Home = () => {
  // const name = useGblobalContext();
  return (
    <>
      <Search />
      <MoviesList />
    </>
  );
};
export default Home;
