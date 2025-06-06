import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="logo">
            {/* <Link href="#">Logo<span>Shop</span></Link> */}
            <a href="#">
                <img src="/assets/images/logo.png" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#room">rooms</a>
              </li>            
              
              <li>
                <a href="#service">service</a>
              </li>
             
            </ul>
          </div>
          
        </div>
      </div>
    </header>
  );
}
