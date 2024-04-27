import React, { useEffect, useRef, useState } from "react";
import { useSearchResult } from "../store/searchResultStore";
import { useLocation, useNavigate } from "react-router-dom";

const DialogSearch = ({ isDialog, setIsDialog }) => {
  const ref = useRef();
  const { setSearch } = useSearchResult();
  const navigate = useNavigate();
  const [isValue, setIsValue] = useState();

  if (isDialog) {
    ref.current.show();
  }
  const handleDialog = () => {
    ref.current.close();
    setIsDialog(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    e.target.reset();
    setSearch(isValue);
    ref.current.close();
    navigate("/result");
  };
  const onChange = (e) => {
    setIsValue(e.target.value);
  };
  useEffect(() => {
    // document.addEventListener("keydown", (e) => {
    //   if (e.code === "Escape") {
    //     ref.current.close();
    //     setIsDialog(false);
    //   }
    // });
    // return () => {
    //   document.removeEventListener("keydown", (e) => {
    //     if (e.code === "Escape") {
    //       ref.current.close();
    //       setIsDialog(false);
    //     }
    //   });
    // };
  }, []);

  return (
    <dialog className="search" ref={ref}>
      <form>
        <fieldset onSubmit={handleSearch}>
          <legend className="a11y-hidden">Search</legend>
          <input type="search" placeholder="Movie here to search." defaultValue="" name="title" onChange={onChange} />
          <button className="btn-search" aria-label="검색" type="submit"></button>
        </fieldset>
      </form>
      <button className="btn-close" aria-label="닫기" onClick={handleDialog}></button>
      <p className="txt-type1">엔터키를 누르시면 검색이 됩니다. 페이지로 돌아가고 싶으시다면 ESC키 또는 닫기버튼을 눌러주세요.</p>
    </dialog>
  );
};

export default DialogSearch;
