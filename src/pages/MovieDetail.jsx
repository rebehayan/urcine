import React, { useEffect } from "react";
import { usePromiseStore } from "../store/promiseStore";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const { movieDetail } = usePromiseStore();

  const { Poster, Title, Plot, Year, imdbRating, imdbID, Actors, Genre, Runtime, Director, imdbVotes, BoxOffice, Country, Ratings, Language, Metascore, imdbRatingCount, Type, Released, Writer } =
    movieDetail;

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === `/movie/${imdbID}`) {
      const body = document.querySelector("body");
      body.classList.add("movie-detail-page");
      return () => {
        body.classList.remove("movie-detail-page");
      };
    }
  }, [imdbID]);

  return (
    <div className="movie-detail m0auto">
      <div className="movie-detail__bg" style={{ backgroundImage: `url(${Poster})` }}></div>
      <div className="movie-detail__info">
        <div className="movie-poster">
          <img src={Poster} alt="" />
        </div>
        <div>
          <p className="movie-detail__year">{Year}</p>
          <h2 className="movie-detail__title">{Title}</h2>
          <p className="movie-detail__plot">{Plot}</p>
          <div className="movie-detail__shortinfo">
            <p>{Runtime}</p>
            <p>{Genre}</p>
            <p>{Released}</p>
          </div>
          <ul className="ratings">
            {Ratings?.map((item, index) => (
              <li key={`id-${index}`}>
                <strong>{item.Source}</strong>
                <div>{item.Value}</div>
              </li>
            ))}
          </ul>
          <div className="movie-detail__utillity">
            <button className="btn regular pink" onClick={() => window.history.back()}>
              List
            </button>
            <button className="btn-favorite" aria-label="favorite"></button>
          </div>
        </div>
      </div>
      <div className="info-block">
        <h3 className="heading regular">Cast</h3>
        <hr className="line-type1 mt20" aria-hidden="true" />
        <h4 className="heading small mt10">Director</h4>
        <p className="txt-type2">{Director}</p>
        <h4 className="heading small mt10">Writer</h4>
        <p className="txt-type2">{Writer}</p>
        <h4 className="heading small mt10">Actors</h4>
        <p className="txt-type2">{Actors}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
