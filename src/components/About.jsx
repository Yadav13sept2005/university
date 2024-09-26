import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const About = ({ setplaystate }) => {
  return (
    <div className="about">
      <div className="aboutpbox">
        <div>
          <p className="aboutp">ABOUT UNIVERSITY</p>
          <h2>Nurturing Tomorrow's</h2>
          <h2>Leaders Today</h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
      <div className="aboutvedio">
        <img src="https://greatstack.in/assets/about-Bupj5-5F.png" />
        <FontAwesomeIcon
          icon={faPlay}
          className="aboutvediofont"
          onClick={() => {
            setplaystate(true);
          }}
        />
      </div>
    </div>
  );
};

export default About;
