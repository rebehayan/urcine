import React, { useState } from "react";
import BestMovieList from "../components/BestMovieList";
import DetailSearch from "../components/DetailSearch";
import MovieList from "../components/MovieList";

const Main = () => {
  const [searchData, setSearchData] = useState([]);
  const handleResult = (result) => {
    console.log(result);
    setSearchData(result);
  };
  return (
    <>
      <BestMovieList />
      <DetailSearch />
      <MovieList />
    </>
  );
};

export default Main;
