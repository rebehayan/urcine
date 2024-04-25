import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Styleguide from "../pages/Styleguide";
import SearchResult from "../pages/SearchResult";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/styleguide" element={<Styleguide />} />
      <Route path="/result" element={<SearchResult />} />
    </Routes>
  );
};

export default PageRouter;
