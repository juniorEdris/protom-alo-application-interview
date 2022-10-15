import React, { useEffect, useState } from "react";
import { TabButton } from "../atoms";
import Headings from "./Headings";
import tabData from "../../utils/tabData.json";

const ListTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState("সর্বশেষ");
  const [news, setNews] = useState([]);

  const handleTabNews = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    const allNews = Object.values(tabData)?.filter(
      (tab) => tab?.name === selectedTab
    );
    setNews(allNews[0]?.items);
  }, [selectedTab]);

  return (
    <>
      <div className="list_tabs">
        {Object.values(tabData).map((tab, key) => (
          <TabButton
            key={key}
            tab={tab?.name}
            customClass={selectedTab === tab?.name ? "active" : ""}
            handleTab={() => handleTabNews(tab?.name)}
          />
        ))}
      </div>
      <div className="list_heading">
        {news?.map((topic) => (
          <Headings
            id={topic?.id}
            details={topic}
            customClass={topic?.sort ? `order-${topic?.sort}` : ""}
          />
        ))}
      </div>
    </>
  );
};

export default ListTabs;
