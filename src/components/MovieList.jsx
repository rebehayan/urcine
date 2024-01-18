import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const paramId = [
    "tt1798709",
    "tt0206634",
    "tt2194499",
    "tt0816711",
    "tt1375666",
    "tt2543164",
    "tt0816692",
    "tt2582802",
    "tt0359950",
    "tt0770828",
    "tt0259711",
    "tt0112579",
    "tt7653254",
    "tt0335266",
    "tt1454468",
  ];
  const bestId = ["tt0119643", "tt0452694"];

  const paramResult = props.data == "popular" ? bestId : paramId;

  const fetchMovies = async () => {
    try {
      const responses = await Promise.all(
        paramResult.map((id) => axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`))
      );
      const movieData = responses.map((response) => response.data);

      setMovies(movieData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  });
  const classNames = `movie-list ${props.type ? props.type : ""}`;

  return (
    <>
      <div className="m0auto">
        <ul className={classNames}>
          {movies.map((movie) => {
            const size = movie.Poster.replace("300", "700");
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="">
                  <div className="movie-list__info">
                    <div className="movie-list__poster">
                      {props.data == "popular" ? (
                        <img src={size} alt="" />
                      ) : (
                        <img src={movie.Poster} alt="" />
                      )}
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
