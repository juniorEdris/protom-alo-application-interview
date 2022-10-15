import React from "react";
import { Anchore, NewsHeading, PostImage } from "../atoms";

const HeroBodyImages = ({ news = {} }) => {
  const handleDetails = (topic) => {
    localStorage.setItem("details", JSON.stringify(topic));
  };
  return (
    <div className={news?.sort ? `order-${news?.sort}` : ""} key={news?.id}>
      <Anchore to={`/details/${news?.id}`} callBack={() => handleDetails(news)}>
        <div>
          <PostImage src={news?.thumb} alt={news?.headline} />
        </div>
        <NewsHeading title={news?.headline} subtitle={news?.subheadline} />
      </Anchore>
    </div>
  );
};

export default HeroBodyImages;
