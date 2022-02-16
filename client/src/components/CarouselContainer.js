import React from "react";
import { Carousel } from "react-bootstrap";
import Fazith from "../assets/img/stat/canva.jpg";
import Erwin from "../assets/img/stat/erwin.jpeg";
import Raja from "../assets/img/stat/raja.jpeg";
import Blog1 from "./../assets/img/blog/blog1.jpg";
import Blog2 from "./../assets/img/blog/blog2.jpg";
import Blog3 from "./../assets/img/blog/blog3.jpg";
import Blog4 from "./../assets/img/blog/blog4.jpg";
import Blog5 from "./../assets/img/blog/blog5.jpg";
import Blog6 from "./../assets/img/blog/blog6.jpg";
import Blog7 from "./../assets/img/blog/blog7.jpg";
import Fit1 from "./../assets/img/carusel/fit1.png";
import "./carousel.css";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Blog4} alt="First slide" />
        <Carousel.Caption>
          <h3>Fitness is the best</h3>
          <p>You have to work out</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Blog5} alt="Second slide" />
        <Carousel.Caption>
          <h3>Learn about sexual wellness today</h3>
          <p>Having regular sex helps your physical and mental stress</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Blog6} alt="Third slide" />
        <Carousel.Caption mb-4>
          <h3>Singapore's health and welness</h3>
          <p>Health and wellness is key</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={Blog7} alt="Fourth slide" />
        <Carousel.Caption mb-4>
          <h3>Find out how to get fit!</h3>
          <p>Remember to work out at least 150 minutes a week!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
