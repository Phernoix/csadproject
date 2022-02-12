import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>About</h4>
                  <ul className="menu-list">
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/products"}>Technologies</Link>
                    </li>
                    <li>
                      <Link to={"/careers"}>Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Features</h4>
                  <ul className="menu-list">
                    <li>
                      <Link to={"/"}>Jobs</Link>
                    </li>
                    {/*                     <li>
                      <Link to={"/"}>Brand Assets</Link>
                    </li> */}
                    {/*                     <li>
                      <Link to={"/"}>Investor Relations</Link>
                    </li> */}
                    <li>
                      <Link to={"/about"}>Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Follow Us</h4>
                  <ul className="social-icons">
                    <li>
                      <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="https://plus.google.com">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/khaja-mohideen-5834203/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Contact</h4>
                  <ul className="menu-list">
                    <li>
                      <Link to={"/careers"}>Join Our Team</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Give us your feedback</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
