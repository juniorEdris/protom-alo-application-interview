import React from "react";
import { Anchore, Heading } from "../atoms";
import HeroBodyImages from "../molecules/HeroBodyImages";
import HeroHeadImage from "../molecules/HeroHeadImage";

const HeroWrapper = () => {
  return (
    <div className="hero_wrapper">
      <Heading heading={"নির্বাচিত"} customClass="selected_section" />
      <div className="news_right_hero">
        <div className="news_right_hero_main">
          <Anchore to={`/details/${2}`}>
            <HeroHeadImage />
          </Anchore>
        </div>
        <div className="news_right_hero_secondary">
          <HeroBodyImages />
          <HeroBodyImages />
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;
