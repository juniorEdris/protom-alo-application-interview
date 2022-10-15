import React from "react";
import { Anchore, NewsHeading, PostImage, PrimaryOverlay } from "../atoms";

const HeroHeadImage = ({ news = {} }) => {
  const handleDetails = (topic) => {
    localStorage.setItem("details", JSON.stringify(topic));
  };

  return (
    <Anchore to={`/details/${news?.id}`} callBack={() => handleDetails(news)}>
      <div className="hero_header_image">
        <PrimaryOverlay />
        <PostImage src={news?.thumb} alt={"l"} />
        <div className="headline">
          <NewsHeading title={news?.headline} subtitle={news?.subheadline} />
        </div>
      </div>
    </Anchore>
  );
};

export default HeroHeadImage;
