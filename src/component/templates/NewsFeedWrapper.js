import React from "react";
import { Anchore } from "../atoms";
import NewsFeedContent from "../organisms/NewsFeedContent";

const NewsFeedWrapper = () => {
  return (
    <div className="newsfeed_wrapper">
      <Anchore to="/">
        <NewsFeedContent />
      </Anchore>
      <Anchore to="/">
        <NewsFeedContent />
      </Anchore>
      <Anchore to="/">
        <NewsFeedContent />
      </Anchore>
    </div>
  );
};

export default NewsFeedWrapper;
