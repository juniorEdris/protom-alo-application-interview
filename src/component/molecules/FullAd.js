import React from "react";
import { AdSection, Anchore } from "../atoms";

const FullAd = () => {
  return (
    <div className="full_ad">
      <Anchore to={`/`}>
        <AdSection>
          <div className="ad_section_content">Ad</div>
        </AdSection>
      </Anchore>
    </div>
  );
};

export default FullAd;
