import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import Megamenu from "../components/Megamenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <h1>
          <Link to="/">UrCinePick</Link>
        </h1>
        <button className="btn-menu" onClick={() => setIsOpen(!isOpen)} aria-label="메뉴"></button>
        <nav>
          <ul className="gnb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <div className="utillity">
          <button className="btn-search" aria-label="검색"></button>
          {/* <button className="btn-insta" aria-label="인스타그램"></button>
          <button className="btn-facebook" aria-label="페이스북"></button>
          <button className="btn-watcha" aria-label="왓챠피디아"></button> */}
        </div>
        <Megamenu isopen={isOpen} setIsOpen={setIsOpen} />
        <dialog className="search">
          <div>
            <input
              type="search"
              placeholder="Movie here to search."
              defaultValue=""
              onChange={(e) => {
                e.target.value;
              }}
            />
            <button className="btn-search" aria-label="검색"></button>
          </div>
          <button className="btn-close" aria-label="닫기"></button>
          <p className="txt-type1">엔터키를 누르시면 검색이 됩니다. 페이지로 돌아가고 싶으시다면 ESC키 또는 닫기버튼을 눌러주세요.</p>
        </dialog>
      </header>
    </>
  );
};

export default Header;
