import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faGithubSquare, faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
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
                      <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/services"}>Vigor</Link>
                    </li>
                    <li>
                      <Link to={"/products"}>Tips</Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-widget">
                  <h4>Features</h4>
                  <ul className="menu-list">
                  <li>
                      <Link to={"/upload"}>Upload</Link>
                    </li>
                    {/*                     <li>
                      <Link to={"/"}>Brand Assets</Link>
                    </li> */}
                    {/*                     <li>
                      <Link to={"/"}>Investor Relations</Link>
                    </li> */}
                    <li>
                      <Link to={"/logincard"}>Account</Link>
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
                      <a href="https://www.instagram.com">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Phernoix">
                        <FontAwesomeIcon icon={faGithub} />
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
                      <Link to={"/contacted"}>Give us your feedback</Link>
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
