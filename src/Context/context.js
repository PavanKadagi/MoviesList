import React, { useContext, useEffect, useState } from "react";
const MovieContext = React.createContext();

export const movieURL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

// we need to create a provider
const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("avatar");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      let data = await fetch(url);
      data = await data.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
        setError({ show: false, msg: "" });
        setIsLoading(false);
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // debouncing
    let timeOut = setTimeout(() => {
      getMovies(`${movieURL}&s=${query}`);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [query]);
  console.log(query, error);
  return (
    <MovieContext.Provider value={{ movie, isLoading, error, query, setQuery }}>
      {children}
    </MovieContext.Provider>
  );
};

//global custom hooks
const useGblobalContext = () => {
  return useContext(MovieContext);
};

export { MovieContext, MovieProvider, useGblobalContext };
