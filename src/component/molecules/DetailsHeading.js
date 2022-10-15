import React from "react";
import { Heading, Topic } from "../atoms";

const DetailsHeading = ({ topic = "", heading = "" }) => {
  return (
    <div className="deatils_heading">
      <div>
        <Topic content={topic || "মতামত"} />
      </div>
      <div>
        <Heading
          customClass="deatils_heading_headline"
          heading={
            heading ||
            "বঙ্গোপসাগরে নিখোঁজ এক জেলের লাশ উদ্ধার, আরেকজনের সন্ধান মেলেনি"
          }
        />
      </div>
    </div>
  );
};

export default DetailsHeading;
