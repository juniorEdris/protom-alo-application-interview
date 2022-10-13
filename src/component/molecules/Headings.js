import React from "react";
import { Anchore, NewsHeading } from "../atoms";

const Headings = ({ title, subtitle, id }) => {
  return (
    <div className="headings" key={id}>
      <Anchore id={id}>
        <NewsHeading title={title} subtitle={subtitle} />
      </Anchore>
    </div>
  );
};

export default Headings;
