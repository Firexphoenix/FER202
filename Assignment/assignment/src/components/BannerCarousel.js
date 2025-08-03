import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerCarousel = () => (
    <Carousel className="my-4 banner-carousel">
        <Carousel.Item>
            <img className="d-block w-100 banner-image" src="./banner.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 banner-image" src="./banner1.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 banner-image" src="./banner2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 banner-image" src="./banner3.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 banner-image" src="./banner4.jpg" alt="Second slide" />
        </Carousel.Item>
    </Carousel>
);

export default BannerCarousel;
