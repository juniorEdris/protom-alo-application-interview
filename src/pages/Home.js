import React from "react";
import HeroWrapper from "../component/organisms/HeroWrapper";
import ListBody from "../component/organisms/ListBody";

const Home = () => {
  return (
    <div className="home_page">
      <div className="news_left">
        <ListBody />
      </div>
      <div className="news_right">
        <HeroWrapper />
        <div className="order-4">ad</div>
        <div className="order-3">list</div>
      </div>
      {/*<div className="order-5">5</div> */}
    </div>
  );
};

export default Home;
