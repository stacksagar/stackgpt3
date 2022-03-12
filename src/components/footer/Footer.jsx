import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="section footer">
      <h1 className="gradient-text">
        Do you want to step in to the future before others
      </h1>
      <button>Request Early Access</button>
      <br />
      <br />
      <div className="footer-links">
        <div>
          <h1>GPT-3</h1>
          <small>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</small>
        </div>

        <div>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Get in touch</h4>
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>contact@domain.com</p>
        </div>
      </div>

      <p>© 2021 GPT-3. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
