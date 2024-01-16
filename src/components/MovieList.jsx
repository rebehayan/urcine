import axios from "axios";
import React, { useCallback, useEffect, useState } from "react"; // eslint-disable-line no-unused-vars

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const APIKEY = "https://omdbapi.com/?apikey=ef297970&s=movie";
  const fetchMovies = useCallback(async () => {
    const response = await axios.get(APIKEY);
    setMovies(response.data.Search);
  }, [APIKEY]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <div className="m0auto">
        <ul className="movie-list">
          {movies.map((movie) => {
            console.log(movie.Year);
            <li key={movie.imdbID}>
              <a href="">
                <div className="movie-list__info">
                  <div className="movie-list__poster">
                    <img src={movie.Poster} alt="" />
                  </div>
                  <div className="movie-list__title">{movies.Title}</div>
                  <div className="movie-list__year">{movies.Year}</div>
                </div>
              </a>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
