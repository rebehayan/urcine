import axios from "axios";
import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars

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
  ];
  const bestId = ["tt0119643", "tt0259711"];
  const paramResult = props.data == "popular" ? bestId : paramId;

  const fetchMovies = async () => {
    try {
      const responses = await Promise.all(
        //11개의 객체를 모두 담은 배열로 만든다.
        paramResult.map((id) => axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`))
      );
      const movieData = responses.map((response) => response.data); //. data는 json에 있는 영화정보부분의 key값
      setMovies(movieData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // 영화검색용
  // const searchMovies = async () => {
  //   try {
  //     const responses = await axios.get(`https://omdbapi.com/?apikey=ef297970&s=madison`);
  //     setMovies(responses.data.Search);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };

  useEffect(() => {
    fetchMovies();
  });
  const classNames = `movie-list ${props.type ? props.type : ""}`;

  return (
    <>
      <div className="m0auto">
        <ul className={classNames}>
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
