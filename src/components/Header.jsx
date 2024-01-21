import React from "react";
import "./Header.scss";
import Logo from "./Logo";
import Gnb from "./Gnb";
import Utillity from "./Utillity";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <Button className="btn-menu" ariaLabel="메뉴" />
        <Gnb />
        <Utillity />
      </header>
    </>
  );
};

export default Header;
