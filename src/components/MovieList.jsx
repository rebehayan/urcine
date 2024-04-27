import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { usePromiseStore } from "../store/promiseStore";
import { movieList } from "../api/movelist";
import { Link, useNavigate } from "react-router-dom";

const MovieList = () => {
  const { movies, setPromise, setMovieDetail } = usePromiseStore();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      setPromise(movieList);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleDetail = (e) => {
    const id = e.currentTarget.parentElement.id;
    e.preventDefault();
    setMovieDetail(id);
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <div className="m0auto">
        <ul className="movie-list gallery mt50">
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="" onClick={handleDetail}>
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
