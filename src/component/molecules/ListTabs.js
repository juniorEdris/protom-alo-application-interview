import React, { useEffect, useState } from "react";
import { TabButton } from "../atoms";
import Headings from "./Headings";
import tabData from "../../utils/tabData.json";

const ListTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState("সর্বশেষ");
  const [news, setNews] = useState([]);

  console.log(news);

  const handleTabNews = (tabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    const allNews = Object.values(tabData)?.filter(
      (tab) => tab?.name === selectedTab
    );
    console.log(allNews);
    setNews(allNews[0]?.items);
  }, [selectedTab]);

  return (
    <>
      <div className="list_tabs ">
        {Object.values(tabData).map((tab, key) => (
          <TabButton
            key={key}
            tab={tab?.name}
            customClass={selectedTab === tab?.name ? "active" : ""}
            handleTab={() => handleTabNews(tab?.name)}
          />
        ))}
      </div>
      <div>
        {news?.map((topic) => (
          <Headings
            id={topic?.id}
            title={topic?.headline}
            subtitle={topic?.subheadline}
          />
        ))}
      </div>
    </>
  );
};

export default ListTabs;
