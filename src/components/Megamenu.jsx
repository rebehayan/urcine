import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Megamenu = ({ isopen, setIsOpen }) => {
  const ref = useRef();

  useEffect(() => {
    if (isopen) {
      ref.current.classList.add("--active");
    } else {
      ref.current.classList.remove("--active");
    }
  }, [isopen]);

  const initialAniamtion = () => {
    ref.current.classList.remove("--hide", "--active");
    setIsOpen(false);
    ref.current.removeEventListener("animationend", initialAniamtion);
  };

  const handleClose = () => {
    ref.current.classList.add("--hide");
    ref.current.addEventListener("animationend", initialAniamtion);
  };
  return (
    <div ref={ref} className="megamenu">
      <button className="btn-close" aria-label="닫기" onClick={handleClose}></button>
      <nav>
        <ul className="megamenu__list">
          <li>
            <Link to="/" data-title="Home" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" data-title="Movies" onClick={handleClose}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/favorite" data-title="Favorite" onClick={handleClose}>
              Favorite
            </Link>
          </li>
          <li>
            <Link to="/about" data-title="About" onClick={handleClose}>
              About
            </Link>
          </li>
          <li>
            <Link to="/search" data-title="Search" onClick={handleClose}>
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-mega"></div>
    </div>
  );
};

export default Megamenu;
