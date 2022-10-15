import React from "react";
import parse from "html-react-parser";

const DetailsDescription = ({ description = "" }) => {
  return <div className="details_description">{parse(description)}</div>;
};

export default DetailsDescription;
