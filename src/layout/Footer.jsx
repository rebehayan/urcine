import React from "react"; // eslint-disable-line no-unused-vars

const Footer = () => {
  return (
    <footer className="footer">
      <div className="m0auto">
        <div>
          UrCinePick
          <br />
        </div>
        <div>CopryRight &copy; ${new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
