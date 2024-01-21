import React from "react";
import "./Search.scss";
const Search = () => {
  return (
    <dialog className="search">
      <div>
        <input type="search" placeholder="Movie here to search." value="" />
        <button className="btn-search" aria-label="검색"></button>
      </div>
      <button className="btn-close" aria-label="닫기"></button>
      <p className="txt-type1">
        엔터키를 누르시면 검색이 됩니다. 페이지로 돌아가고 싶으시다면 ESC키 또는 닫기버튼을
        눌러주세요.
      </p>
    </dialog>
  );
};

export default Search;
