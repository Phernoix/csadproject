import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Comments from "../comments/Comments";

import ConsuntancyImg from "./../assets/img/blog/img1.jpg";
import EmbeddedImg from "./../assets/img/blog/img6.jpg";
import InternetImg from "./../assets/img/blog/img4.jpg";
import ProductImg from "./../assets/img/hero/hero-img2.png";
import Blog1 from "./../assets/img/blog/blog1.jpg";
import Blog2 from "./../assets/img/blog/blog2.jpg";
import Blog3 from "./../assets/img/blog/blog3.jpg";
import Blog4 from "./../assets/img/blog/blog4.png";

const Products = () => {
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
      <section
        className={`hero-section relative`}
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div
            className="row fullscreen align-items-center relative"
            style={fullscreen}
          >
            <div className="col-lg-6 content-wrap">
              <h1>Fitness Tips</h1>
              <p>
                Our specialists provide solutions from design to product stage.
                We connect your devies to network to extract the maximum
                potential of your business.
              </p>
            </div>
          </div>
        </div>
        <img
          className="hero-img"
          src={Blog4}
          alt=""
          style={{ width: "100dp" }}
        />
      </section>
      <section className="blog-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-card card">
                <img className="card-top-img" src={Blog3} />
                <div className="card-body">
                  <span className="genric-btn card-btn">Fitness</span>
                  <span>
                    <h4 className="card-title mb-15">How working out helps</h4>
                  </span>
                  <p>
                    Keeping a fitness journal makes complete sense when you
                    remember that putting pen to paper can help you make your
                    goals feel more attainable, stabilize your emotions, and
                    work through the obstacles in front of you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-card card">
                <img className="card-top-img" src={Blog1} />
                <div className="card-body">
                  <span className="genric-btn card-btn">Health</span>
                  <span>
                    <h4 className="card-title mb-15">
                      Why Does Exercise Improve Brain Health as You Age?
                    </h4>
                  </span>
                  <p>
                    It's a well-known fact that exercise and mental health are
                    intertwined. When you get sweaty, you're boosting your mood,
                    increasing your self-esteem, and improving your memory and
                    focus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-card card">
                <img className="card-top-img" src={Blog2} />
                <div className="card-body">
                  <span
                    className="genric-btn card-btn"
                    style={{ bottom: "70%" }}
                  >
                    Mental Health
                  </span>
                  <h4 className="card-title mb-15">
                    Reset and Refresh Your Body and Your Mind With This Mobility
                    and Meditation
                  </h4>
                  <p>
                    Nicolas reminds that the mind-body connection is key, and,
                    in this case, it's meant to promote joy. "Everything we do
                    here, we're learning to approach it with this childlike
                    curiosity. This playfulness," she says. "To kind of enjoy
                    the exploration in our movement rather than judging our
                    movement." This intention brings peace to the practice and
                    provides the opportunity to check in with your body as you
                    move
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5 pt-5">
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div>

      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Products;
