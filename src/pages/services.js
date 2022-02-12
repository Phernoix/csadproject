import React, { useEffect, useState } from "react";
import ServiceImg from "./../assets/img/mockup.png";
import SoftwareImg from "./../assets/img/feature/i1.png";
import EmbeddedImg from "./../assets/img/feature/i4.png";
import InternetImg from "./../assets/img/feature/i3.png";
import Footer from "../components/footer";
import AboutImg from "../assets/img/about-img.png";
import StaffingImg from "../assets/img/stat/s5.png";
import SolutionsImg from "../assets/img/stat/s3.png";
import AnalyticsImg from "../assets/img/stat/s2.png";

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
                We the founders and managing directors of this company
                themselves come from engineering background, we understand your
                requirements and can provide best solutions to your business
                needs.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <img
            className="hero-img"
            src={ServiceImg}
            alt=""
            style={{ width: "auto" }}
          />
        </div>
      </section>
      <section className="feature-section">
        <div className="container">
          <div className="row feature-left-wrapr">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={39}
                      height={40}
                      src={SoftwareImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Software solutions</h4>
                  <p className="mb-0">
                    Our company provides software solutions tailored exactly to
                    your requirements. We have also have a pool of consultants
                    working on in house projects off shore who could prove to be
                    an valuable resource to your company needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={36}
                      src={InternetImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Internet of Things Solutions</h4>
                  <p className="mb-0">
                    We have developed IoT products installed for many customers
                    to the best standards. Tank leak detection system , Water
                    tank monitoring system are some of the products our company
                    developed with our specialists and installed for many
                    customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={40}
                      src={EmbeddedImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Embedded Solutions</h4>
                  <p className="mb-0">
                    Providing consultancy helping your company develop your
                    products be it in design phase or development phase. We
                    understand the technical details as our consultants have
                    worked for many global clients in Germany and UK.
                  </p>
                </div>
              </div>
            </div>
            {/*             <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={36}
                      src={InternetImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Internet of Things Solutions</h4>
                  <p className="mb-0">
                    We have developed IoT products installed for many customers
                    to the best standards. Tank leak detection system , Water
                    tank monitoring system are some of the products our company
                    developed with our specialists and installed for many
                    customers.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={36}
                      src={InternetImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Computer Vision</h4>
                  <p className="mb-0">
                    We have developed IoT products installed for many customers
                    to the best standards. Tank leak detection system , Water
                    tank monitoring system are some of the products our company
                    developed with our specialists and installed for many
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={36}
                      src={InternetImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>PLM/ALM Consultancy</h4>
                  <p className="mb-0">
                    We have developed IoT products installed for many customers
                    to the best standards. Tank leak detection system , Water
                    tank monitoring system are some of the products our company
                    developed with our specialists and installed for many
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature aquablue-bg m-0">
                <div className="icon">
                  <span>
                    <img
                      width={40}
                      height={36}
                      src={InternetImg}
                      className="attachment-image_icon_40x40 size-image_icon_40x40"
                      alt=""
                    />
                  </span>
                </div>
                <div className="desc">
                  <h4>Product/Project Management</h4>
                  <p className="mb-0">
                    We have developed IoT products installed for many customers
                    to the best standards. Tank leak detection system , Water
                    tank monitoring system are some of the products our company
                    developed with our specialists and installed for many
                    customers.
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
export default Services;
