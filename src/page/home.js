import React, { useEffect, useState } from 'react'
import Header from '../componet/Header'
import HeroSlider from '../componet/HeroSlider'
import AboutUs from '../componet/AboutUs'
import OurOffer from '../componet/OurOffer'
import Footer from '../componet/Footer'
import OurRoom from '../componet/OurRoom'
// import AOS from "aos";
// import "aos/dist/aos.css";
import OurService from '../componet/OurService'
import ImageSection from '../componet/ImageSection'

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //    console.log(window.scrollY)
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />      
      <HeroSlider />
      <AboutUs />              
      <OurOffer />
      <OurRoom />
      <ImageSection />
      <OurService />
      <Footer />


      {showTopBtn && (
        <div className='back-top' onClick={goToTop}>
          <i className="fa-solid fa-caret-up"></i>
        </div>
      )}

    </>
  )
}
