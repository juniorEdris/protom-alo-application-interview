import React from "react";
import ListTabs from "../molecules/ListTabs";

const ListBody = () => {
  const data = [{ name: "সর্বশেষ" }, { name: "পঠিত" }, { name: "আলোচিত" }];
  return (
    <>
      <ListTabs tabs={data} />
    </>
  );
};

export default ListBody;
