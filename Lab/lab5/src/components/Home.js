import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        { id: 1, image: 'images/banner.png', alt: 'Slide 1' },
        { id: 2, image: 'images/banner2.jpg', alt: 'Slide 2' },
        { id: 3, image: 'images/banner3.jpg', alt: 'Slide 3' },
    ];

    return (
        <div className="HomePage">
            <div className="slider">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id}>
                            <img src={slide.image} alt={slide.alt} />
                        </div>
                    ))}
                </Slider>

            </div>
            <br />
            <h4>
                This is Home Page
            </h4>
        </div>
    );
}

export default Home;