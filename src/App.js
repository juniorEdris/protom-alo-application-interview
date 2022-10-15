import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Logo from "./component/molecules/Logo";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

const App = () => {
  const { pathname = "" } = useLocation();

  useEffect(() => {
    if (!pathname.includes("details/")) {
      localStorage.removeItem("details");
    }
  }, [pathname]);

  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<NewsDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
