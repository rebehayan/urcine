import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { usePromiseStore } from "../store/promiseStore";
import { bestId } from "../api/best";

const BestMovieList = () => {
  const { setBestPromise, bestMovies } = usePromiseStore();

  useEffect(() => {
    setBestPromise(bestId);
  }, [setBestPromise]);

  return (
    <>
      <div className="m0auto">
        <ul className={`movie-list popular mt50`}>
          {bestMovies.map((movie) => {
            const size = movie.Poster.replace("300", "700");
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="">
                  <div className="movie-list__info">
                    <div className="movie-list__poster">
                      <img src={size} alt="" />
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

export default BestMovieList;
