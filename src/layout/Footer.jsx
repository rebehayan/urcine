import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="m0auto">
        <div className="footer__nav">
          <span>UrCinePick</span>
          <Link to="/styleguide">StyleGuide</Link>
        </div>
        <div>CopryRight &copy; ${new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
