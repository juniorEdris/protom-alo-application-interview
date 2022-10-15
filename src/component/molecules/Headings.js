import React from "react";
import { Anchore, NewsHeading } from "../atoms";

const Headings = ({ details, id, customClass = "" }) => {
  const handleDetails = (topic) => {
    localStorage.setItem("details", JSON.stringify(topic));
  };
  return (
    <div className={`headings ${customClass}`} key={id}>
      <Anchore to={`/details/${id}`} callBack={() => handleDetails(details)}>
        <NewsHeading
          title={details?.headline}
          subtitle={details?.subheadline}
          heading={"১"}
        />
      </Anchore>
    </div>
  );
};

export default Headings;
