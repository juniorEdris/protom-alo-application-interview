import React from "react";
import { NewsHeading, PostImage, PrimaryOverlay } from "../atoms";

const HeroHeadImage = () => {
  return (
    <div className="hero_header_image">
      <PrimaryOverlay />
      <PostImage src={"https://dummyimage.com/964x540/000/fff"} alt={"l"} />
      <div className="headline">
        <NewsHeading
          title={"মাসে ২ হাজার ৪০০ টাকা সম্মানী পান এই শিল্পীরা"}
          subtitle={"akjsdhjksd"}
        />
      </div>
    </div>
  );
};

export default HeroHeadImage;
