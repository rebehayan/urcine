import React from "react"; // eslint-disable-line no-unused-vars

const DetailSearch = () => {
  return (
    <>
      <div className="m0auto mt50">
        <div className="detail-search">
          <input type="text" placeholder="검색어를 입력하세요." className="input" />
          <select name="" id="type" className="select">
            <option>Year</option>
          </select>
          <select name="" id="type" className="select">
            <option>Type</option>
          </select>
          <button className="btn regular pink">Search</button>
        </div>
      </div>
    </>
  );
};

export default DetailSearch;
