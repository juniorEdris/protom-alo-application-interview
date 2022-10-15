import React from "react";
import { PostImage } from "../atoms";
import DetailsDescription from "../molecules/DetailsDescription";
import DetailsHeading from "../molecules/DetailsHeading";

const DetailsContent = ({ details }) => {
  return (
    <div className="details_content">
      <div>
        <DetailsHeading
          topic={details?.subheadline}
          heading={details?.headline}
        />
      </div>
      <div className="details_content_image">
        <PostImage src={details?.thumb} alt={details?.headline} />
      </div>
      <div>
        <DetailsDescription description={details?.descriptions} />
      </div>
    </div>
  );
};

export default DetailsContent;
