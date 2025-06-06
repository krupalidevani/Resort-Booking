// import React from "react";
import React, { useState } from "react";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };


  return (
    <>
      <div className="about-us p-10" id="about">
        <div className="container">
          <div className="about-wrap" >
            <div className="video-section" data-aos="fade-right">
              <div className="main-image">
                <div className="play-btn" onClick={handleOnClick}>
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <div className="sub-image">
                <img src="/assets/images/room2.jpg" />
              </div>
            </div>
            <div className="about-content" data-aos="fade-left">
              <h2>About us</h2>
              <p>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim ut tincidunt
                rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et.
                Rhoncus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Odit nobis magni eaque velit eum, id rem eveniet dolor possimus
                voluptas..
              </p>

              <div className="learn-more">
                <a href="#">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="model-popup">
          <div className="model">
            <div className="model-content">
              <div className="close-btn" onClick={() => setIsOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <video
                controls
                autoPlay={true}
                src="/assets/images/resort.mp4"
              ></video>             
            </div>
          </div>
        </div>
      )}
    </>
  );
}
