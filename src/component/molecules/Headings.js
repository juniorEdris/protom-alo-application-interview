import React from "react";
import { Anchore, NewsHeading } from "../atoms";

const Headings = ({ title, subtitle, id, customClass = "" }) => {
  return (
    <div className={`headings ${customClass}`} key={id}>
      <Anchore to={`/details/${id}`}>
        <NewsHeading title={title} subtitle={subtitle} heading={"১"} />
      </Anchore>
    </div>
  );
};

export default Headings;
