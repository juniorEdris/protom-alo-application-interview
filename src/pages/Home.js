import React from "react";
import { Container } from "../component/atoms";
import FullAd from "../component/molecules/FullAd";
import NewsHome from "../component/templates/NewsHome";

const Home = () => {
  return (
    <Container>
      <div className="home_page">
        <NewsHome />
        <div className="">
          <FullAd />
        </div>
      </div>
    </Container>
  );
};

export default Home;
