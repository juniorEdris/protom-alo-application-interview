import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../component/atoms";
import DetailsContent from "../component/organisms/DetailsContent";

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("details")) || {}
  );

  useEffect(() => {
    if (!id || !details?.id) {
      navigate("/", { replace: true });
    }
  }, [navigate, id, details]);

  return (
    <Container>
      <div className="news_details">
        <DetailsContent details={details} />
      </div>
    </Container>
  );
};

export default NewsDetails;
