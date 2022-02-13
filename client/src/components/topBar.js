import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Nav from "./nav";
import logo from "./../assets/image/kmtec_logo.jpeg";

const TopBar = (props) => {
  /* const [isNotScrolled, setIsNotScrolled] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const notScrolled = window.scrollY < 100;
      if (notScrolled !== isNotScrolled) {
        setIsNotScrolled(notScrolled);
      }
    });
  }); */

  const handleClick = () => <Redirect to="/" />;
 const  isNotScrolled = false; 
  return (
    <div>
      <header
        id="header"
        className={`parent-active ${isNotScrolled ? "" : "header-scrolled"}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div id="logo">
              <Link to={"/"}>
                <img className="logo-1" src={logo} alt="" width="120px" />
              </Link>
              <label onClick={handleClick} className="logo-name pl-1">
                {/* <img className="logo-2" src={props.Logo2} alt="" /> */}
                <h2>KmTec Ltd UK</h2>
              </label>
            </div>
            <div className="nav-wrap d-flex flex-row align-items-center">
              <Nav />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
