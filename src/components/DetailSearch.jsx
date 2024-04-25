import React, { useState } from "react";
import { useSearchResult } from "../store/searchResultStore";
import { useNavigate } from "react-router-dom";

const DetailSearch = () => {
  const [directInput, setDirectInput] = useState(false);
  const { setSearch, searchWord } = useSearchResult();
  const navigate = useNavigate();

  const thisYear = new Date().getFullYear();
  const handleTitle = (e) => {
    const title = e.target.value;
    setSearch({ ...searchWord, title: title });
  };

  const handleYear = (e) => {
    const year = e.target.value;
    year === "직접입력" ? setDirectInput(true) : setSearch({ ...searchWord, year: year });
  };

  const handleType = (e) => {
    const type = e.target.value;
    setSearch({ ...searchWord, type: type });
  };
  const escapeInput = (e) => {
    if (e.code === "Escape" && e.target.value === "") {
      setDirectInput(false);
    }
  };
  const handleSearch = () => {
    navigate("/result");
  };

  return (
    <>
      <div className="m0auto mt50">
        <div className="detail-search">
          <input type="text" placeholder="검색어를 입력하세요." onChange={handleTitle} className="input" />
          {directInput ? (
            <input type="number" placeholder="연도를 입력하세요. YYYY" onKeyDown={escapeInput} onChange={handleYear} className="input" />
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
            <button className="btn regular pink" onClick={handleSearch}>
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
