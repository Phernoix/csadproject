import React, { useEffect, useState } from "react";

import HomeImg from "./../assets/img/hero/hero-img.png";
import ConsuntanyImg from "./../assets/img/feature/i1.png";
import EmbeddedImg from "./../assets/img/feature/i4.png";
import InternetImg from "./../assets/img/feature/i3.png";
import CompanyImg from "./../assets/img/feature/i2.png";
import Mental from "./../assets/img/feature/mental.png";
import Emotional from "./../assets/img/feature/emotional.png";
import Environmental from "./../assets/img/feature/environmental.png";
import Physical from "./../assets/img/feature/physical.png";
import Social from "./../assets/img/feature/social.png";
import Spiritual from "./../assets/img/feature/spiritual.png";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Vid from "../components/vids";
import CarouselContainer from "../components/CarouselContainer";

const Home = () => {
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
      <section className="unique-feature-area section-gap pb-5">
        <div className="container-fluid">
          <div className="row justify-content-center section-title-wrap m-0">
            <div className="col-lg-8">
              <CarouselContainer />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`hero-section relative`}
        style={{ overflow: "hidden" }}
      >
        <div className="container-xxl bg-light text-black ">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
          >
            <div class="container">
              <div class="row">
                <div class="col align-self-start">
                  <h1>Get ready to know more about the Healthcare Sector</h1>

                  <p>
                    The physical health of Singaporeans is a priority for the
                    nation with the ongoing pandemic and the prevalence of
                    chronic diseases due to unhealthy lifestyles. Not only that,
                    with an increasing focus on mental health issues, there is a
                    need for solutions to enable Singaporeans to lead a
                    healthier lifestyle with equal consideration for physical
                    and mental wellbeing.
                  </p>
                </div>
                <div class="col align-self-left">
                  {/* <img
                    class="img-fluid"
                    className="hero-img"
                    src={HomeImg}
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img class="img-fluid" className="hero-img" src={HomeImg} alt="" />
      </section>
      <div class="container">
        <div class="row">
          <div class="col align-self-start">
            <h2>
              Take a look at the below video to know more about the benefits of
              Exercising!
            </h2>
          </div>
          <div class="col align-self-left">
            {/* <img
                    class="img-fluid"
                    className="hero-img"
                    src={HomeImg}
                    alt=""
                  /> */}
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <Vid />
      </div>
      <section className="important-points-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={Physical} alt="" />
              <h4>Physical</h4>
              <p>
                Nourishing a healthy body through exercise, nutrition, sleep,
                etc.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={Mental} alt="" />
              <h4>Mental</h4>
              <p>
                Engaging the world through learning, problem-solving,
                creativity, etc.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={Emotional} alt="" />
              <h4>Emotional</h4>
              <p>
                Being aware of, accepting and expressing our feelings, and
                understanding the feelings of others.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={Spiritual} alt="" />
              <h4>Spiritual</h4>
              <p>
                Searching for meaning and higher purpose in human existence.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={Social} alt="" />
              <h4>Social</h4>
              <p>
                Connecting and engaging with others and our communities in
                meaningful ways.
              </p>
            </div>
            <div className="col-sm-3 col-md-6 single-points aquablue-bg">
              <img src={Environmental} alt="" />
              <h4>Environmental</h4>
              <p>
                Fostering positive interrelationships between planetary health
                and human actions, choices and wellbeing.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
