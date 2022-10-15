import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../component/atoms";
import DetailsContent from "../component/organisms/DetailsContent";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <Container>
      <div className="news_details">
        <div>NewsDetails {id}</div>
        <DetailsContent />
      </div>
    </Container>
  );
};

export default NewsDetails;
