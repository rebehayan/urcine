import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Styleguide from "../pages/Styleguide";
import SearchResult from "../pages/SearchResult";
import About from "../pages/About";
import Search from "../pages/Search";
import Favorite from "../pages/Favorite";
import MovieDetail from "../pages/MovieDetail";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/styleguide" element={<Styleguide />} />
      <Route path="/result" element={<SearchResult />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default PageRouter;
