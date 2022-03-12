import React from "react";
import "./header.css";
import people from "../../assets/images/people.png";
import ai from "../../assets/images/ai.png";
const Header = () => {
  return (
    <div className="header section">
      <div className="header-content">
        <h1 className="gradient-text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="email-box">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="people-area">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
