import React from "react";
import SmallAd from "../component/molecules/SmallAd";
import HeroWrapper from "../component/organisms/HeroWrapper";
import ListBody from "../component/organisms/ListBody";

const Home = () => {
  return (
    <div className="home_page">
      <div className="news_left">
        <ListBody />
        <div className="mobile_ad">
          <SmallAd />
        </div>
      </div>
      <div className="news_right">
        <HeroWrapper />
      </div>
      <div className="home_right">
        <div className="desktop_ad">
          <SmallAd />
        </div>
        <div className="">1 list 1 list 1 list</div>
      </div>
      <div className="">full ad</div>
    </div>
  );
};

export default Home;
