import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();
const settings = {
  centerPadding: 10,
  dots: true,
  arrows: false,
  infinite: false,
  autoplaySpeed: 0,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 480, 
      settings: {
        speed: 80000, 
      }
    }
  ]
};
export default function HeroSlider() {
  return (
    <>
      <div className="hero-slider" id="home">
        <Slider {...settings}>
          <div>
            <div className="banner-slide">
              <img src="/assets/images/banner2.png" alt="" />
              <div className="hero-content">
                <h2 data-aos="fade-up">Montana Resort</h2>
                <p>Discover tranquility and luxury at Montana Resort, where "Life Is Beautiful" takes on a new meaning. Nestled in a breathtaking locale, Montana Resort invites you to "Unlock to enjoy the view of Martine" – hinting at stunning natural beauty and perhaps a unique viewpoint or signature experience awaiting you.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="banner-slide">
              <img src="/assets/images/banner2.jpg" />
              <div className="hero-content">
                <h2>Life is Beautiful</h2>
                <p>Discover tranquility and luxury at Montana Resort, where "Life Is Beautiful" takes on a new meaning. Nestled in a breathtaking locale, Montana Resort invites you to "Unlock to enjoy the view of Martine" – hinting at stunning natural beauty and perhaps a unique viewpoint or signature experience awaiting you.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="banner-slide">
              <img src="/assets/images/banner3.jpg" />
              <div className="hero-content">
                <h2>Welcome to montana</h2>
                <p>Discover tranquility and luxury at Montana Resort, where "Life Is Beautiful" takes on a new meaning. Nestled in a breathtaking locale, Montana Resort invites you to "Unlock to enjoy the view of Martine" – hinting at stunning natural beauty and perhaps a unique viewpoint or signature experience awaiting you.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="banner-slide">
              <img src="/assets/images/banner5.jpg" />
              <div className="hero-content">
                <h2>Unique Experience</h2>
                <p>Discover tranquility and luxury at Montana Resort, where "Life Is Beautiful" takes on a new meaning. Nestled in a breathtaking locale, Montana Resort invites you to "Unlock to enjoy the view of Martine" – hinting at stunning natural beauty and perhaps a unique viewpoint or signature experience awaiting you.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="banner-slide">
              <img src="/assets/images/banner4.jpg" />
              <div className="hero-content">
                <h2>Montana Resort</h2>
                <p>Discover tranquility and luxury at Montana Resort, where "Life Is Beautiful" takes on a new meaning. Nestled in a breathtaking locale, Montana Resort invites you to "Unlock to enjoy the view of Martine" – hinting at stunning natural beauty and perhaps a unique viewpoint or signature experience awaiting you.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
