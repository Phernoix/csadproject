import React from "react";
import { Carousel } from "react-bootstrap";
import Fazith from "../assets/img/stat/canva.jpg";
import Erwin from "../assets/img/stat/erwin.jpeg";
import Raja from "../assets/img/stat/raja.jpeg";
import Blog1 from "./../assets/img/blog/blog1.jpg";
import Blog2 from "./../assets/img/blog/blog2.jpg";
import Blog3 from "./../assets/img/blog/blog3.jpg";
import Fit1 from "./../assets/img/carusel/fit1.png";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Blog1} alt="First slide" />
        <Carousel.Caption>
          <h3>Fitness is the best</h3>
          <p>You have to work out</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={Blog2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Start working out today</h3>
          <p>Exercising helps your physical and mental stress</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Blog3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Singapore's health and welness</h3>
          <p>Health and wellness is key</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
