import React from "react";
import { PostImage } from "../atoms";
import HeadingsWithTime from "../molecules/HeadingsWithTime";

const NewsFeedContent = ({ topic }) => {
  return (
    <div className="newsfeed_content">
      <div>
        <HeadingsWithTime
          title={topic?.headline}
          subtitle={topic?.subheadline}
        />
      </div>
      <div>
        <PostImage src={topic?.thumb} alt="L" />
      </div>
    </div>
  );
};

export default NewsFeedContent;
