import React from "react";

const HeadRow = ({text}) => {
  return (
    <div>
      {" "}
      <div className="head-row">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default HeadRow;
