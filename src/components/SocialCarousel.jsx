import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";

function SocialCarousel() {
    return (
        <Carousel className="social-proof-2">
            <Carousel.Item interval={4000}>
                <img
                className="carousel-logo-1"
                src={Seneca}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="carousel-logo-2"
                src={Humber}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="carousel-logo-1"
                src={Fanshawe}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default SocialCarousel;