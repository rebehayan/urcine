import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { usePromiseStore } from "../store/promiseStore";
import { movieList } from "../api/movelist";

const MovieList = () => {
  const { movies, setPromise } = usePromiseStore();
  useEffect(() => {
    setPromise(movieList);
  }, [setPromise]);

  return (
    <>
      <div className="m0auto">
        <ul className="movie-list gallery mt50">
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="">
                  <div className="movie-list__info">
                    <div className="movie-list__poster">
                      <img src={movie.Poster} alt="" />
                    </div>
                    <div className="movie-list__title">{movie.Title}</div>
                    <div className="movie-list__year">{movie.Year}</div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
