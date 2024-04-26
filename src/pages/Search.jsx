import React from "react";
import DetailSearch from "../components/DetailSearch";

const Search = () => {
  return (
    <div className="m0auto mt30">
      <h3 className="sub-title">
        <strong>Search for the movie you want</strong>
        <span>Searching movies</span>
      </h3>
      <DetailSearch />
    </div>
  );
};

export default Search;
