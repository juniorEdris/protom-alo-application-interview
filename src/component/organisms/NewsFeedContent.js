import React from "react";
import { PostImage } from "../atoms";
import HeadingsWithTime from "../molecules/HeadingsWithTime";

const NewsFeedContent = () => {
  return (
    <div className="newsfeed_content">
      <div>
        <HeadingsWithTime />
      </div>
      <div>
        <PostImage src="https://dummyimage.com/580x340/000/fff" alt="L" />
      </div>
    </div>
  );
};

export default NewsFeedContent;
