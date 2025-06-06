import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="p-5">
        <div className="container">
          <div className="row p-5" data-aos="fade-up">
            <div className="col">
              <h2>
                <img src="/assets/images/logo.png" />
              </h2>
              <p>
                Sequi dolores ratione eos eveniet provident soluta. Omnis
                nesciunt sit eos at, eius voluptatum rem corporis. Doloremque
                labore assumenda explicabo velit illo, soluta, inventore hic.
              </p>
              <div className="social-icon">
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col">
              <h2>menu</h2>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">rooms</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h2>meet montala</h2>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Gellary</a>
                </li>
                <li>
                  <a href="#">menu</a>
                </li>
                <li>
                  <a href="#">restaurant </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h2>instagram</h2>
                <div className="images">
                   <div className="img">
                    <img src="/assets/images/drink.jpg" />
                   </div>
                   <div className="img">
                    <img src="/assets/images/drink1.jpg" />
                   </div>
                   <div className="img">
                    <img src="/assets/images/dinner.jpg" />
                   </div>
                   <div className="img">
                    <img src="/assets/images/room1.jpg" />
                   </div>
                   <div className="img">
                    <img src="/assets/images/room5.jpg" />
                   </div>
                   <div className="img">
                    <img src="/assets/images/room02.jpeg" />
                   </div>
                </div>
            </div>
          </div>
          <div className="copy-write p-5">
            <p>© 2023 Montala. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
