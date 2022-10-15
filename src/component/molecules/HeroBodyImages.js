import React from "react";
import { Anchore, NewsHeading, PostImage } from "../atoms";

const HeroBodyImages = () => {
  return (
    <div className="">
      <Anchore to={`/`}>
        <div>
          <PostImage src={"https://dummyimage.com/964x540/000/fff"} alt={"l"} />
        </div>
        <NewsHeading
          title={"মাসে ২ হাজার ৪০০ টাকা সম্মানী পান এই শিল্পীরা"}
          subtitle={"akjsdhjksd"}
        />
      </Anchore>
    </div>
  );
};

export default HeroBodyImages;
