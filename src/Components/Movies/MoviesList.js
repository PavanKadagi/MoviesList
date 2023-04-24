import { NavLink } from "react-router-dom";
import { useGblobalContext } from "../../Context/context";
import "./MoviesList.css";
const MoviesList = () => {
  const { movie, isLoading } = useGblobalContext();
  console.log(movie);
  if (isLoading) {
    return (
      <div className="">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <section className="container .movie-list">
      <div className="row">
        {movie.map((currentMovie) => {
          const { imdbID, Title, Poster } = currentMovie;
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={imdbID}>
              <NavLink to={`/movie/${Title}`}>
                <div>
                  <div className="card-info">
                    <h2>
                      {Title.length >= 15 ? Title.slice(0, 15) + "..." : Title}
                    </h2>
                    <img src={Poster} alt={imdbID} className="movie-list-img" />
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default MoviesList;

// {
//   /* <section className="movie-page">
//       <div className="container grid grid-4-col">
//         {movie.map((currentMovie) => {
//           const { imdbID, Title, Poster } = currentMovie;
//           return (
//             <NavLink to={`/movie/${Title}`} key={imdbID}>
//               <div>
//                 <div className="card-info">
//                   <h2>
//                     {Title.length >= 15 ? Title.slice(0, 15) + "..." : Title}
//                   </h2>
//                   <img src={Poster} alt={imdbID} />
//                 </div>
//               </div>
//             </NavLink>
//           );
//         })}
//       </div>
//     </section> */
// }
