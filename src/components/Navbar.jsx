import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  let [cutdropdown, setcutdropdown] = useState(true);
  let barssearch = useRef();
  let barsclick = () => {
    barssearch.current.classList.toggle("activeelements");
    setcutdropdown((prev) => !prev);
  };

  let [stickynav, setstickynav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 150 ? setstickynav(true) : setstickynav(false);
    });
  }, []);

  return (
    <>
      <div className={`navbar ${stickynav ? "scrollnav" : ""}`}>
        <img
          src="https://greatstack.in/assets/logo-DUdXW4nF.png"
          className="logo"
        />
        <ul className="elements">
          <li className="element">
            <Link to="mainimage" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="element">
            <Link to="ourprogramtext" smooth={true} offset={-63} duration={500}>
              Program
            </Link>
          </li>
          <li className="element">
            <Link to="about" smooth={true} offset={0} duration={500}>
              About us
            </Link>
          </li>
          <li className="element">
            <Link to="campus" smooth={true} offset={-30} duration={500}>
              Campus
            </Link>
          </li>
          <li className="element">
            <Link to="testimonials" smooth={true} offset={-20} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className="contactus">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact us
            </Link>
          </li>
        </ul>
        {cutdropdown ? (
          <FontAwesomeIcon
            icon={faBars}
            className="fabars"
            onClick={barsclick}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="fabars"
            onClick={barsclick}
          />
        )}
      </div>
      <div className="dropdown">
        <div className="innerdropdoen" ref={barssearch}>
          <li className="dropdownelements">
            <Link to="mainimage" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="dropdownelements">
            <Link to="ourprogramtext" smooth={true} offset={0} duration={500}>
              Program
            </Link>
          </li>
          <li className="dropdownelements">
            <Link to="about" smooth={true} offset={0} duration={500}>
              About us
            </Link>
          </li>
          <li className="dropdownelements">
            <Link to="campus" smooth={true} offset={0} duration={500}>
              Campus
            </Link>
          </li>
          <li className="dropdownelements">
            <Link to="testimonials" smooth={true} offset={0} duration={500}>
              Testimonials
            </Link>
          </li>
          <button className="contactusdropdown">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact us
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
