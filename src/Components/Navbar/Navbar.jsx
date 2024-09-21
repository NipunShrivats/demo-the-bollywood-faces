import React, { useEffect, useState } from "react";
import "./NavbarStyle.css";
import logow from "../../assets/imgAssets/logo-white.png";
import logob from "../../assets/imgAssets/logo-black.png";
import logoMain from "../../assets/imgAssets/logo-bollywood.png";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

// import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

import MenuIcon from "../../assets/imgAssets/menu-icon.png";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <a href="/">
          {/* <div className="logo-cover1">
            <div className="logo-inside1">
              <img src={logow} className="logo" alt="" />
            </div>

            <div className="logo-inside2">
              <h5>SENSATIONZ</h5>
              <h3>The Bollywood Faces</h3>
            </div>
          </div> */}
          <img src={logoMain} alt="" className="logo-main" />
        </a>
        <img src={MenuIcon} alt="" className="menu-icon" onClick={toggleMenu} />

        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/Issues">Issues</a>
          </li>

          <li>
            <a href="/Successstories">Success Stories</a>
          </li>

          {/* <li>
            <Link to="magazine" smooth={true} offset={-230} durastion={500}>
              Magazine release
            </Link>
          </li> */}

          {/* <li><a href="#magazine">Magazine release</a></li> */}

          <li className="btn-li">
            <Link
              to="contact"
              smooth={true}
              offset={-250}
              durastion={500}
              className="btn dark-btn"
            >
              Contact Us
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
