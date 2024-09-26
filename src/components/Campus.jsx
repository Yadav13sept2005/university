import React from "react";
import "./Campus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Campus = () => {
  return (
    <>
      <div className="ourprogramtext campus">
        <p>GALLERY</p>
        <h2>Campus Photos</h2>
      </div>
      <div className="campus">
        <img src="https://greatstack.in/assets/gallery-1-HP2uKW94.png" />
        <img src="https://greatstack.in/assets/gallery-2-DYatBGZh.png" />
        <img src="https://greatstack.in/assets/gallery-3-C4KpO1U2.png" />
        <img src="https://greatstack.in/assets/gallery-4-LJEJ329C.png" />
      </div>
      <div className="seemore">
        <button className="seemorebtn">
          See more here <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default Campus;
