import React from "react";
import { Anchore } from "../atoms";
import NewsFeedContent from "../organisms/NewsFeedContent";
import data from "../../utils/newsfeedData.json";

const NewsFeedWrapper = () => {
  const handleDetails = (topic) => {
    localStorage.setItem("details", JSON.stringify(topic));
  };

  return (
    <div className="newsfeed_wrapper">
      {data?.selected.items?.map((topic) => (
        <div
          className={`newsfeed_item order-${topic?.sort ? topic?.sort : ""}`}
          key={topic?.id}
        >
          <Anchore
            to={`/details/${topic?.id}`}
            callBack={() => handleDetails(topic)}
          >
            <NewsFeedContent topic={topic} />
          </Anchore>
        </div>
      ))}
    </div>
  );
};

export default NewsFeedWrapper;
