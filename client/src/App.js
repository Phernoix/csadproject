import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import Products from "./pages/products";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Contacted from "./pages/contacted";
import Subscribe from "./pages/subscribe";
import Subscribed from "./pages/subscribed";
import TranslateToDe from "./pages/TranslateToDe";
import TranslateToEn from "./pages/TranslateToEn";
import Home from "./pages/home";
import LoginPage from "./pages/logincard";
import "./header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as CloseMenu } from "./assets/image/menu.svg";
import { ReactComponent as MenuIcon } from "./assets/image/menu.svg";
//import logo from "./assets/image/kmtec_logo.jpeg";
import logo from "./assets/image/csadlogo.jpg";
import Signup from "./pages/signup";
import UpdateProfile from "./pages/updateprofile";
import DeleteProfile from "./pages/deleteprofile";
//import Footer from './footer';

export default function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div id="logo">
            <Link to={"/"}>
              <img className="logo-1" src={logo} alt="" width="120px" />
            </Link>
            <label onClick={handleClick} className="logo-name pl-1">
              {/* <img className="logo-2" src={props.Logo2} alt="" /> */}
              <h2>CSAD PROJECT</h2>
            </label>
          </div>
          {/* // Nav start */}

          <div className="nav-wrap d-flex flex-row ">
            {/* <nav id={click ? "mobile-nav" : "nav-menu-container"}> */}
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/home"}>
                  <p class="text-dark">
                    <h6>Home</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/about"}>
                  <p class="text-dark">
                    <h6>About Us</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/services"}>
                  <p class="text-dark">
                    <h6>Vigor</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/products"}>
                  <p class="text-dark">
                    <h6>Products</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/careers"}>
                  <p class="text-dark">
                    <h6>Careers</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/contacted"}>
                  <p class="text-dark">
                    <h6>Contact</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/subscribed"}>
                  <p class="text-dark">
                    <h6>Subscribe</h6>
                  </p>
                </Link>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/logincard"}>
                  <p class="text-dark">
                    <h6>Account</h6>
                  </p>
                </Link>
              </li>
              {/* <li className="option" onClick={closeMobileMenu}>
                <Link to={"/"}>
                  <p class="text-dark">
                    <h6>Deutsch</h6>
                  </p>
                </Link>
              </li>

              <li className="option" onClick={closeMobileMenu}>
                <Link to={"/"}>
                  <p class="text-dark">
                    <h6>English</h6>
                  </p>
                </Link>
              </li> */}
            </ul>

            <div className="mobile-menu" onClick={handleClick}>
              {click ? (
                <CloseMenu className="menu-icon" />
              ) : (
                <MenuIcon className="menu-icon" />
              )}
            </div>
            {/* </nav> */}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contacted" component={Contacted} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/subscribed" component={Subscribed} />
        <Route exact path="/logincard" component={LoginPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/updateprofile" component={UpdateProfile} />
        <Route exact path="/deleteprofile" component={DeleteProfile} />
        <Route exact path="/TranslateToDe" component={TranslateToDe} />
        <Route exact path="/TranslateToEn" component={TranslateToEn} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
