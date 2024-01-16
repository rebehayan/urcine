import axios from "axios";
import React, { useCallback, useEffect, useState } from "react"; // eslint-disable-line no-unused-vars

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [movie1, setMovie1] = useState([]);

  const APIKEY = "https://omdbapi.com/?apikey=ef297970&s=vanilla";
  const MOVIE1 = "https://omdbapi.com/?apikey=ef297970&i=tt0816692";
  const MovieId = [
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
  ];

  const fetchMovies = useCallback(async () => {
    const response = await axios.get(APIKEY);
    setMovies(response.data.Search);
  }, [APIKEY]);

  const fetchID = useCallback(async () => {
    const response = await axios.get(MovieId);
    setMovie1(response.data);
    console.log(response.data);
  }, [MovieId]);

  useEffect(() => {
    fetchMovies();
    fetchID();
  }, [fetchMovies, fetchID]);

  return (
    <>
      <div className="m0auto">
        <ul className="movie-list">
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID} id={movie.imdbID}>
                <a href="">
                  <div className="movie-list__info">
                    <div className="movie-list__poster">
                      <img src={movie.Poster} alt="" />
                    </div>
                    <div className="movie-list__title">{movies.Title}</div>
                    <div className="movie-list__year">{movies.Year}</div>
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
