import axios from "axios";
import React, { useState } from "react";

const DetailSearch = ({ sendResult }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");
  const [directInput, setDirectInput] = useState(false);

  const thisYear = new Date().getFullYear();

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=ef297970&s=${searchTitle}&y=${searchYear}&type=${searchType}`
      );
      sendResult(response.data.Search);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleTitle = (e) => {
    const title = e.target.value;
    setSearchTitle(title);
  };

  const handleYear = (e) => {
    const year = e.target.value;
    year === "직접입력" ? setDirectInput(true) : setSearchYear(year);
  };

  const handleType = (e) => {
    const typeVal = e.target.value;
    setSearchType(typeVal);
  };
  const escapeInput = (e) => {
    if (e.code === "Escape" && e.target.value === "") {
      setDirectInput(false);
    }
  };

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
          {directInput ? (
            <input
              type="number"
              placeholder="연도를 입력하세요. YYYY"
              onKeyDown={escapeInput}
              onChange={handleYear}
              className="input"
            />
          ) : (
            <select name="" id="type" className="select" onChange={handleYear}>
              <option hidden>Year</option>
              <option value={thisYear}>{thisYear}</option>
              <option value={thisYear - 1}>{thisYear - 1}</option>
              <option value={thisYear - 2}>{thisYear - 2}</option>
              <option value={thisYear - 3}>{thisYear - 3}</option>
              <option value={thisYear - 4}>{thisYear - 4}</option>
              <option value="직접입력">직접입력</option>
            </select>
          )}
          <select name="" id="type" className="select" onChange={handleType}>
            <option hidden>Type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="edpisode">edpisode</option>
          </select>
          <div className="btn-group">
            <button className="btn regular pink" onClick={searchMovies}>
              Search
            </button>
            <button className="btn-reset"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSearch;
