import React from "react";
import { Anchore, Heading, PostImage } from "../atoms";
import HeroHeadImage from "../molecules/HeroHeadImage";

const HeroWrapper = () => {
  return (
    <div>
      <Heading heading={"নির্বাচিত"} customClass="selected_section" />
      <div className="news_right_hero">
        <div className="news_right_hero_main">
          <Anchore id={"2"}>
            <HeroHeadImage />
          </Anchore>
        </div>
        <div className="news_right_hero_secondary">
          <div className="">
            <div>
              <PostImage
                src={"https://dummyimage.com/580x340/000/fff"}
                alt={"l"}
              />
            </div>
          </div>
          <div className="">
            <div>
              <PostImage
                src={"https://dummyimage.com/580x340/000/fff"}
                alt={"l"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;
