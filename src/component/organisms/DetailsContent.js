import React from "react";
import { PostImage } from "../atoms";
import DetailsDescription from "../molecules/DetailsDescription";
import DetailsHeading from "../molecules/DetailsHeading";

const DetailsContent = () => {
  return (
    <div className="details_content">
      <div>
        <DetailsHeading />
      </div>
      <div className="details_content_image">
        <PostImage src="https://dummyimage.com/964x540/000/fff" alt="image" />
      </div>
      <div>
        <DetailsDescription />
      </div>
    </div>
  );
};

export default DetailsContent;
