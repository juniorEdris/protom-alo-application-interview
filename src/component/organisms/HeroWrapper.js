import React from "react";
import { Heading } from "../atoms";
import HeroBodyImages from "../molecules/HeroBodyImages";
import HeroHeadImage from "../molecules/HeroHeadImage";
import data from "../../utils/selectedData.json";

const HeroWrapper = () => {
  const selectedNews = data?.selected?.items[0];
  const slicedNews = data?.selected?.items.slice(1, 33);
  return (
    <div className="hero_wrapper">
      <Heading heading={"নির্বাচিত"} customClass="selected_section" />
      <div className="news_right_hero">
        <div className="news_right_hero_main">
          <HeroHeadImage news={selectedNews} />
        </div>
        <div className="news_right_hero_secondary">
          {slicedNews?.map((news) => (
            <HeroBodyImages news={news} key={news?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;
