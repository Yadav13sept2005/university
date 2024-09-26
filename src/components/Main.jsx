import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="mainimage">
      <h1 className="mainimagetext">We Ensure better education</h1>
      <h1 className="mainimagetext">for a better world</h1>
      <p className="mainimagepara">
        Our cutting-edge curriculum is designed to empower students with the
        knowledge, skills, and
      </p>
      <p className="mainimagepara">
        experiences needed to excel in the dynamic field of education
      </p>
      <div className="explore">
        <button className="exploremore">
          Explore more <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Main;
