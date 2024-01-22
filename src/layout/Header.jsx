import React from "react";
import "./Header.scss";
import Logo from "../components/Logo";
import Gnb from "../components/Gnb";
import Utillity from "../components/Utillity";
import Button from "../components/Button";

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
