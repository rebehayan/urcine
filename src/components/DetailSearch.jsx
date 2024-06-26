import React, { useState } from "react";
import { useSearchResult } from "../store/searchResultStore";
import { useNavigate } from "react-router-dom";

const DetailSearch = () => {
  const [directInput, setDirectInput] = useState(false);
  const { setSearch } = useSearchResult();
  const [searchInput, setSearchInput] = useState({
    title: "",
    year: "",
    type: "",
  });
  const navigate = useNavigate();

  const thisYear = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    value === "direct" && setDirectInput(true);
    setSearchInput((prev) => ({ ...prev, [name]: value }));
  };

  const escapeInput = (e) => {
    if (e.code === "Escape" && e.target.value === "") {
      setDirectInput(false);
    }
  };
  const handleSearch = () => {
    if (searchInput.title === "") {
      alert("검색어를 입력하세요.");
      return;
    }

    setSearch(searchInput);
    navigate("/result");
  };
  const handleReset = () => {
    setSearchInput({
      title: "",
      year: "",
      type: "",
    });
    setDirectInput(false);
  };

  return (
    <>
      <div className="m0auto mt50">
        <div className="detail-search">
          <input type="text" placeholder="검색어를 입력하세요." name="title" onChange={handleChange} className="input" value={searchInput.title} />
          {directInput ? (
            <input type="number" placeholder="연도를 입력하세요. YYYY" defaultValue={thisYear} name="year" onChange={handleChange} onKeyDown={escapeInput} className="input" />
          ) : (
            <select name="year" className="select" value={searchInput.year} onChange={handleChange}>
              <option hidden>Year</option>
              <option value={thisYear}>{thisYear}</option>
              <option value={thisYear - 1}>{thisYear - 1}</option>
              <option value={thisYear - 2}>{thisYear - 2}</option>
              <option value={thisYear - 3}>{thisYear - 3}</option>
              <option value={thisYear - 4}>{thisYear - 4}</option>
              <option value="direct">직접입력</option>
            </select>
          )}
          <select name="type" className="select" value={searchInput.type} onChange={handleChange}>
            <option hidden>Type</option>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="edpisode">edpisode</option>
          </select>
          <div className="btn-group">
            <button className="btn regular pink" onClick={handleSearch}>
              Search
            </button>
            <button className="btn-reset" onClick={handleReset}></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSearch;
