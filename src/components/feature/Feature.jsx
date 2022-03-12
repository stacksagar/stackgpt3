import React from "react";
import "./feature.css";
import Feature1Box from "./Feature1Box";
import possibilitys from "../../assets/images/possibilitys.png";
const Feature = () => {
  return (
    <div className="section2">
      <div className="feature-1">
        <div>
          <h2 className="gradient-text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <small>Request Early Access to Get Started</small>
        </div>

        <div>
          <Feature1Box
            title="Improving end distrusts instantly"
            par="From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded."
          />
          <Feature1Box
            title="Become the tended active"
            par="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
          <Feature1Box
            title="Message or am nothing"
            par="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
          <Feature1Box
            title="Really boy law county"
            par="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>
      <br />
      <br />
      <div className="feature-2">
        <div>
          <img src={possibilitys} alt="possibilitys" />
        </div>
        <div>
          <small style={{color: "#71e5ff"}}>
            Request Early Access to Get Started
          </small>
          <h2 className="gradient-text">
            The possibilities are beyond your imagination
          </h2>
          <p>
            <small>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </small>
          </p>
          <small style={{color: "#ff8a71"}}>
            Request Early Access to Get Started
          </small>
        </div>
      </div>
    </div>
  );
};

export default Feature;
