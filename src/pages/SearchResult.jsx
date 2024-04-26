import React from "react";
import { useSearchResult } from "../store/searchResultStore";
import { useEffect } from "react";

const SearchResult = () => {
  const { getSearch, results } = useSearchResult();
  console.log(results);
  useEffect(() => {
    getSearch();
  }, []);

  return (
    <>
      <div className="m0auto mt50">
        <ul className="movie-list">
          {results.map((movie) => {
            return (
              <li key={movie.imdbID}>
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

export default SearchResult;
