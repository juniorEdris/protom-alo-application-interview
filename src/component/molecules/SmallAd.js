import React from "react";
import { AdSection, Anchore, Heading } from "../atoms";

const SmallAd = () => {
  return (
    <div className="small_ad">
      <Heading heading={"বিজ্ঞাপন"} />
      <Anchore>
        <AdSection>
          <div className="ad_section_content" />
        </AdSection>
      </Anchore>
    </div>
  );
};

export default SmallAd;
