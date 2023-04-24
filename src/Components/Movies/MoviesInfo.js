import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
// import { useGblobalContext } from "../../Context/context";
import { movieURL } from "../../Context/context";
import "./MoviesInfo.css";
import { FaCalendarDay, FaLanguage } from "react-icons/fa";

const MoviesInfo = () => {
  const { name } = useParams();
  // const name1 = useGblobalContext();
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // console.log(name, movie);

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      let data = await fetch(url);
      data = await data.json();
      if (data.Response === "True") {
        setMovie(data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("movie", movie, "isloading", isLoading);
  // useEffect(() => {
  //   let timerOut = setTimeout(() => {
  //     getMovies(`${movieURL}&t=${name}`);
  //   }, 800);

  //   return () => clearTimeout(timerOut);
  // }, [name]);

  useEffect(() => {
    // debouncing
    let timerOut = setTimeout(() => {
      getMovies(`${movieURL}&t=${name}`);
    }, 500);
    return () => clearTimeout(timerOut);
    // document.title = movie.Title;
  }, [name]);

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="container-fluid  movie-info">
      <h1 className="ms-lg-5 ms-md-4">{movie.Title}</h1>
      <hr />

      <div className="row">
        <div className="col-lg-12 mb-lg-5  col-sm-6 order-lg-1 order-2 movie-info-list">
          <div className="movie-info-list-1 ">
            <FaCalendarDay
              style={{ color: "var(--border-color)", marginRight: "0.4rem" }}
            />
            <span>{movie.Released}</span>
          </div>
          <div className="movie-info-list-1 ">
            <span
              class="material-symbols-outlined"
              style={{ color: "var(--border-color)", marginRight: "0.4rem" }}
            >
              timer
            </span>
            <span>{movie.Runtime}</span>
          </div>
          <div className="movie-info-list-1">
            <span className="text-color">Language : </span>
            <span>{movie.Language}</span>
          </div>
          <div className="movie-info-list-1">
            <span className="text-color">Country : </span>
            <span>{movie.Country}</span>
          </div>
          <div className="movie-info-list-1">
            <span className="text-color">Rating : </span>
            <span>{movie.imdbRating}/10</span>
          </div>
          <div className="movie-info-list-1" style={{ border: "none" }}>
            <span className="text-color">Type : </span>
            <span>{movie.Type}</span>
          </div>
        </div>

        <div className=" col-lg-4  col-sm-6 order-lg-2 order-1 d-flex justify-content-center">
          <img src={movie.Poster} alt={movie.imdbID} />
        </div>

        <p className="col-lg-3  col-sm-12 order-lg-3 order-3">{movie.Plot}</p>

        <div className="col-lg-5  col-sm-12 order-lg-4 order-4 movie-info-list-2">
          <p>
            <span>Genre</span> : {movie.Genre}
          </p>
          <p>
            <span>Director</span> : {movie.Director}
          </p>
          <p>
            <span>Writer</span> : {movie.Writer}
          </p>
          <p>
            <span>Actors</span> : {movie.Actors}
          </p>
          <p>
            <span>Rated</span> : {movie.Rated}
          </p>
          <p>
            <span>Awards</span> : {movie.Awards}
          </p>
          <p>
            <span>BoxOffice</span> : {movie.BoxOffice}
          </p>
          <p>
            <span>Production</span> : {movie.Production}
          </p>
          <p>
            <span>Website</span> : {movie.Website}
          </p>
        </div>
      </div>
      <button id="btn" onClick={() => navigate("/")}>
        go back
      </button>
    </section>
  );
};
export default MoviesInfo;
