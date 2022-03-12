import React from "react";
import "./brand.css";
import google from "../../assets/images/google.png";
import dropbox from "../../assets/images/dropbox.png";
import shopify from "../../assets/images/shopify.png";
import slack from "../../assets/images/slack.png";
import atlassian from "../../assets/images/atlassian.png";

const Brand = () => {
  return (
    <div className="brand">
      <img src={google} alt="" />
      <img src={dropbox} alt="" />
      <img src={atlassian} alt="" />
      <img src={slack} alt="" />
      <img src={shopify} alt="" />
    </div>
  );
};

export default Brand;
