import React, { useEffect } from "react";
import { usePromiseStore } from "../store/promiseStore";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../store/favoriteStore";

const Favorite = () => {
  const { movies, setPromise, setMovieDetail } = usePromiseStore();
  const { favoriteList } = useFavoriteStore();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      setPromise(favoriteList);
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
    <div className="m0auto mt30">
      <h3 className="sub-title">
        <strong>My saved favorite movies</strong>
        <span>Favorite</span>
      </h3>
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
  );
};

export default Favorite;
