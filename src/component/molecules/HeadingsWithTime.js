import React from "react";
import { AgoTime, NewsHeading } from "../atoms";

const HeadingsWithTime = ({ title = "", subtitle = "", time = "১০" }) => {
  return (
    <div className="headings_with_time">
      <NewsHeading title={title} subtitle={subtitle} />
      <AgoTime time={time} />
    </div>
  );
};

export default HeadingsWithTime;
