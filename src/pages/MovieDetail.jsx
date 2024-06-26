import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePromiseStore } from "../store/promiseStore";
import { useLocation } from "react-router-dom";
import { useFavoriteStore } from "../store/favoriteStore";

const MovieDetail = () => {
  const { movieDetail } = usePromiseStore();
  useEffect(() => {
    if ("Ratings" in movieDetail) {
      const height = ref.current.offsetHeight;
      setIsHeight(height);
    }
  }, [movieDetail]);

  const [isheight, setIsHeight] = useState(0);
  const { setFavorite, favoriteList } = useFavoriteStore();
  const [isToggle, setIsToggle] = useState(false);
  const ref = useRef(null);

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

    favoriteList.forEach((item) => {
      if (item === imdbID) {
        setIsToggle(true);
      }
    });
  }, [imdbID]);

  // useLayoutEffect(() => {
  //   console.log({ ref: ref.current });
  //   if (ref.current) {
  //     const height = ref.current.offsetHeight;
  //     console.log({ height });
  //     setIsHeight(height);
  //   }
  // }, []);

  const handleAddFavorite = () => {
    setFavorite([imdbID]);
    setIsToggle(!isToggle);
  };
  // console.log({ isheight });

  return (
    <div className="movie-detail m0auto">
      <div className="movie-detail__bg" style={{ backgroundImage: `url(${Poster})`, height: isheight }}></div>
      <div className="movie-detail__info" ref={ref}>
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
            <button className={`btn-favorite ${isToggle ? "--active" : ""}`} aria-label="favorite" onClick={handleAddFavorite}></button>
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
