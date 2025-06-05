import React from "react";

function HeroCarousel() {
    const banners = [
        {
            src: '/pizza1.jpg',
            caption: 'Neapolitan Pizza',
            desc: 'If you are looking for traditional Italian pizza, the Neapolitan is the best option!',
        },
        {
            src: '/pizza2.jpg',
            caption: 'Delicious Mushroom Pizza',
            desc: 'Taste the flavor explosion of freshly baked mushroom pizza.',
        },
        {
            src: '/pizza3.jpg',
            caption: 'Hot & Fresh Hawaiian',
            desc: 'A sweet and savory classic with pineapple and ham.',
        },
        {
            src: '/pizza4.jpg',
            caption: 'Chili Pizza',
            desc: 'A hot and spicy pizza with ham and cheese',
        },
        {
            src: '/pizza5.jpg',
            caption: 'Vegetable Pizza',
            desc: 'A healthy and fresh pizza with vegetable',
        }
    ];
    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {banners.map((item, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="hero-slide d-flex flex-column justify-content-center align-items-center text-white text-center"
                            style={{ backgroundImage: `url(${item.src})` }}>
                            <h1 className="hero-caption">{item.caption}</h1>
                            <p className="hero-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default HeroCarousel;