import React, { useEffect, useState } from "react";
import { usePromiseStore } from "../store/promiseStore";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../store/favoriteStore";
import Loading from "../components/Loading";

const Favorite = () => {
  const { movies, setPromise, setMovieDetail } = usePromiseStore();
  const { favoriteList } = useFavoriteStore();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      setPromise(favoriteList);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="movie-list mt50 fav">
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="" onClick={handleDetail}>
                  <div className="movie-list__info">
                    <div className="movie-list__poster">
                      <img src={movie.Poster} alt="" />
                    </div>
                    <div className="movie-list__title">{movie.Title}</div>
                    <div className="movie-list__genre">{movie.Genre}</div>
                    <div className="movie-list__plot">{movie.Plot}</div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Favorite;
