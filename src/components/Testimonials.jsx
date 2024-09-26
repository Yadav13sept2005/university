import React, { useRef } from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <>
      <div className="ourprogramtext testimonials">
        <p>TESTIMONIALS</p>
        <h2>What Student Says</h2>
      </div>

      <div className="testimonials">
        <img
          className="slidericonleft"
          src="https://t4.ftcdn.net/jpg/05/39/45/65/360_F_539456596_Q1B30cHqtUFZk7N70RZREadNwAJ9NjpA.jpg"
          onClick={slidebackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="https://greatstack.in/assets/user-1-dp2DpvM_.png" />
                  <div>
                    <h3>Emily Williams </h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="https://greatstack.in/assets/user-2-UK2CIdqi.png" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="https://greatstack.in/assets/user-3-BHRQSl0V.png" />
                  <div>
                    <h3>Emily Williams </h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="https://greatstack.in/assets/user-4-njZdDe5j.png" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <img
          src="https://t3.ftcdn.net/jpg/06/89/97/30/360_F_689973033_QD1VHc0yHgAfbidmmn116MsaJB4gDWOU.jpg"
          className="slidericonright"
          onClick={slideforward}
        />
      </div>
    </>
  );
};

export default Testimonials;
