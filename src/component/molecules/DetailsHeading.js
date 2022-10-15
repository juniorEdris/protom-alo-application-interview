import React from "react";
import { Heading, Topic } from "../atoms";

const DetailsHeading = ({ topic = "", heading = "" }) => {
  return (
    <div className="deatils_heading">
      <div>
        <Topic content={topic} />
      </div>
      <div>
        <Heading customClass="deatils_heading_headline" heading={heading} />
      </div>
    </div>
  );
};

export default DetailsHeading;
