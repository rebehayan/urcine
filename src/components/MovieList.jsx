import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { usePromiseStore } from "../store/promiseStore";
import { movieList } from "../api/movelist";
import { Link } from "react-router-dom";

const MovieList = () => {
  const { movies, setPromise, setMovieDetail } = usePromiseStore();
  useEffect(() => {
    setPromise(movieList);
  }, []);

  return (
    <>
      <div className="m0auto">
        <ul className="movie-list gallery mt50">
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`} onClick={() => setMovieDetail(movie.imdbID)}>
                  <div className="movie-list__info">
                    <div className="movie-list__poster">
                      <img src={movie.Poster} alt="" />
                    </div>
                    <div className="movie-list__title">{movie.Title}</div>
                    <div className="movie-list__year">{movie.Year}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
