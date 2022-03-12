import React from "react";

const Feature1Box = ({title, par}) => {
  return (
    <div>
      <h3>
        <span>{title}</span>
      </h3>
      <p>
        <small>{par} </small>
      </p>
    </div>
  );
};

export default Feature1Box;
