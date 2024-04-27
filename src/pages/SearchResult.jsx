import React, { useState } from "react";
import { useSearchResult } from "../store/searchResultStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePromiseStore } from "../store/promiseStore";

const SearchResult = () => {
  const { getSearch, results, searchWord, setSearch, totalResults } = useSearchResult();
  const { setMovieDetail } = usePromiseStore();

  const navigate = useNavigate();
  const [isPage, setIsPage] = useState(1);
  useEffect(() => {
    getSearch();
  }, []);

  const handleMoreSearch = () => {
    setIsPage((prev) => prev + 1);
    // setSearch({ ...searchWord, page: isPage + 1 });
  };
  const handleDetail = (e) => {
    const id = e.currentTarget.parentElement.id;
    e.preventDefault();
    setMovieDetail(id);
    navigate(`/movie/${id}`);
  };
  return (
    <>
      <div className="m0auto mt30">
        <h3 className="sub-title">
          <strong>{`'${searchWord.title}'를 검색한 결과입니다.`}</strong>
          <span>Search Result</span>
        </h3>
        {totalResults && <p className="txt-type2 mt50">{`${totalResults}개의 영화가 검색되었습니다`}</p>}
        <ul className="movie-list mt50">
          {results.map((movie) => {
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
        <div className="align center mt30">
          <button className="btn pink regular ico1" onClick={handleMoreSearch}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
