import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25908c9c-d71c-4ce5-98f1-ffd391bb7bdc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="ourprogramtext contact">
        <p>CONTACT US</p>
        <h2>Get in Touch</h2>
      </div>

      <div className="contactmainbox">
        <div className="contactustext">
          {/* box 1 */}
          <div className="contacttext1">
            Send us a message
            <img src="https://greatstack.in/assets/msg-icon-ClKDHhj8.png" />
          </div>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <div className="contacticons">
            <FontAwesomeIcon icon={faEnvelope} className="contactusicons" />
            Contact@GreatStack.dev
          </div>
          <div className="contacticons">
            <FontAwesomeIcon icon={faPhone} className="contactusicons" />
            +1 123-456-7890
          </div>
          <div className="contacticons">
            <FontAwesomeIcon icon={faLocation} className="contactusicons" />
            77 Massachusetts , Cambridge 0213 , United States
          </div>
        </div>
        {/* box 2 */}
        <form className="contactusinput" onSubmit={onSubmit}>
          <div>
            <label htmlFor="">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              required
            />
          </div>
          <div>
            <label htmlFor="">Write your message here</label>
            <input
              type="text"
              className="biginput"
              placeholder="Enter your message"
              required
            />
          </div>
          <button className="submitnow">
            Submit now <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </>
  );
};

export default Contact;
