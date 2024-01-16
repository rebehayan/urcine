import React from "react"; // eslint-disable-line no-unused-vars

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>
          <a href="#/">UrCinePick</a>
        </h1>
        <button className="btn-menu" aria-label="메뉴"></button>
        <nav>
          <ul className="gnb">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Favorite</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </nav>
        <div className="utillity">
          <button className="btn-search" aria-label="검색"></button>
          <button className="btn-insta" aria-label="인스타그램"></button>
          <button className="btn-facebook" aria-label="페이스북"></button>
          <button className="btn-watcha" aria-label="왓챠피디아"></button>
        </div>
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
      </header>
      <div className="megamenu">
        <button className="btn-close" aria-label="닫기"></button>
        <nav>
          <ul className="megamenu__list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Favorite</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </nav>
        <div className="bg-mega"></div>
      </div>
    </>
  );
};

export default Header;
