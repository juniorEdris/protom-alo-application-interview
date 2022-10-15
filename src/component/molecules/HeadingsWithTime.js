import React from "react";
import { AgoTime, NewsHeading } from "../atoms";

const HeadingsWithTime = () => {
  return (
    <div className="headings_with_time">
      <NewsHeading
        title={"মাসে ২ হাজার ৪০০ টাকা সম্মানী পান এই শিল্পীরা"}
        subtitle={"akjsdhjksd"}
      />
      <AgoTime time="১" />
    </div>
  );
};

export default HeadingsWithTime;
