import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const DetailSearch = ({ sendResult }) => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");

  const thisYear = new Date().getFullYear();

  const searchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=ef297970&s=
        ${searchTitle}
        ${`&y=` + searchYear}
        ${`&type=` + searchType}
        `
      );
      setMovies(response.data.Search);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const handleTitle = (e) => {
    const title = e.target.value;
    setSearchTitle(title);
  };

  const handleYear = (e) => {
    const year = e.target.value;
    year == "직접입력" ? setSearchYear("") : setSearchYear(year);
  };

  const handleType = (e) => {
    const typeVal = e.target.value;
    setSearchType(typeVal);
  };

  const handleResult = () => {
    sendResult(movies);
  };

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  return (
    <>
      <div className="m0auto mt50">
        <div className="detail-search">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            onChange={handleTitle}
            className="input"
          />
          <select name="" id="type" className="select" onChange={handleYear}>
            <option hidden>Year</option>
            <option value={thisYear}>{thisYear}</option>
            <option value={thisYear - 1}>{thisYear - 1}</option>
            <option value={thisYear - 2}>{thisYear - 2}</option>
            <option value={thisYear - 3}>{thisYear - 3}</option>
            <option value={thisYear - 4}>{thisYear - 4}</option>
            <option value="직접입력">직접입력</option>
          </select>
          <select name="" id="type" className="select" onChange={handleType}>
            <option hidden>Type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="edpisode">edpisode</option>
          </select>
          <button className="btn regular pink" onClick={handleResult}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailSearch;
