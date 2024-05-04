import React, { useState } from "react";
import BestMovieList from "../components/BestMovieList";
import DetailSearch from "../components/DetailSearch";
import MovieList from "../components/MovieList";

const Main = () => {
  return (
    <>
      <BestMovieList />
      <DetailSearch />
      <MovieList />
    </>
  );
};

export default Main;
