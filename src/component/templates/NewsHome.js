import React from "react";
import SmallAd from "../molecules/SmallAd";
import HeroWrapper from "../organisms/HeroWrapper";
import ListBody from "../organisms/ListBody";
import NewsFeedWrapper from "./NewsFeedWrapper";

const NewsHome = () => {
  return (
    <div className="news_home">
      <div className="news_left">
        <ListBody />
      </div>
      <div className="news_right">
        <HeroWrapper />
      </div>
      <div className="mobile_ad">
        <SmallAd />
      </div>
      <div className="home_right">
        <div className="desktop_ad">
          <SmallAd />
        </div>
        <NewsFeedWrapper />
      </div>
    </div>
  );
};

export default NewsHome;
