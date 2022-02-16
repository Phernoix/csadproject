import React, { useEffect, useState } from "react";
import ServiceImg from "./../assets/img/mockup.png";
import Mockup from "./../assets/img/mockup2.png";
import Vig from "./../assets/img/vig.png";
import SoftwareImg from "./../assets/img/feature/i1.png";
import EmbeddedImg from "./../assets/img/feature/i4.png";
import InternetImg from "./../assets/img/feature/i3.png";
import Footer from "../components/footer";
import AboutImg from "../assets/img/about-img.png";
import StaffingImg from "../assets/img/stat/s5.png";
import SolutionsImg from "../assets/img/stat/s3.png";
import AnalyticsImg from "../assets/img/stat/s2.png";
import Example from "../components/graph";
import Graphed from "../components/graph";

const Services = () => {
  const [fullscreen, setFullscreen] = useState({
    height: "auto",
  });
  useEffect(() => {
    setFullscreen({
      ...fullscreen,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div>
      <section className="hero-section relative" style={{ overflow: "hidden" }}>
        <div className="container">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
          >
            <div className="col-lg-4 content-wrap">
              <h1>Welcome to Project Vigor</h1>
              <p>
                The physical health of Singaporeans is a priority for the nation
                with the ongoing pandemic and the prevalence of chronic diseases
                due to unhealthy lifestyles. Not only that, with an increasing
                focus on mental health issues, there is a need for solutions to
                enable Singaporeans to lead a healthier lifestyle with equal
                consideration for physical and mental wellbeing.
              </p>
            </div>
            <Graphed />
          </div>
        </div>
        <div className="pt-4">
          <img
            align="right"
            //className="hero-img"
            src={Mockup}
            alt=""
            style={{ width: "auto" }}
          />
        </div>

        <div className="container">
          <div className="col-lg-4 content-wrap">
            <h1>The Challenge</h1>
            <h3>
              How can we develop an app that will improve Singaporean’s physical
              and mental health given the current pandemic?
            </h3>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="container">
          <div className="col-lg-4 content-wrap">
            <h1>Our Solution</h1>
            <h3>
              An app that rewards the user with a certain amount of crypto
              currency for every step the user walks.
            </h3>
          </div>
          <div className="pt-4">
            <a
              href="https://kovan.etherscan.io/address/0x46715a53e5654aaa2258b57affb9b5c2daf2612d"
              target="_blank"
            >
              <img
                align="right"
                //className="hero-img"
                src={Vig}
                alt=""
                style={{ width: "auto" }}
              />
            </a>
          </div>
        </div>
      </section>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};
export default Services;
