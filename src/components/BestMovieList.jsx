import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { usePromiseStore } from "../store/promiseStore";
import { bestId } from "../api/best";
import { useNavigate } from "react-router-dom";

const BestMovieList = () => {
  const { setBestPromise, bestMovies, setMovieDetail } = usePromiseStore();
  const navigate = useNavigate();

  useEffect(() => {
    setBestPromise(bestId);
  }, [setBestPromise]);

  const handleDetail = (e) => {
    const id = e.currentTarget.parentElement.id;
    e.preventDefault();
    setMovieDetail(id);
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="m0auto">
        <ul className={`movie-list popular mt50`}>
          {bestMovies.map((movie) => {
            const size = movie.Poster.replace("300", "700");
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="" onClick={handleDetail}>
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
