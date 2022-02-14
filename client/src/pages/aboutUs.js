import React, { useEffect, useState } from "react";
import AboutImg from "../assets/img/about-img.png";
import StaffingImg from "../assets/img/stat/s5.png";
import SolutionsImg from "../assets/img/stat/s3.png";
import AnalyticsImg from "../assets/img/stat/s2.png";
import Fazith from "../assets/img/stat/canva.jpg";
import Erwin from "../assets/img/stat/erwin.jpeg";
import Raja from "../assets/img/stat/raja.jpeg";
import Footer from "../components/footer";
import Blog1 from "./../assets/img/blog/blog1.jpg";
import Blog2 from "./../assets/img/blog/blog2.jpg";
import Blog3 from "./../assets/img/blog/blog3.jpg";

const AboutUs = () => {
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
      {/* <PageTop pageTitle="About" /> */}
      <section
        className={`hero-section relative`}
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
            //style={"height: 800px"}
          >
            <div className="col-lg-6 content-wrap">
              <h1>
                We are the one
                <br /> who place ideas on the table
              </h1>
              <p>
                We are a group of Singapore Polytechnic students
                who made this website as part of their CSAD Module.
                Have fun navigating and marking our website.

              </p>
            </div>
          </div>
        </div>
        <div className="pt-0">
          <img
            //class="img-fluid"
            className="hero-img"
            src={AboutImg}
            alt=""
            style={{ width: "auto" }}
          />
        </div>
      </section>
      <section className="blog-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-card card">
                <img className="card-top-img" src={Fazith} />
                <div className="card-body">
                  <span>
                    <h4 className="card-title mb-15">Fazith</h4>
                  </span>
                  <p>
                    Hi i am Fazith. I am a 2nd year Computer Engineering student
                    at Singapore Polytechnic. <br />
                    <a href="http://www.zithinc.com" target="_blank">
                      Visit my website to know more about me
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-card card">
                <img className="card-top-img" src={Raja} />
                <div className="card-body">
                  <span>
                    <h4 className="card-title mb-15">Raja</h4>
                  </span>
                  <p>Hi i am Raja</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-card card">
                <img className="card-top-img" src={Erwin} />
                <div className="card-body">
                  <h4 className="card-title mb-15">Erwin</h4>
                  <p>Hi I am Erwin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="important-points-section">
        <div className="container">
          <div className="row m-0 ex-porcess-wrap pt-3">
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src={StaffingImg} alt="" />
                </div>

                <div className="desc ml-20">
                  <h4>Fazith Ismail</h4>
                  <p className="mt-20 mb-0">I am Fazith Ismail</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src={SolutionsImg} alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Erwin Klaseboert</h4>
                  <p className="mt-20 mb-0">I am Erwin</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-ex-process d-flex flex-row">
                <div className="icon">
                  <img src={AnalyticsImg} alt="" />
                </div>
                <div className="desc ml-20">
                  <h4>Rajaselvam</h4>
                  <p className="mt-20 mb-0">I am Raja.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
