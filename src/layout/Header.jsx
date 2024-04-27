import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import Megamenu from "../components/Megamenu";
import DialogSearch from "../components/DialogSearch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialog, setIsDialog] = useState(false);
  const shortCutOpen = (e) => {
    if (e.code === "KeyK" && e.ctrlKey) {
      e.preventDefault();
      setIsDialog(!isOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", shortCutOpen);
    return () => {
      document.removeEventListener("keydown", shortCutOpen);
    };
  }, []);
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
          <button className="btn-search" aria-label="검색" onClick={() => setIsDialog(!isDialog)}></button>
          {/* <button className="btn-insta" aria-label="인스타그램"></button>
          <button className="btn-facebook" aria-label="페이스북"></button>
          <button className="btn-watcha" aria-label="왓챠피디아"></button> */}
        </div>
        <Megamenu isopen={isOpen} setIsOpen={setIsOpen} />
        <DialogSearch isDialog={isDialog} setIsDialog={setIsDialog} />
      </header>
    </>
  );
};

export default Header;
