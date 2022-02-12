import React, { useEffect, useState } from "react";
import TitleImg from "./../assets/img/title-icon.png";
import TesterImg from "./../assets/img/points/i3.png";
import SkillImg from "./../assets/img/feature/f1.png";
import EmbeddedImg from "./../assets/img/feature/f2.png";
import Footer from "../components/footer";

const Careers = () => {
  const [fullscreen, setFullscreen] = useState({
    height: "auto",
  });
  useEffect(() => {
    setFullscreen({
      ...fullscreen,
      height: window.innerHeight,
    });
    document.body.classList.add("version-blog");
    document.body.classList.add("parent-active");
  }, []);

  return (
    <div>
      <section className="unique-feature-area section-gap pb-5">
        <div className="container-fluid">
          <div className="row justify-content-center section-title-wrap m-0">
            <div className="col-lg-12">
              <div className="title-img">
                <img src={TitleImg} alt="" />
              </div>
              <h1>Come learn with us</h1>
              <p>
                We are growing company founded on the basis of fair business
                principles and innovative ideas People who like to learn and
                contribute are encouraged to apply , bring your ideas and make
                it into product Bring your energy and we will channel it to
                action
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-post">
        <div className="details-body">
          <div className="container">
            <div className="comment-section m-0">
              <div className="comment d-flex align-items-start">
                <div className="comment-img">
                  <img src={TesterImg} alt="" />
                </div>
                <div>
                  <div className="d-flex align-items-center mb-2 carrier-heading">
                    <h5>Software testers</h5>
                  </div>
                  <p>
                    If you are a born tester and love testing , have the
                    principles of testing and perhaps a certification and a
                    proper degree , then we are looking for you. If you have
                    experience its great , if not still we would like to have a
                    look at your profile Preferred domains are automotive ,
                    aerospace and embedded software or hardware testers
                  </p>
                </div>
              </div>
              <div>
                <div className="comment-reply-single">
                  <div className="comment d-flex align-items-start">
                    <div className="comment-img">
                      <img src={EmbeddedImg} alt="" />
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-2 carrier-heading">
                        <h5>Embedded software developers</h5>
                      </div>
                      <p>
                        Are you a software developer who understand the
                        microcontrollers and embedded C code, can debug software
                        applications with little supervision. Do you know what
                        compilers,linkers and preprocessors are then send us
                        your resume
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment d-flex align-items-start pt-2">
                <div className="comment-img">
                  <img src={SkillImg} alt="" />
                </div>
                <div>
                  <div className="d-flex align-items-center mb-2 carrier-heading">
                    <h5>Skills set</h5>
                  </div>
                  <p>
                    C or C++ programming
                    <br />
                    Embedded systems
                    <br />
                    Automotive testing , HIL testers
                    <br />
                    Infotainment
                    <br />
                    German language skills is an added advantage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
