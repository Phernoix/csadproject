import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Vid = () => {
  const center = {
    lat: 1.3098,
    lng: 103.7775,
  };
  const zoom = 11;
  return (
    <div>
      <section className="map-section relative">
        <div className="container-fluid relative">
          <div className="row">
            {/*             <div className="map-wrap2" id="map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  //key: "AIzaSyA7nx22ZmINYk9TGiXDEXGVxghC43Ox6qA"  YOUR KEY HERE ,
                  key: "AIzaSyDWEi6pZLSGArc8SPEiu1wqV-O8YePlZKc",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div> */}
            <div class="embed-responsive embed-responsive-21by9">
              <iframe
                class="embed-responsive-item"
                //src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2349548575826!2d-0.09117408422930154!3d51.52725027963835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbe35cec6e1b%3A0x4c5d210f2331f266!2sKmTec%20Ltd!5e0!3m2!1sen!2ssg!4v1634649812582!5m2!1sen!2ssg"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7758676388307!2d103.77536081541403!3d1.3097810620661132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a602ff17c15%3A0xa9545dd23993859e!2sSingapore%20Polytechnic!5e0!3m2!1sen!2ssg!4v1642518366694!5m2!1sen!2ssg"
                src="https://www.youtube.com/embed/wWGulLAa0O0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                //allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className="container info-wrap">
          <div className="row align-items-center justify-content-end section-gap">
            <div className="contact-info">
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home" />
                </div>
                <div className="desc">
                  <h4>Singapore, Singapore</h4>
                  <p>500 Dover Rd, Singapore 139651</p>
                </div>
              </div>
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset" />
                </div>
                <div className="desc">
                  <a href="tel:00(440)98655629865">
                    <h4>87546423</h4>
                  </a>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="single-line d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <div className="desc">
                  <h4>fazithismail@gmail.com</h4>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Vid;
