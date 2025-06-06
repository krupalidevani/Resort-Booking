import React from "react";

export default function OurService() {
  return (
    <div className="services-section p-5" id="service">
      {/* <video src="/assets/images/r1.mp4" controls></video> */}
      <div className="container">
        <div className="section-title">
          <h2>our services</h2>
          <p>
            The concept and service of the best luxury hotels in <br />
            Asturias in our sophisticated.
          </p>
        </div>
        <div className="services">
          <div className="image" data-aos="fade-right">
            <img src="/assets/images/restaurants.jpg" />
          </div>
          <div className="content-wrapp" data-aos="fade-left">
            <h2>restaurent</h2>
            <p>
              Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
              Phasellus accumsan urna vitae molestie interdum. Nam sed placerat
              libero, non eleifend dolor.
            </p>
            <p>
              Cras ac justo et augue suscipit euismod vel eget lectus. Proin
              vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
              malesuada vitae sem ac pellentesque.
            </p>
            <div className="learn-more">
              <a href="#">
                view more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ------------------------------------------- */}
        <div className="services column-reverse">
          <div className="content-wrapp" data-aos="fade-right">
            <h2>bar</h2>
            <p>
              Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
              Phasellus accumsan urna vitae molestie interdum. Nam sed placerat
              libero, non eleifend dolor.
            </p>
            <p>
              Cras ac justo et augue suscipit euismod vel eget lectus. Proin
              vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
              malesuada vitae sem ac pellentesque.
            </p>
            <div className="learn-more">
              <a href="#">
                view more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="image" data-aos="fade-left">
            <img src="/assets/images/sunset-bar.jpg" />
          </div>
        </div>
        {/* ---------------------------------------------- */}

        <div className="services">
          <div className="image" data-aos="fade-right">
            <img src="/assets/images/pool-party1.jpg" />
          </div>
          <div className="content-wrapp" data-aos="fade-left">
            <h2>pool party</h2>
            <p>
              Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
              Phasellus accumsan urna vitae molestie interdum. Nam sed placerat
              libero, non eleifend dolor.
            </p>
            <p>
              Cras ac justo et augue suscipit euismod vel eget lectus. Proin
              vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
              malesuada vitae sem ac pellentesque.
            </p>
            <div className="learn-more">
              <a href="#">
                view more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
