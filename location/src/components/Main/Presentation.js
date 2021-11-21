import React from "react";
import { Carousel } from "react-bootstrap";
import "./css/Presentation.css";
import img1 from "./img/image.jpg";
import img2 from "./img/image2.jpg";
import img3 from "./img/image3.jpg";

function presentation() {
  return (
    <div className="mycarou">

      <Carousel className="carr">
        <Carousel.Item interval={7000}>
          <img
            className="d-block"
            src={img1}
            alt="First slide"
            height="800px"
            width="100%"
          />
          <Carousel.Caption className="myCaption">
            <h1 className="myTitle">
              Modern Apartment In A New Residential Complex
            </h1>
            <p className="myParagraphe">
              Amuli is not only an architectural standout, it is reimagining
              life in one of the nation’s most storied cities.
            </p>
            <div className="cadro">
              <p className="contentCadr toweight">Louer Maintenant</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            height="800px"
            width="100%"
          />
          <Carousel.Caption className="myCaption">
            <h1 className="myTitle">
              Rent your house from now with Ebyoo location!
            </h1>
            <p className="myParagraphe">
              With more than thousands of house and appartement to rent arround
              the world
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            height="800px"
            width="100%"
          />
          <Carousel.Caption className="myCaption">
            <h1 className="myTitle">
              Pick and Search Best Deals on our Application
            </h1>
            <p className="myParagraphe">
              We are the leading real estate and rental marketplace dedicated to
              empowering consumers with data.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default presentation;
